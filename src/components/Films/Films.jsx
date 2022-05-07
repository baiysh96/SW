import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "../Spinner";

const Films = () => {
    const [films,setFilms] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
            axios(`https://swapi.dev/api/films/`)
            .then((res) => {
                console.log(setFilms(res.data))
                setIsLoading(false)

            })
        },[])
            if(isLoading){
            return <Spinner />
        }
      return (
          <div className="elements-box">
            <div className="pagination">
                <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}} to={`/`}>Home / Films</Link>
              <div>
                  {
                      Array(Math.ceil(films.count / 6)).fill(0).map((buttonNum, idx) => (
                          <button  className="pagination-btn" key={idx} >{idx + 1}</button>
                      ))
                  }
              </div>
            </div>
              <div className="row">
                {
                    films.results.map((film,index) => (
                        <div key={index} className="item-col">
                            <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}} to={`/films/${index + 1}`}
                                className="element_item">
                              <div className="element-img">
                                <img src={`https://starwars-visualguide.com/assets/img/films/${index + 1}.jpg`} alt=""/>
                                </div>
                            <h3 className="element-title">{film.title}</h3>
                        </Link>
                    </div>
                    ))
                }
            </div>
          </div>
            );

};

export default Films;
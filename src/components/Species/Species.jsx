import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "../Spinner";


const Species = () => {
    const [species,setSpecies] = useState({})
    const [page,setPage] = useState(0)
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://swapi.dev/api/species?page=${page + 1}`)
            .then((res) => {
                setSpecies(res.data)
                setIsLoading(false)

            })
    },[page])
    if(isLoading){
        return <Spinner />
    }

    return (
        <div className="elements-box">

            <div className="pagination">
                <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}} to={`/`}>Home / Species</Link>
              <div>
                  {
                      Array(Math.ceil(species.count / 10)).fill(0).map((buttonNum, idx) => (
                          <button  onClick={() => setPage((idx))}
                                   className="pagination-btn"
                                   key={idx} >{idx + 1}
                          </button>
                      ))
                  }
              </div>
            </div>
            <div className="row">

                {
                    species.results.map((people,index) => (
                        <div key={index} className="item-col">
                            <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}} to={`/species/${10 * page+index + 1}`}  className="element_item">
                                <div className="element-img">
                                    <img src={`https://starwars-visualguide.com/assets/img/species/${10 * page + index  + 1}.jpg`} alt=""/>
                                </div>
                                <h2 className="element-title">{ people.name}</h2>
                            </Link>
                        </div>

                    ))
                }

            </div>
        </div>
    );
};

export default Species;
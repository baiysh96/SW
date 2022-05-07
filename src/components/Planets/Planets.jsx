import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const Planets = () => {
    const [planets,setPlanets] = useState({})
    const [page,setPage] = useState(0)
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://swapi.dev/api/planets?page=${page + 1}`)
            .then((res) => {
                setPlanets(res.data)
                setIsLoading(false)

            })
    },[page])
    if(isLoading){
        return <Spinner />
    }
    return (
        <div className="elements-box">
            <div className="pagination">
                <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}} to={`/`}>Home / Planets</Link>
                <div>
                    {
                        Array(Math.ceil(planets.count / 10)).fill(0).map((buttonNum, idx) => (
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
                        planets.results.map((people,index) => (
                            <div key={index} className="item-col">
                                <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}} to={`/planets/${index + 1}`} className="element_item">
                                    <div className="element-img">
                                        <img src={`https://starwars-visualguide.com/assets/img/planets/${10 * page+index + 1}.jpg`} alt=""/>
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
export default Planets;
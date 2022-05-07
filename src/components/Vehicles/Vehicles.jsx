import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "../Spinner";


const Vehicles = () => {
    const [vehicles,setVehicles] = useState({})
    const [page,setPage] = useState(0)
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://swapi.dev/api/vehicles?page=${page + 1}`)
            .then((res) => {
                setVehicles(res.data)
                setIsLoading(false)
            })

    },[page])
    if(isLoading){
        return <Spinner />
    }
    return (
        <div className="elements-box">
            <div className="pagination">
                <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}} to={`/`}>Home / Vehicles</Link>

                <div>
               {
                   Array(Math.ceil(vehicles.count / 10)).fill(0).map((buttonNum, idx) => (
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
                    vehicles.results.map((item,index) => (
                        <div key={index} className="item-col">
                            <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}} className="element_item" to={`/vehicles/${index +1}`}>
                                <div className="element-img">
                                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${10 * page + index + 1}.jpg`}
                                         alt=""
                                    />
                                </div>
                                <h2 className="element-title">{item.name}{10 * page + index + 1}</h2>
                            </Link>
                        </div>

                    ))
                }

            </div>
        </div>
    );

};

export default Vehicles;
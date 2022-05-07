import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../Spinner";
import {Link, useParams} from "react-router-dom";

const PlanetsInfo = () => {
    const {plan} = useParams()
    const [planet,setPlanet] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://swapi.dev/api/planets/${plan}`)
            .then((res) => {
                setPlanet(res.data)
                setIsLoading(false)

            })
    },[plan])
    if(isLoading){
        return <Spinner />
    }
    return (
        <div>
            <div className="pagination">
                <Link to="/planets">
                    <button  className="pagination-btn" >{plan}</button>
                </Link>
            </div>

            <div className="row">
                <div className="element-img col-4">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${plan}.jpg`}  alt=""/>
                </div>
                <div className="col-8 ">
                    <h3 className="element-title title">{` ${planet.name}`}</h3>
                    <ul className="item-group">
                        <li>{`Population:  ${planet.population}`}</li>
                        <li>{`Rotation Period:  ${planet.rotation_period}`}</li>
                        <li>{`Orbital Period:  ${planet.orbital_period}`}</li>
                        <li>{`Diameter:  ${planet.diameter}`}</li>
                        <li>{`Terrain: ${planet.gravity}`}</li>
                        <li>{`Surface Water: ${planet.surface_water}`}</li>
                        <li>{ `Climate: ${planet.climate}`}</li>
                    </ul>
                  <Link to={`/planets/${+plan + 1}`}>
                      <button className="element-btn">Go next</button>
                  </Link>
                </div>
            </div>
        </div>
    );
};

export default PlanetsInfo;
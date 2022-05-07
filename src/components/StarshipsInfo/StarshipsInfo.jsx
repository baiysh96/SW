import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../Spinner";
import {Link, useParams} from "react-router-dom";

const StarshipsInfo = () => {
    const [starship,setStarship] = useState({})
    const{ship} = useParams()
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://swapi.dev/api/starships/${ship}`)
            .then((res) => {
                setStarship(res.data)
                setIsLoading(false)
            })
    },[ship])
    if(isLoading){
        return <Spinner />
    }
    return (
        <div>
            <div className="pagination">
                <Link to="/starships">

                    <button  className="pagination-btn" >{ship}</button>
                </Link>
                <div className="row">
                    <div className="element-img col-4">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${ship}.jpg`}  alt=""/>
                    </div>
                    <div className="col-8">
                        <h2 className="element-title">{ starship.name}</h2>
                        <ul className="item-group">
                            <li>{`MGLT: ${starship.MGLT}`}</li>
                            <li>{`Manufacturer:  ${starship.manufacturer}`}</li>
                            <li>{`Model: ${starship.model}`}</li>
                            <li>{`Class :  ${starship.class}`}</li>
                            <li>{`Speed:  ${starship.speed}`}</li>
                            <li>{`Length: ${starship.length}`}</li>
                        </ul>
                        <Link to={`/starships/${(+ship + 1)<=36?+ship + 1:ship}`}>
                            <button className="element-btn">Go next</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default StarshipsInfo;
import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../Spinner";

const VehiclesInfo = () => {
    const [vehicle,setVehicle] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const {bonjorno} = useParams()
    useEffect(() => {
        axios(`https://swapi.dev/api/vehicles/${bonjorno}`)
            .then((res) => {
                console.log( setVehicle(res.data))
                setIsLoading(false)
            })

    },[bonjorno])
    if(isLoading){
        return <Spinner />
    }
    return (
        <div>
            <div className="pagination">
                <Link to="/vehicles">
                    <button  className="pagination-btn btn">back</button>
                </Link>
            </div>

            <div className="row">
                <div className="element_item col-4">
                    <div className="element-img">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${bonjorno}.jpg`}
                             alt=""
                        />
                    </div>
                </div>

               <div  className="col-8">
                   <h2 className="element-title">{vehicle.name}</h2>
                      <ul className="item-group">
                                    <li>{`Cost:  ${vehicle.cost_in_credits}`}</li>
                                    <li>{`Manufacturer:  ${vehicle.manufacturer}`}</li>
                                    <li>{`Model: ${vehicle.model}`}</li>
                                    <li>{`Class :  ${vehicle.vehicle_class}`}</li>
                                    <li>{`Speed:  ${vehicle.max_atmosphering_speed}`}</li>
                                    <li>{`Length: ${vehicle.length}`}</li>
                                </ul>
                            </div>

            </div>
        </div>
    );
};

export default VehiclesInfo;
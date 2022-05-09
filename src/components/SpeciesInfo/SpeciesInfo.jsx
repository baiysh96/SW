import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Spinner from "../Spinner";

const SpeciesInfo = () => {
    const {item} = useParams()
    const [spec,setSpec] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://swapi.dev/api/species/${item}`)
            .then((res) => {
                setSpec(res.data)
                setIsLoading(false)

            })
    },[item])
    if(isLoading){
        return <Spinner />
    }
    return (
    <div>
        <div className="pagination">
            <Link to="/species">
                <button  className="pagination-btn">back</button>
            </Link>
        </div>
            <div className="row">
                <div  className="col-4">
                       <div className="element_item">
                        <div className="element-img">
                        <img src={`https://starwars-visualguide.com/assets/img/species/${item}.jpg`} alt=""/>

                            </div>
                       </div>
                </div>
                    <div className="col-8">
                                <h2 className="element-title">{ spec.name}</h2>
                                <ul className="item-group">
                                    <li>{`Classification: ${spec.classification}`}</li>
                                    <li>{`Designation: ${spec.designation}`}</li>
                                    <li>{`Language: ${spec.language}`}</li>
                                    <li>{`Avg Lifespan:${spec.average_lifespan}`}</li>
                                    <li>{`Avg Height: ${spec.average_height}`}</li>
                                    <li>{`Skin Colors: ${spec.skin_colors}`}</li>
                                </ul>
                        <Link to={`/species/${(+item + 1)<=36?+item + 1:item}`}>
                            <button className="element-btn">Go next</button>
                        </Link>
                        <Link to="/species">
                            <button className="element-btn">Exit</button>
                        </Link>
                  </div>

            </div>

    </div>
    );
};

export default SpeciesInfo;
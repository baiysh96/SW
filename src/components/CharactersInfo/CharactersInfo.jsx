import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const CharactersInfo = () => {
    const [character,setCharacter] = useState({})
    const {id} = useParams()

    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://swapi.dev/api/people/${id}`)
            .then((res) => {
                setCharacter(res.data)
                setIsLoading(false)
                console.log(res.data)
            })
    }, [id])
    if(isLoading){
        return    <Spinner />
    }
        return (
    <>
            <div className="pagination">
                <Link to="/characters">
                    <button  className="pagination-btn">{id}</button>
                </Link>
            </div>

            <div className="row">
                <div className="element-img col-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}  alt=""/>
                </div>
                <div className="col-8 ">
                    <h3 className="element-title title">{` ${character.name} ${id}`}</h3>
                    <ul className="item-group">
                        <li>{`Birth Year: ${character.birth_year}`}</li>
                        <li>{`Height: ${character.height}`}</li>
                        <li>{`Mass : ${character.mass}`}</li>
                        <li>{`Gender : ${character.gender}`}</li>
                        <li>{`Hair Color: ${character.hair_color}`}</li>
                        <li>{`Skin Color: ${character.skin_color}`}</li>
                    </ul>
                    <Link to={`/characters/${(+id + 1)<=82?+id + 1:id}`}>
                        <button className="element-btn">Go next</button>
                    </Link>
                </div>
            </div>
    </>

        );
};

export default CharactersInfo;
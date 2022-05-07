import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "../Spinner";


const Characters = () => {
    const [characters,setCharacters] = useState({})
    const [page,setPage] = useState(0)
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://swapi.dev/api/people?page=${page + 1}`)
            .then((res) => {
                setCharacters(res.data)
                setIsLoading(false)
            })
    },[page])
    if(isLoading){
        return  <Spinner />
    }
    return (
    <div className="elements-box">
        <div className="pagination">
            <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}} to={`/`}>Home / Characters</Link>
            <div>
                {
                    Array(Math.ceil(characters.count / 10)).fill(0).map((buttonNum, idx) => (
                        <button onClick={() => setPage(idx)}
                                className="pagination-btn"
                                key={idx}>
                            {idx + 1}
                        </button>
                    ))
                }
            </div>
        </div>
        <div className="row">

            {
                characters.results.map((people,index) => (
                    <div key={index} className="item-col">
                        <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}} to={`/characters/{$10 * page + index + 1}`} className="element_item">
                          <div className="element-img">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${10 * page + index + 1}.jpg`} alt=""/>
                          </div>
                            <h2 className="element-title">{ people.name}{10 * page + index + 1}</h2>
                        </Link>
                    </div>
                    ))
            }
        </div>
    </div>
    );
};

export default Characters;
import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import Spinner from "../Spinner";

const FilmsInfo = () => {
    const [film,setFilm] = useState({})
    const {slug} = useParams()
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://swapi.dev/api/films/${slug}`)
            .then((res) => {
                 setFilm(res.data)
                setIsLoading(false)

            })
    },[slug])
    if(isLoading){
        return  <Spinner />
    }
    return (
        <div className="elements-box">
            <div className="pagination">
            <Link to="/films">
                <button  className="pagination-btn btn">back</button>
            </Link>
            </div>
        <div className="row">
            <div className="element-img col-6">
                     <img src={`https://starwars-visualguide.com/assets/img/films/${slug}.jpg`}  height="500" alt=""/>
                 </div>
                 <div className="col-6">
                 <div className="films-item">
                     <h3 className="element-title title">{`Episode ${slug}: ${film.title}`}</h3>
                     <ul  className="item-group">
                         <li >{`Date Created: ${film.created}`}</li>
                         <li >{`Director: ${film.director}`}</li>
                         <li >{`Producer(s): ${film.producer}`}</li>
                         <li >{`Opening Crawl: ${film.opening_crawl}`}</li>
                     </ul>
                     <Link to={`/films/${(+slug + 1) <= 6?+slug + 1:slug}`}>
                         <button className="element-btn">Go next</button>
                     </Link>
                 </div>
                 </div>
             </div>
        </div>

    );
};

export default FilmsInfo;
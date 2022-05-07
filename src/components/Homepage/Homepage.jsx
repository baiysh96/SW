import React from 'react';
import {Link} from "react-router-dom";
import character from "../../assets/images/character.jpeg"
import films from "../../assets/images/films.jpeg"
import planets from "../../assets/images/planets.jpeg"
import species from "../../assets/images/species.jpeg"
import starships from "../../assets/images/starships.jpeg"
import vehicles from "../../assets/images/vehicles.jpeg"
import Footer from "../Footer";


const Homepage = () => {
    return (
        <div className="row">
            <div className="col-4">
            <Link to="characters">
                    <div className="homepage-item">
                        <img src={character} alt=""/>
                        <div className="homepage-list">
                            <h2 className="homepage-title characters-color">Characters</h2>
                        </div>

                    </div>
            </Link>
                </div>
            <div className="col-4">
                <Link to="films">
                    <div className="homepage-item">
                        <img src={films} alt=""/>
                        <div className="homepage-list">
                            <h2 className="homepage-title planets-color">Films</h2>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-4">
                <Link to="species">
                    <div className="homepage-item">
                        <img src={species} alt=""/>
                       <div className="homepage-list">
                           <h2 className="homepage-title">Species</h2>
                       </div>
                    </div>
                </Link>
            </div>
            <div className="col-4">
                <Link to="starships">
                    <div className="homepage-item">
                        <img src={starships} alt=""/>
                        <div className="homepage-list">
                            <h2 className="homepage-title starships-color">Starships</h2>
                        </div>

                    </div>
                </Link>
            </div>
            <div className="col-4">
               <Link to="vehicles">
                   <div className="homepage-item">
                       <img src={vehicles} alt=""/>
                       <div className="homepage-list">
                           <h2 className="homepage-title vehicles-color">Vehicles</h2>
                       </div>

                   </div>
               </Link>
            </div>
            <div className="col-4">
                <Link to="planets">
                    <div className="homepage-item">
                        <img src={planets} alt=""/>
                        <div className="homepage-list">
                            <h2 className="homepage-title planets-color">Planets</h2>
                        </div>

                    </div>
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;
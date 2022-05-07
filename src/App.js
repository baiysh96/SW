import React from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import './App.css';
import logo from "../src/assets/images/logo.png"
import Homepage from "./components/Homepage";
import Characters from "./components/Characters";
import Films from "./components/Films";
import Species from "./components/Species";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";
import Planets from "./components/Planets";
import FilmsInfo from "./components/Filmsinfo";
import CharactersInfo from "./components/CharactersInfo";
import VehiclesInfo from "./components/VehiclesInfo";
import SpeciesInfo from "./components/SpeciesInfo";
import PlanetsInfo from "./components/PlanetsInfo";
import StarshipsInfo from "./components/StarshipsInfo";

function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <div className="logo" >
                <Link to="/">
                    <img className="logo-img"  src={logo} alt="logo"/>
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<Homepage />} ></Route>
                <Route path="/Characters" element={<Characters />}></Route>
                <Route path="/Characters/:id" element={<CharactersInfo />}></Route>
                <Route path="/Films" element={<Films />} ></Route>
                <Route path={`/Films/:slug`} element={<FilmsInfo />} ></Route>
                <Route path="/Species" element={<Species />} ></Route>
                <Route path="/Species/:item" element={<SpeciesInfo />} ></Route>
                <Route path="/Starships" element={<Starships />} ></Route>
                <Route path="/Starships/:ship" element={<StarshipsInfo />} ></Route>
                <Route path="/Vehicles" element={<Vehicles />} ></Route>
                <Route path="/Vehicles/:bonjorno" element={<VehiclesInfo />} ></Route>
                <Route path="/Planets" element={<Planets />} ></Route>
                <Route path="/Planets/:plan" element={<PlanetsInfo />} ></Route>
            </Routes>
        </div>
    </BrowserRouter>
)

}
 export default App;

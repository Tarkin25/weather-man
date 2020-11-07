import React from "react";
import { CitiesContextProvider } from "../CitiesContext/CitiesContext";
import CityList from "../CityList/CityList";
import "./App.css";
import backgroundImage from "../../assets/images/clouds.jpg";

const App = () => {
    return (
        <div className="App">
            <img className="background-image" alt="background" src={backgroundImage} />
            <CitiesContextProvider>
                <CityList />
            </CitiesContextProvider>
        </div>
    );
};

export default App;

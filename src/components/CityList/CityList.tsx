import React, { useContext } from "react";
import CitiesContext from "../CitiesContext/CitiesContext";
import CityForecast from "../CityForecast/CityForecast";
import "./CityList.css";

const CityList = () => {
    const { cities } = useContext(CitiesContext);

    return (
        <section className="CityList">
            <div className="container">
                <div className="list">
                    {cities.map((city) => (
                        <div className="item" key={city}>
                            <CityForecast city={city} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CityList;

import React, { useEffect, useState } from "react";
import weatherService, { WeatherResponse } from "../../services/weatherService";
import Card from "../Card/Card";
import CardContent from "../Card/CardContent";
import CardHeader from "../Card/CardHeader";
import { removeCity } from "../CitiesContext/actions";
import useDispatch from "../CitiesContext/useDispatch";
import CloseButton from "../CloseButton/CloseButton";
import "./CityForecast.css";

type CityForeCaseProps = {
    city: string;
};

const CityForecast = (props: CityForeCaseProps) => {
    const { city } = props;
    const [forecast, setForecast] = useState<WeatherResponse | null>(null);
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeCity(city));
    };

    const loadForecast = () => {
        weatherService.getWeather(city).then((res) => {
            setForecast(res);
        });
    };

    useEffect(() => {
        loadForecast();

        const interval = setInterval(() => {
            loadForecast();
        }, 60_000);

        return () => {
            clearInterval(interval);
        };
        // eslint-disable-next-line
    }, [city]);

    return (
        <Card className="CityForecast-root">
            <CardHeader action={<CloseButton onClick={handleRemove} />}>
                <h5>
                    {forecast ? `${forecast.location.city}, ${forecast.location.country}` : city}
                </h5>
                {forecast && (
                <img className="CityForecast-icon" src={`http://openweathermap.org/img/wn/${forecast?.weather.icon}@2x.png`} alt={forecast.weather.description} />
                )}
            </CardHeader>
            <CardContent className="CityForecast-content">
                {forecast ? (
                    <div className="CityForecast-container">
                        <div className="CityForecast-grid">
                            <p>Current:</p>
                            <p>{forecast.weather.temperature} &deg; C</p>
                            <p>Feels like:</p>
                            <p>{forecast.weather.feelsLike} &deg; C</p>
                            <p>Minimum:</p>
                            <p>{forecast.weather.minTemperature} &deg; C</p>
                            <p>Maximum:</p>
                            <p>{forecast.weather.maxTemperature} &deg; C</p>
                        </div>
                    </div>
                ): (
                    <h6>Loading...</h6>
                )}
            </CardContent>
        </Card>
    );
};

export default CityForecast;

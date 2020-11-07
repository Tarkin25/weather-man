const url = "http://api.openweathermap.org/data/2.5/weather?appid=7e9fb89639a21a3dd453e08cb7379eec&units=metric";

export type WeatherResponse = {
    location: {
        lattitude: number;
        longitude: number;
        country: string;
        city: string;
    },
    weather: {
        name: string;
        description: string;
        icon: string;
        temperature: number;
        feelsLike: number;
        minTemperature: number;
        maxTemperature: number;
        pressure: number;
        humidity: number;
    }
}

type ApiResponse = {
    base: string;
    clouds: {
        all: number;
    }
    cod: number;
    coord: {
        lat: number;
        lon: number;
    }
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    }
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: 1;
    }
    timezone: number;
    visibility: number;
    weather: {
        description: string;
        icon: string;
        id: number; 
        main: string;
    }[]
    wind: {
        speed: number;
        deg: number;
    }
}

const transformResponse = (response: ApiResponse): WeatherResponse => ({
    location: {
        lattitude: response.coord.lat,
        longitude: response.coord.lon,
        country: response.sys.country,
        city: response.name
    },
    weather: {
        name: response.weather[0].main,
        description: response.weather[0].description,
        icon: response.weather[0].icon,
        temperature: response.main.temp,
        feelsLike: response.main.feels_like,
        minTemperature: response.main.temp_min,
        maxTemperature: response.main.temp_max,
        pressure: response.main.pressure,
        humidity: response.main.humidity
    }
})

const getWeather = (city: string) => fetch(`${url}&q=${city}`).then(res => res.json()).then(apiResponse => transformResponse(apiResponse as ApiResponse));

const weatherService = {
    getWeather
}

export default weatherService;
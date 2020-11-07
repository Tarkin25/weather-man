import React, { createContext, PropsWithChildren, useReducer } from 'react'
import {CityAction} from './actions';
import cityReducer from './reducer';

type CitiesContextValue = {
    cities: string[];
    dispatch: React.Dispatch<CityAction>;
}

const initialContextValue: CitiesContextValue = {
    cities: [],
    dispatch: undefined!
}

const CitiesContext = createContext(initialContextValue);

const getInitialCities = () => {
    const storedCities = localStorage.getItem("cities");

    if(storedCities) {
        return JSON.parse(storedCities) as string[];
    } else return ["adliswil", "zurich", "new york", "moscow", "bordeaux", "riga"];
} 

export const CitiesContextProvider = (props: PropsWithChildren<{}>) => {
    const [cities, dispatch] = useReducer(cityReducer, undefined, getInitialCities);

    return (
        <CitiesContext.Provider value={{cities, dispatch}}>
            {props.children}
        </CitiesContext.Provider>
    )
}

export default CitiesContext

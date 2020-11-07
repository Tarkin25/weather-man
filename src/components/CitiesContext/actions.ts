export const ADD_CITY = "ADD_CITY";
export const REMOVE_CITY = "REMOVE_CITY";

type AddCity = {
    type: typeof ADD_CITY;
    payload: string;
}

type RemoveCity = {
    type: typeof REMOVE_CITY;
    payload: string;
}

export type CityAction = AddCity | RemoveCity;

export const addCity = (city: string): CityAction => ({
    type: ADD_CITY,
    payload: city
})

export const removeCity = (city: string): CityAction => ({
    type: REMOVE_CITY,
    payload: city
})

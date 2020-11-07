import {CityAction, REMOVE_CITY } from "./actions";

export type CityState = string[];

const cityReducer = (state: CityState, action: CityAction): CityState => {
    switch (action.type) {
        case REMOVE_CITY:
            return state.filter(city => city !== action.payload);
        default:
            return state;
    }
}

export default cityReducer;
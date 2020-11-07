import { useContext } from "react";
import CitiesContext from "./CitiesContext";

const useDispatch = () => useContext(CitiesContext).dispatch;

export default useDispatch;
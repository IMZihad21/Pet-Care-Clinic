import { useContext } from "react"
import { DataContext } from "../Contexts/DataProvider"

const useProvider = () => {
    return useContext(DataContext);
}

export default useProvider;
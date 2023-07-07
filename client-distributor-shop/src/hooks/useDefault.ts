import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";

export default function useDefault () {
    const myState = useSelector((state: RootState) => state);
    const dispatch = useDispatch()
    
};
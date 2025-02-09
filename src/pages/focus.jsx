import API from "../js/api.js";
import { useParams } from "react-router-dom";


export default function Focus(){
    const apiMovie = new API();
    let { id } = useParams();
    apiMovie.loadDataById(id);
    return <h1>Focus - ID : {id} </h1>;
    
}
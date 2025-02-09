import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import SearchContainer from "./searchcontainer";

export default function Layout(){
    return(
        <>
        <Navbar/>
        <SearchContainer/>
        <main>
            <Outlet/>
        </main>
        </>
    )
}
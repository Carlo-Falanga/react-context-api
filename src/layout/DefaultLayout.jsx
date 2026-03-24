import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import NavBar from "../components/NavBar";

export default function DefaultLayout(){

    return (
        <>
        <AppHeader/>
        <NavBar/>
        <Outlet/>
        <AppFooter/>
        </>
    )
}
import React from "react";
import PokeLogo from "../images/PokeLogo.webp"
import "../styles/Mystyles.css"

function AppNav() {
    return(
        <>
            <nav className="navbar navbar-light navColor">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={PokeLogo} alt="" width="120" height="50"/>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default AppNav;
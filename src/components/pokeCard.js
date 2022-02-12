import React from "react";
import { Link } from "react-router-dom";
import "../styles/Mystyles.css"

function PokeCard({ name, image, toindex='' }) {
    return(
            <div className="item">
                <div className="card poke-dispCard">
                    <img src={image} className="card-img-top media" alt="Poke"/>
                    <div className="card-body">
                        <Link to={toindex}><p className="card-text namePokemon">{name}</p></Link>
                    </div>
                </div>
            </div>
    )
}

export default PokeCard;
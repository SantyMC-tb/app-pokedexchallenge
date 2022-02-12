import React from "react";
import PokeCard from "./pokeCard";
import "../styles/Mystyles.css"
// import "bootstrap/dist/css/bootstrap.min.css"

function PokeDescription ({ pokeImage, name, description, abilities, base_experience, height, weight, types}) {
    console.log(pokeImage);
    return(
        <>
            <div className="container centerContainer d-flex">
                <div>
                    <PokeCard image={pokeImage} name={name}/>
                </div>
                <div>
                    <div className="part1-descripcion">
                        <div className="card descriptionContainer">
                            <div className="card-body descriptionBox">
                                <h5 className="card-title">Description</h5>
                                {description}
                            </div>
                        </div>
                    </div>
                    <div className="part2-caracteristicas">
                        <div className="card statsContainer">
                            <div className="card-body descriptionBox">
                                <h5 class="card-title">Estadíscas</h5>
                            </div>
                            <div className="card-body descriptionBox2 d-flex">
                                <div>
                                    {"Abilidades: " }
                                </div>
                                <div>
                                {abilities.map((item, index) => {
                                        return(
                                            
                                            ` | ${index + 1}: ${item.ability.name} `
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="card-body descriptionBox2">
                                {"Exp: " + base_experience}
                            </div>
                            <div className="card-body descriptionBox2">
                                {"Altura: " + height}
                            </div> 
                            <div className="card-body descriptionBox2">
                                {"Peso: " + weight}
                            </div> 
                            <div className="card-body descriptionBox2">
                                <div>
                                    {"Tipo: " }
                                </div>
                                <div>
                                {types.map((item, index) => {
                                        return(
                                            
                                            ` | ${index + 1}: ${item.type.name} `
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokeDescription;
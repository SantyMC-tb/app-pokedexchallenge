import React from "react";
import PokeCard from "./pokeCard";
import "../styles/Mystyles.css"

function PokeList({pokedata}) {

    return(
        <>
            <div className="container containerSup">
                {/* <div className="pokemons d-flex"> */}
                <div className="d-flex poke-card" >
                    {pokedata.map((pokemon, index) => {

                        let url = "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/"
                        let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]

                        //LE PASO LA URL PARA OBTENER LA IMAGEN DEL POKEMON
                        return <PokeCard 
                                key={index} 
                                toindex={`/poke-info/${pokeIndex}/${pokemon.name}`} 
                                name={pokemon.name} 
                                image={`${url}${pokeIndex}.png?raw=true`}
                                />
                        })}
                </div>
            </div>
        </>
    )
}

export default PokeList;
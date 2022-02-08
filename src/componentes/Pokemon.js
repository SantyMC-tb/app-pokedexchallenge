import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {

    const {id} = useParams();
    console.log(id)

    const [pokemon, setPokemon] = useState([])
    const [abilidades, setAbilidades] = useState([])

    const ObtenerDatos = async () => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const infoData = await data.json();
        setPokemon(infoData);
        setAbilidades(infoData.abilities);
    }
    
    useEffect(() => {
        ObtenerDatos()
    }, [])

    console.log(pokemon)
    return(
        <>
        <h1>Descripcion Pokemon</h1>
        
        {/* <h3>{pokemon.base_experience}</h3>
        
        <h3>{pokemon.height}</h3>
        <h3>{pokemon.held_items}</h3>
        <h3>{pokemon.id}</h3>
        <h3>{pokemon.is_default}</h3>
        <h3>{pokemon.location_area_encounters}</h3>
        
        <h3>{pokemon.name}</h3>
        <h3>{pokemon.order}</h3>
        <h3>{pokemon.past_types}</h3>
        
        <h3>{pokemon.wight}</h3> */}
       // de esta manera lo muestra
        <div className="card m-4">
            <img src="imagenes/Bulbasaur2.jpg" class="card-img-top" alt="Pokemon"/>
            <div className="card-body">
                <h3 className="card-title">{pokemon.name}</h3>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{Object.keys(pokemon)[0]}</li>
                {abilidades.map((pokeAbilities, index) => (
                    <li>{Object.keys(pokeAbilities)[index].name}</li>
                ))}
                <li className="list-group-item">{pokemon.id}</li>
                <li className="list-group-item">{pokemon.base_experience}</li>
                <li className="list-group-item">{pokemon.order}</li>
            </ul>
            <li className="list-group-item">Hola</li>
        </div>

        // de esta manera no lo muestra
        {/* <div className="card m-4">
            <img src="imagenes/Bulbasaur2.jpg" class="card-img-top" alt="Pokemon"/>
            <div className="card-body">
                <h3 className="card-title">{pokemon.name}</h3>
            </div>
            <ul className="list-group list-group-flush">
                { pokemon.map((unpoke, index) => (
                    <li key={index} className="list-group-item">{unpoke.name}</li>
                ))}
            </ul>
            <li className="list-group-item">Hola</li>
        </div> */}
        
        </>
    )
}

export default Pokemon;
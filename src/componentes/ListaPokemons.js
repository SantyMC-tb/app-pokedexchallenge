import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListaPokemons = () => {

    const [pokemons, setPokemons] = useState([])

    const [page, setPage] = useState(0)

    //aca queria usar axios.get pero no anda asi que uso ObtenerDatos
    // const ObtenerInfo = () => {
        
    //     axios.get('https://pokeapi.co/api/v2/pokemon/')
    //     .then((Response) => {
    //         setPokemons(Response.data)
    //     })
    //     .catch(error => alert(error))
    // }

    const ObtenerDatos = async () => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=5`);
        // const data = await fetch('https://pokeapi.co/api/v2/pokemon');
        const infoData = await data.json();
        setPokemons(infoData.results);
    }

    const handleNextPage = () => {
        const offsetPage = page + 5;
        setPage(offsetPage)
        ObtenerDatos();
    }

    const handlePrevPage = () => {
        const offsetPage = page - 5;
        setPage(offsetPage)
        ObtenerDatos();
    }

    useEffect(() => {
        // ObtenerInfo()
        ObtenerDatos()
    }, [])

    useEffect(() => {
        handlePrevPage();
    }, [])

    useEffect(() => {
        handleNextPage();
    }, [])

    console.log(page)
    return(
        <>
        
            <div className="card m-4">
                <table className='table m-0 table-danger'>
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        { pokemons.map((pokemon,index) => (
                            <tr key={index}>
                                <Link to={`/${index+1}`}><td>{pokemon.name}</td></Link>
                            </tr>    
                        ))}
                    </tbody>
                </table>
                <button onClick={handlePrevPage}>Previus</button>
                <button onClick={handleNextPage}>Next</button>
            </div>
        </>
    )
}

export default ListaPokemons;





// sdsd
// { pokemons.map((pokemon) => (
//     pokemon.results.map((pokemon,index) = (
//     <tr key={index}>
//         <td>{pokemon.name} - {pokemon.url}</td>
//         {/* <td><Link to={`/${index}`}  id='direccion'>{pokemon.name}</Link></td> */}
//         {/* <td>{pokemon.descripcion}</td> */}
//     </tr>    
// ))))}
// sdsd
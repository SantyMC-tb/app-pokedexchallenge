import React, { Component } from "react";
import axios from "axios";
import AppNav from "../components/AppNav";
import PokeDescription from "../components/PokeDescription";

class PokemonInfoContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            pokemonDescription: "",
            pokeName: "",
            pokeId: "",
            abilities: [],
            base_experience: "",
            height: "",
            weight: "",
            types: []
        }
    }

    componentDidMount(){
        const { match } = this.props;
        const pokeId = match.params.pokeIndex;
        const pokeName = match.params.pokeName;
        const pokemonDescriptionUrl = `${process.env.REACT_APP_POKE_API_BASE_URL}pokemon-species/${pokeId}/`;
        this.getPokeStats(pokeId)
        axios.get(pokemonDescriptionUrl)
        .then(res => {
            const { flavor_text_entries } = res.data
            this.setState({
                pokemonDescription: flavor_text_entries[42].flavor_text,
                pokeName,
                pokeId
            })
        })
    }

    getPokeStats(pokeId) {
        axios.get(`${process.env.REACT_APP_POKE_API_BASE_URL}pokemon/${pokeId}/`)
        .then( res => {
            const { abilities, base_experience, height, weight, types } = res.data;
            this.setState({
                abilities,
                base_experience,
                height,
                weight,
                types
            })
        })
    }
   
    render(){

        let url = `${process.env.REACT_APP_POKE_ART}`;
        const { pokemonDescription, pokeName, pokeId, abilities, base_experience, height, weight, types } = this.state;
        
        return(
            <>
                <AppNav/>
                <PokeDescription 
                    name={pokeName} 
                    pokeImage={`${url}${pokeId}.png?raw=true`} 
                    description={pokemonDescription}
                    abilities={abilities}
                    base_experience={base_experience}
                    height={height}
                    weight={weight}
                    types={types}
                />
            </>
        );
    }
}

export default PokemonInfoContainer;
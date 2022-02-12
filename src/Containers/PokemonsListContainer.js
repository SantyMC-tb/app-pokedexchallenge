import axios from "axios";
import React, { Component } from "react";
import AppNav from "../components/AppNav";
import Pagination from "../components/Pagination";
import PokeList from "../components/PokeList";
import "../App.css";

class PokemonsListContainer extends Component {

    //Estado
    state = {
        pokeData: [],
        currentOffset: 0,
        page: 1,
    }

    componentDidMount(){
        this.pokeDato();
    }

    componentDidUpdate(prevProps, prevState){
        const { currentOffset } = this.state;

        if (currentOffset !== prevState.currentOffset) {
            if (currentOffset < 0) {
                this.setState({
                    currentOffset: 0,
                    page: 1,
                })
                this.pokeDato(prevState.currentOffset)
            }
            this.pokeDato(currentOffset)
        }
    }
    
    pokeDato = (offset = 0) => {
        const url = `${process.env.REACT_APP_POKE_API_BASE_URL}pokemon`;
        let params = {
            offset: offset,
            limit: 5
        }
        axios.get(url, { params })
        .then(res => {
            const { results } = res.data;

            this.setState({
                pokeData: results,
            })
        })
        .catch(error => alert(error))
    }

    handleNextPage = () => {
        const { currentOffset, page } = this.state;

        this.setState({
            currentOffset: currentOffset + 5,
            page: page + 1,
        })
    }

    handlePrevPage = () => {
        const { currentOffset, page } = this.state;

        this.setState({
            currentOffset: currentOffset - 5,
            page: page - 1,
        })
    }

    

    render(){

        const { pokeData, page } = this.state;

        return(
            <>
                <AppNav/>
                <div className="FondoHead">
                    <Pagination next={this.handleNextPage} previous={this.handlePrevPage} page={page} />
                    <div className="container">
                        <div className="row">
                            <PokeList pokedata={pokeData} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
}

export default PokemonsListContainer;
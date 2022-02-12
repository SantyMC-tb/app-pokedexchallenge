import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PokemonInfoContainer from "./Containers/PokemonInfoContainer";
import PokemonsListContainer from "./Containers/PokemonsListContainer";

const RouterComponent = () => {

    return(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={PokemonsListContainer}/>
                    <Route exact path='/poke-info/:pokeIndex/:pokeName' component={PokemonInfoContainer}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default RouterComponent;
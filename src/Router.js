import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListaPokemons from "./componentes/ListaPokemons";
import Pokemon from "./componentes/Pokemon";

const RouterComponent = () => {

    return(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/' exact component={ListaPokemons}/>
                    <Route path='/:id' component={Pokemon}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default RouterComponent;
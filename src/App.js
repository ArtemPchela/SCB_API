import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./Molecules/Header";
import About from "./Organisms/About";
import Intro from "./Organisms/Intro";
import Contacts from "./Organisms/Contacts";
import SearchAPI from "./Organisms/Search API";

export default function App() {
    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route exact path="/" component={Intro}/>
                <Route path="/search" component={SearchAPI}/>
                <Route path="/contacts" component={Contacts}/>
                <Route path="/about" component={About}/>
            </Switch>
        </Fragment>
    );
}



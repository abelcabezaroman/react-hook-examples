import React from 'react';
import './App.scss';
import Counter from "./components/Counter/Counter";
import HelloProps from "./components/HelloProps/HelloProps";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import GalleryList from "./components/GalleryList/GalleryList";
import Menu from "./components/Menu/Menu";
import ListProps from "./components/ListProps/ListProps";
import { CounterRouterHooks } from "./components/CounterRouterHooks/CounterRouterHooks";

function App () {
    return (
        <Router>
            <div className="App">
                <div className="App-header">
                    <Menu/>
                    <Switch>
                        <Route path="/counter/:initialCount">
                            {/*<Counter/>*/}
                            <CounterRouterHooks/>
                        </Route>
                        <Redirect from='/counter' to='/counter/0'/>
                        <Route path="/hello">
                            <HelloProps textToShow="World"/>
                        </Route>

                        <Route path="/gallery">
                            <GalleryList/>
                        </Route>

                        <Route path="/list">
                            <ListProps stringList={['Number 1', 'Number 2', 'Number 3']}/>
                        </Route>
                        <Route path="/">
                            <Counter/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;

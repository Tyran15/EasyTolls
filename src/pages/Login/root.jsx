import React from "react";
import{
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from '../Home'
import Login from '../Login/Login'
import StoreProvider from "../Components/provider";
import RoutesPrivate from '../Components/Routes/private'

const PagesRoot = () => {
    <Router>
        <StoreProvider>
            <Switch>
                <Route path="/Login" Component={Login} />
                <Route path="/" Component={Home} />
            </Switch>"
        </StoreProvider>
    </Router>
}
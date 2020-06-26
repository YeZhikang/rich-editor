import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from "react";
import User from '../user/index'
import Split from '../iDoc/index'
import PlayGround from "../playground";

export default () => {
    return (
        <Router>
            <Switch>
                <Route
                    path={ '/user' }
                >
                    <User/>
                </Route>
                <Route
                    path={'/iDoc'}
                >
                    <Split/>
                </Route>
                <Route
                    path={'/playground'}
                >
                    <PlayGround/>
                </Route>
            </Switch>
        </Router>
    )
}

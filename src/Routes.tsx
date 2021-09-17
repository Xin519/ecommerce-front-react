import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom"
import Home from './components/core/Home'
import Signin from './components/core/Signin'
import Signup from './components/core/Signup'
import Shop from './components/core/Shop'
import AdminDashboard from "./components/admin/AdminDashboard"
import Dashboard from "./components/admin/Dashboard"

const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/Shop' component={Shop} />
                <Route path='/signup' component={Signup} />
                <Route path='/signin' component={Signin} />
                <Route path="/user/dashboard" component={Dashboard} />
                <Route path="/admin/dashboard" component={AdminDashboard} />
            </Switch>
        </HashRouter>
    )
}

export default Routes

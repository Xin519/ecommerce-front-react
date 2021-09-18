import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom"
import Home from './components/core/Home'
import Signin from './components/core/Signin'
import Signup from './components/core/Signup'
import Shop from './components/core/Shop'
import AdminDashboard from "./components/admin/AdminDashboard"
import Dashboard from "./components/admin/Dashboard"
import PrivateRoute from './components/admin/PrivateRoute'
import AdminRoute from './components/admin/AdminRoute'
import AddCategory from './components/admin/AddCategory'
import AddProduct from './components/admin/AddProduct'

const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/Shop' component={Shop} />
                <Route path='/signup' component={Signup} />
                <Route path='/signin' component={Signin} />
                <PrivateRoute path="/user/dashboard" component={Dashboard} />
                <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
                <AdminRoute path="/create/category" component={AddCategory} />
                <AdminRoute path="/create/product" component={AddProduct} />
            </Switch>
        </HashRouter>
    )
}

export default Routes

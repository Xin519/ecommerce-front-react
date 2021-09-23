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
import Product from './components/core/Product'
import cart from './components/core/cart'
import Success from './components/core/Success'
import Orders from './components/admin/Orders'

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
                <AdminRoute path="/admin/Orders" component={Orders} />
                <Route path='/Product/:ProductId' component={Product} />
                <Route path='/Cart' component={cart} />
                <Route path='/paysuccess' component={Success} />
            </Switch>
        </HashRouter>
    )
}

export default Routes

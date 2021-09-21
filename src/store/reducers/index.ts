import { connectRouter, RouterState } from 'connected-react-router'
import { combineReducers } from 'redux'
import { History } from "history"
import authReducer, { AuthState } from './auth.reducer'
import categoryReducer, { CategoryState } from './category.reducer'
import productReducer, { ProductState } from './product.reducer'

export interface AppState {
    router: RouterState,
    auth: AuthState,
    Category: CategoryState,
    product: ProductState
}

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    Category: categoryReducer,
    product: productReducer
})

export default createRootReducer

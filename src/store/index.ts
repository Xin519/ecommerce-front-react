import { applyMiddleware, createStore } from 'redux'
import createRootReducer from './reducers'
import { createHashHistory } from "history"
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from '_@redux-saga_core@1.1.3@@redux-saga/core/types/ts3.6'
import rootSage from './sagas'

export const history = createHashHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    createRootReducer(history), 
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
)

sagaMiddleware.run(rootSage)

export default store

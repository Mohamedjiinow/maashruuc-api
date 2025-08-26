import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cartslice from "../reducer/cart"
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer"

const config={
    key:"root",
    storage
}
const allreducers= combineReducers({
    cart: cartslice
})
const reducers = persistReducer(config,allreducers)

const Store=configureStore({
    reducer:reducers
})


export default Store
import { configureStore } from "@reduxjs/toolkit"
import cartslice from "../reducer/cart"

const Store=configureStore({
    reducer:{
        cart: cartslice
    }
})


export default Store
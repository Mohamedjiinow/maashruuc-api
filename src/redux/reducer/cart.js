import { createSlice } from "@reduxjs/toolkit"

const Cartslice= createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addtocart:(state, xog)=>{
            const NewData=xog.payload
            state.items.push(NewData)
        }
    }
})

export const{addtocart}= Cartslice.actions
export default Cartslice.reducer
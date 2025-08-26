import { createSlice } from "@reduxjs/toolkit"

const Cartslice= createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalprice:0
    },
    reducers:{
        addtocart:(state, xog)=>{
            const NewData=xog.payload
            state.items.push(NewData)
        },
        removeitem:(state, action)=>{
            const itemindex=action.payload;
            state.items=state.items.filter((_,index)=>index!==itemindex)
        },
        calulateprice:(state)=>{
            let price=0;
            state.items.forEach((item) => {
               price += item.price 
            })
            state.totalprice=price
        }
    }
})

export const{addtocart, removeitem, calulateprice}= Cartslice.actions
export default Cartslice.reducer
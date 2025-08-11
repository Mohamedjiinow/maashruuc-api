import Product from "../components/product"
import axios from "axios"
import { useEffect, useState } from "react"



function Shop(){

    const [Data, SetData] = useState([])
    function handleread(){
        axios.get("https://fakestoreapi.com/products").then((res)=>{

          SetData(res.data)  
        })
    }
    useEffect(()=>{
        handleread()
    },[])
    return <div className="grid grid-cols-4">
     {
        Data.map((item)=>{
           return <Product products={item} />
        })
     }

    </div>
}
export default Shop
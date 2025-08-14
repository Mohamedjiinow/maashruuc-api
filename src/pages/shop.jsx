import Product from "../components/product"
import axios from "axios"
import { useEffect, useState } from "react"
import { data } from "react-router-dom"



function Shop(){

    const [Data, SetData] = useState([])
    const [search, setsearch]=useState("")
    const [category, setcategory] =useState("")

    const filterdata= Data.filter((xog)=>{
        const searchdata=xog.title.toLowerCase().includes(search.toLowerCase())||xog.category.toLowerCase().includes(search.toLowerCase())
        const selectedcategory= category ? xog.category ===category : true 
        return searchdata && selectedcategory
    })

    function handleread(){
        axios.get("https://fakestoreapi.com/products").then((res)=>{

          SetData(res.data)  
        })
    }
    useEffect(()=>{
        handleread()
    },[])
    return <div>
        <div className="flex gap-20 mt-20 ml-14">
            <input value={search||category} onChange={(e)=>setsearch(e.target.value)} className="w-80 h-10 bg-green-300 text-black text-2xl rounded-lg outline-none gap-4" type="text" />
            <div className="text-2xl gap-10 space-x-6">
            <input nam e="category" value={""} onChange={(e)=>setcategory()} type="radio" /> All
            <input name="category" value={"electronics"} onChange={(e)=>setcategory("electronics")} type="radio" /> electronics
            <input name="category" value={"jewelery"} onChange={(e)=>setcategory("jewelery")} type="radio" /> jewelery
            <input name="category" value={"men's clothing"} onChange={(e)=>setcategory("men's clothing") } type="radio" /> men'sclothing
            <input name="category" value={"women's clothing"} onChange={(e)=>setcategory("women's clothing")} type="radio" /> women'sclothig
            </div>
        </div>

        <div className="flex flex-wrap">
     {
        filterdata.length > 0? filterdata.map((item)=>{
           return <Product products={item} />
        })
        :
        <p className="text-5xl ml-[45%] mt-16">There's Nothing Here</p>
     }
</div>
    </div>
}
export default Shop
import { useEffect } from "react"
import { calulateprice, removeitem } from "../redux/reducer/cart"
import { useDispatch, useSelector } from "react-redux"


function Cartpage(){
const items = useSelector((e)=>e.cart.items)
const totalprice = useSelector((state)=>state.cart.totalprice)
const dispatch = useDispatch()
const handleremoveitem=(itemindex)=>{
dispatch(removeitem(itemindex))
dispatch(calulateprice())
}

useEffect(()=>{
  dispatch(calulateprice())
},[])


    return <div> 
        <div className="flex flex-wrap justify-center gap-2 mb-16">
{     
   items.length > 0 ?
   items.map((data,index)=>{
        return <div className="flex flex-wrap text-center">
        <div  className="mt-20 ml-20 gap-10 w-80 h-[390px] py-2 rounded-lg border-black border-2">
            <img className=" h-60 w-80 " src={data.image} alt="" />
            <div className="text-2xl font-normal,pt-4 flex px-6 justify-between">
              <h1 className="h-20">{data.title}</h1>
              <h1 className="">${data.price}</h1>
            </div>
            <button onClick={()=>handleremoveitem(index)} className=" bg-red-500 w-full text-3xl text-white h-10 rounded-lg mt-2">Remove</button>
        </div>
    </div>
    })
    :
    <h1 className="text-red-600 font-semibold text-5xl">Your Cart Is Empty</h1>

}

    </div>
    <div>
    <hr className="h-1 ml-32 w-[80%] bg-slate-600"/>
    <h1 className="text-4xl font-semibold text-slate-600 ml-36">${totalprice}</h1>
</div>
    </div>
}

export default Cartpage
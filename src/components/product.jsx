import { addtocart } from "../redux/reducer/cart"
import { useDispatch } from "react-redux"

function Product({products}){
     const dispatch= useDispatch()
     const handlepost=()=>{
        dispatch(addtocart(products))
     }

    return <div className="flex justify-center text-center">
        <div  className=" mt-20 ml-20 gap-10 w-80 h-[390px] py-2 rounded-lg border-black border-2">
            <img className=" h-60 w-80 " src={products.image} alt="" />
            <div className="text-2xl font-normal,pt-4 flex px-6 justify-between">
              <h1 className="h-20">{products.title}</h1>
              <h1 className="">${products.price}</h1>
            </div>
            <button onClick={handlepost} className=" bg-blue-500 w-full text-3xl text-white h-10 rounded-lg mt-2">Add To Cart</button>
        </div>
    </div>
}
export default Product
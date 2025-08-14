import { useSelector } from "react-redux"


function Cartpage(){
const items = useSelector((e)=>e.cart.items)
    return <div className="flex flex-wrap justify-center gap-2z">
{     
    items.map((data)=>{
        return <div className="flex flex-wrap text-center">
        <div  className="mt-20 ml-20 gap-10 w-80 h-[390px] py-2 rounded-lg border-black border-2">
            <img className=" h-60 w-80 " src={data.image} alt="" />
            <div className="text-2xl font-normal,pt-4 flex px-6 justify-between">
              <h1 className="h-20">{data.title}</h1>
              <h1 className="">${data.price}</h1>
            </div>
            <button className=" bg-red-500 w-full text-3xl text-white h-10 rounded-lg mt-2">Remove</button>
        </div>
    </div>
    })

}

    </div>
}

export default Cartpage
function Product({products}){
    return <div className="flex justify-center text-center">
        <div  className=" mt-20 ml-3 w-80 h-[390px] py-2 rounded-lg border-black border-2">
            <img className=" h-60 w-80 " src="https://tailwindcss.com/_next/static/media/3d-transforms.ebde7a6a.jpeg" alt="" />
            <div className="text-2xl font-normal,pt-4 flex px-6 justify-between">
              <h1 className="h-20">{products.title}</h1>
              <h1 className="">${products.price}</h1>
            </div>
            <button className=" bg-blue-500 w-full text-3xl text-white h-10 rounded-lg mt-2">Add To Cart</button>
        </div>
    </div>
}
export default Product
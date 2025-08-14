import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"


function Header(){

const items = useSelector((e)=>e.cart.items)

    return <div className="flex justify-between px-10">
        <h1 className="text-3xl font-semibold ">Logo</h1>
        <div className="flex gap-4">
        <ul className="flex gap-8 text-2xl">
    <NavLink to="/"> <li>Home</li> </NavLink>
     <NavLink to="/shop"> <li>Shop</li> </NavLink>
        </ul>
      <NavLink to="/Cartpage">  <i class="fa-solid fa-cart-shopping relative mt-4"><span className=" absolute bottom-4">({items.length})</span></i> </NavLink> 
        </div>
        
    </div>
}
export default Header
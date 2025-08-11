import { NavLink } from "react-router-dom"


function Header(){
    return <div className="flex justify-between px-10">
        <h1 className="text-3xl font-semibold ">Logo</h1>
        <ul className="flex gap-8 text-2xl">
    <NavLink to="/"> <li>Home</li> </NavLink>
     <NavLink to="/shop"> <li>Shop</li> </NavLink>
        </ul>
    </div>
}
export default Header
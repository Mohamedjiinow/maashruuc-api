
import { Route, Routes } from "react-router-dom"
import Shop from "./pages/shop"
import Header from "./Header"
import Home from "./pages/Home"
import Cartpage from "./pages/Cart"

function App(){
  return <div>
 <Header />
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/cartpage" element={<Cartpage />}/>
    </Routes>
  </div>
}
export default App
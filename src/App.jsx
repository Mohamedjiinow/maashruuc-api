
import { Route, Routes } from "react-router-dom"
import Shop from "./pages/shop"
import Header from "./Header"
import Home from "./pages/Home"

function App(){
  return <div>
 <Header />
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/shop" element={<Shop/>}/>
    </Routes>
  </div>
}
export default App
import { useState, useEffect } from "react"
// import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndividualProduct from "../IndividualProduct/IndividualProduct"
import NavBar from "../NavBar/NavBar"

export default function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchProducts = async() => {
      try {
        const res = await axios.get("http://localhost:3001/store/")
        setProducts(res.data.products)  
    } catch(err) {
        setError(err)
      }
    }
    fetchProducts()
  }, [])
  
  console.log(products)
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home products={products}/>} />
          <Route path="/:idNumber" element={<IndividualProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


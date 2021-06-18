import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import "./IndividualProduct.css"

export default function IndividualProduct() {
  const { idNumber } = useParams()
  const [product, setproduct] = useState("")
  const [error, setError] = useState(null)

  console.log(idNumber)
  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/store/${idNumber}`)
        console.log(res.data)
        if (res?.data) {
          setproduct(res.data)
        }
      } catch (err) {
        setError(err)
      }
    }
    fetchproduct()
  }, [])
  return (
      <div className="IndividualProduct">
        <span className="name"><strong>{product.name}</strong></span>
        <div className="image">
            <img src={product.image} alt={product.name}/>
        </div>
        <div className="moreInfo">
          <span className="description"><strong>Description: </strong>{product.description}</span>
          <span className="price"><strong>Price: </strong>${product.price}</span>
        </div>
      </div>
  )}


  
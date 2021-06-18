import "./Home.css"
import DisplayProducts from "../DisplayProducts/DisplayProducts"

export default function Home({ products }) {
    // console.log(products)
    return (
        <div className="Home">
            <DisplayProducts products={products}/>
        </div>
    )
}
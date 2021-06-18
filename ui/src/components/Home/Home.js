import "./Home.css"
import DisplayProducts from "../DisplayProducts/DisplayProducts"

export default function Home({ products }) {
    // console.log(products)
    return (
        <div className="Home">
            <div className="about">
We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.          
            </div>
            <span className="title">Current Products</span>
            <DisplayProducts products={products}/>
        </div>
    )
}
import "./NavBar.css"
import { Link } from "react-router-dom"
// import DisplayProducts from "../DisplayProducts/DisplayProducts"

export default function NavBar() {
    // console.log(products)
    return (
        <div className="NavBar">
            <div className="Title">
                <span className="StoreTitle"><em><strong>Store</strong></em></span>
            </div>
            <div className="Links">
                <a className="home" href={"/"}>Home</a>
                <a className="about" href={"/about"}>About</a>
                <a className="contact" href={"/contact"}>Contact</a>
            </div>
        </div>
    )
}
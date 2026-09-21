import {Link} from "react-router-dom";
import "./Navbar.css";
function Navbar() {
    return(
        <>
        <div className="navbar">
            <h2>KB Meat Stall</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/meats">Meats</Link>
            <Link to="/carts">Carts</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/review">Review</Link>
        </div>
        </>
    )
}
export default Navbar;
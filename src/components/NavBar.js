import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

export const NavBar = () => {
    const amount = useSelector(state => state.productsInCart.productsAmount)

    return (
        <ul style={{listStyleType: "none"}}>
            <li style={{marginRight: "10px"}}>
                <NavLink to={"/"} className="link">Products</NavLink>
            </li>
            <li style={{marginRight: "10px"}}>
                <NavLink to={"cart"} className="link">Cart</NavLink>
            </li>
            <li>
                {amount}
            </li>
        </ul>
    )
}
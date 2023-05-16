import {useDispatch, useSelector} from "react-redux";
import {deleteProduct} from "../store/productsInCartReducer";

export default function CartPage() {
    const products = useSelector(state => state.productsInCart.products)
    const dispatch = useDispatch()

    return (
        <ul style={{listStyleType: "none"}}>
            {products.map((product =>
                    <li style={{backgroundColor: "#e0d8f6"}} className="products_list">
                        <p style={{fontSize: "30px"}}>{product.product.id}</p>
                        <p style={{fontSize: "25px", color: "teal"}}>{product.product.name}</p>
                        <p>{product.product.description}</p>
                        <button onClick={() => dispatch(deleteProduct(product))}>delete</button>
                    </li>
            ))}
        </ul>
    )
}
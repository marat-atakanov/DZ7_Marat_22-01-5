import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../store/productsInCartReducer";
import {fetchProducts} from "../store/productsListReducer";

export default function ProductsPage() {
    const {productsList, loading} = useSelector(state => state.productsList)
    const [amount, setAmount] = useState('')
    const dispatch = useDispatch();


    if (loading) {
        return <h3>Loading</h3>
    }


    return (
        <>
            <input style={{marginBottom: "20px"}} placeholder="Amount of products..." type="text" onChange={(e) => setAmount(e.target.value)}/>
            <button onClick={() => dispatch(fetchProducts(amount))}>find</button>

            <ul style={{listStyleType: "none"}}>
                {productsList.map((product =>
                        product.data.map(item =>
                            <li style={{backgroundColor: "#e0d8f6"}} className="products_list">
                                <p style={{fontSize: "30px"}}>{item.id}</p>
                                <p style={{fontSize: "25px", color: "teal"}}>{item.name}</p>
                                <p>{item.description}</p>
                                <button onClick={() => dispatch(addProduct(item))}>add</button>
                            </li>
                        )
                ))}
            </ul>
        </>
    )
}
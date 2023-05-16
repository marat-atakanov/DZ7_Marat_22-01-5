import {createSlice} from "@reduxjs/toolkit";
import {nanoid} from "@reduxjs/toolkit";

const initialState = {
    productsAmount: 0,
    products: []
}

const productsInCartSlice = createSlice({
    name: "productsInCart",
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            state.productsAmount = state.productsAmount + 1;
            state.products.push({
                product: action.payload,
                id: nanoid()
            })
        },
        deleteProduct: (state, action) => {
            state.productsAmount = state.productsAmount - 1;
            const index = state.products.findIndex(item => item.id === action.payload.id)
            if (index > -1) {
                state.products.splice(index, 1)
            }
        }
    }
})

export const {addProduct, deleteProduct} = productsInCartSlice.actions
export default productsInCartSlice.reducer
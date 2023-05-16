import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    productsList: [],
}

export const fetchProducts = createAsyncThunk(
    "productsList/fetchProductsList",
    async (action) => {
        return axios.get(`https://fakerapi.it/api/v1/products?_quantity=${action}`)
            .then(resp => resp.data)
    }
)

const productsListSlice = createSlice({
    name: "productsList",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.productsList = [];
            state.loading = false;
            state.productsList.push(action.payload);
        })
    }
})

export default productsListSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DATA } from "../data/product-image-map";




export const fetchProduct = createAsyncThunk('fetchProducts/products', async () => {

    return DATA
})

const initialState = {
    products: [],
    status: "idle",
    error: null,
};

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    extraReducers: {
        [fetchProduct.pending]: (state, action) => {
            state.status = 'looding'
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.status = 'success',
                state.products = action.payload
        },
        [fetchProduct.rejected]: (state, action) => {
            state.status = 'failed'
        },
    }
});

export default productSlice.reducer









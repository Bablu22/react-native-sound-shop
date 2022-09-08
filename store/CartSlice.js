import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const cartProduct = action.payload

            const isExist = state.find((item) => item.id === cartProduct.id);

            if (isExist) {
                return state.map((item) =>
                    item.id === cartProduct.id ? { ...item, ...cartProduct } : item
                );
            } else {
                return [...state, { ...cartProduct }];
            }
        },
        removeCart: (state, action) => {
            const id = action.payload;
            return state.filter((item) => item.id !== id);
        },
        reset: (state, action) => initialState,
    },
});

export const { addToCart, removeCart, reset } = cartSlice.actions;

export default cartSlice.reducer;

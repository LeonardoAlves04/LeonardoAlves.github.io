import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialSatate,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        }
    }
})
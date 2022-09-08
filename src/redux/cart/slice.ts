import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFormLS } from "../../utils/getCartFromLS";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { CartItem, CartSliceState, RemoveItem } from "./types";



const { items, totalPrice }  = getCartFormLS();

const initialState: CartSliceState = {
   items,
   totalPrice,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            
            const findItem = state.items.find(obj => obj.id === action.payload.id);
            
            if (findItem) {
                findItem.count++
            } else {
                state.items.push(
                    {...action.payload,
                    count: 1,}
                );
            };
            
            state.totalPrice = calcTotalPrice(state.items);
        },

        minusItem(state, action){
            const findItem = state.items.find(obj => obj.id === action.payload.id);
            if (findItem) {
                findItem.count--;
                state.totalPrice = state.totalPrice - action.payload.price;
            }
        },

        removeItem(state, action: PayloadAction<RemoveItem>) {
            state.items = state.items.filter(obj => obj.id !== action.payload.id);
            state.totalPrice = state.totalPrice - action.payload.totalPrice;
        },

        clearItem(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    }
});



export const {addItem, removeItem, clearItem, minusItem} = cartSlice.actions;

export default cartSlice.reducer;
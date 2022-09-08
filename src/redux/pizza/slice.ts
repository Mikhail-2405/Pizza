import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pizza, PizzaSliceState, Status } from "./type";



const initialState: PizzaSliceState = {
   items: [],
   status: Status.LOADING,
};

export const fetchPizzas =  createAsyncThunk<Pizza[], string>(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const urlSegment = params;
        const {data} = await axios.get<Pizza[]>(`https://62c6f65374e1381c0a6df6b2.mockapi.io/item?${urlSegment}`);
        return data;
    },
);

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Pizza[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {

    builder.addCase(fetchPizzas.pending, (state, action) => {
        state.status = Status.LOADING;
        state.items = [];
    })

    builder.addCase(fetchPizzas.fulfilled, (state, action) =>{
        state.items = action.payload;
        state.status = Status.SUCCESS;
    })

    builder.addCase(fetchPizzas.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.items = [];
    })
    }
    // extraReducers: {
    //     [fetchPizzas.pending]: (state: { status: string; items: never[]; }) => {
    //         state.status = 'loading';
    //         state.items = [];
    //     },
    //     [fetchPizzas.fulfilled]: (state: { items: any; status: string; }, action: { payload: any; }) => {
    //         state.items = action.payload;
    //         state.status = 'success';
    //     },
    //     [fetchPizzas.rejected]: (state: { status: string; items: never[]; }, action: any) => {
    //         state.status = 'error';
    //         state.items = [];
    //     },
    // },

});


export const {setItems} = pizzaSlice.actions;

export default pizzaSlice.reducer;
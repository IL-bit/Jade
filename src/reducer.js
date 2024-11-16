import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    type: '',
    pop_up: false,
    value: 1,
    dataList_1: {
        first: {
            data: '123456', 
            header1: '123456', 
            text1: '123456', 
            header2: '123456', 
            text2: '123456',
            img: '...'
        },
        second: {
            data: '123456', 
            header1: '123456', 
            text1: '123456', 
            header2: '123456', 
            text2: '123456',
            img: '...'
        },
        third: {
            data: '123456', 
            header1: '123456', 
            text1: '123456', 
            header2: '123456', 
            text2: '123456',
            img: '...'
        }
    }
};

const RootReducer = createReducer(initialState, builder => {
    builder 
    .addCase('NEXT', (state) => {
        state.value = state.value === 5 ? 1 : state.value + 1;            
    })
    .addCase('BACK', (state) => {
        state.value = state.value === 1 ? 5 : state.value - 1;          
    })
    .addCase('CHANGE', (state, action) => {
        state.value = action.payload;
    })
    .addCase('TOGGLEPOPUP', (state) => {
        state.pop_up = !state.pop_up;
    })
});

export default RootReducer;
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    type: '',
    pop_up: false,
    value: 1,
    form: false
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
    .addCase('SEND_FORM_SUCCESS', (state) => { 
        state.form = true;
    })
    .addCase('RESETFORM', (state) => {
        state.form = !state.form;        
    })
    .addCase('FETCH_DATA_SUCCESS', (state, action) => {
        switch (state.value){
            case 1:
                state.dataList_1 = action.payload;
                break;

            case 2:
                state.dataList_2 = action.payload;
                break;

            case 3:
                state.dataList_3 = action.payload;
                break;

            case 4:
                state.dataList_4 = action.payload;
                break;

            case 5:
                state.dataList_5 = action.payload;
                break;

            default:
                break;
        }
    })
});

export default RootReducer;
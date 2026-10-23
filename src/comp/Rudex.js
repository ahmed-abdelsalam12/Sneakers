import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  price: 0,
  cartcounter: 0,
  isportalopen: false,
  delete: false,
checked:false,
  isportaldispaly: "none",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    //fun portal
    initialportal: (state) => {
      state.isportalopen = true;
    },

    deleteportal: (state) => {
      state.delete = true;
      state.cartcounter = 0;
    },

    checkedportal: (state) => {
      state.checked = true;
      state.cartcounter = 0;
    },

    increment: (state) => {
      state.value += 1;
      state.price += 125;
    },
    decrement: (state) => {
      if (state.value === 0) {
        return;
      } else {
        state.value -= 1;
        state.price -= 125;
      }
    },

    addtocart: (state) => {
      state.cartcounter = state.value;
      state.delete = false;
       state.checked = false;
    },

    displaymodal: (state) => {
      state.isportaldispaly = "block";
    },
    hidemodal: (state) => {
      state.isportaldispaly = "none";
    },
  },
});

export const {
  increment,
  decrement,
  initialportal,
  addtocart,
  displaymodal,
  hidemodal,
  deleteportal,
  checkedportal,
} = counterSlice.actions;

export default counterSlice.reducer;

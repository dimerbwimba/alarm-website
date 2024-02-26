"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

interface CvProps {
    _id: string;
    
  }
const initialState :CvProps[] = []

export const cvlice = createSlice({
    name: "cv",
    initialState,
    reducers: {
      getCv: (state, action) => {
        state = {...action.payload};
        return state;
      },
      addCv(state, action) {
        state = [...state, action.payload];
        return state;
    },
    },
  });

  export const { getCv, addCv } = cvlice.actions

  export default cvlice.reducer;
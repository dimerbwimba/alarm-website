"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";


const initialState = {}

export const MailViewSlice = createSlice({
    name: "mailView",
    initialState,
    reducers: {
      getSingleMailAction: (state, action) => {
        state = {...action.payload};
        return state;
      },
    },
  });

  export const { getSingleMailAction } = MailViewSlice.actions

  export default MailViewSlice.reducer;
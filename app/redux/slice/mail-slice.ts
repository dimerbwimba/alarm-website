"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

interface MailProps {
    _id: string;
    read:boolean;
  }
const initialState :MailProps[] = []

export const MailSlice = createSlice({
    name: "mails",
    initialState,
    reducers: {
      getMails: (state, action) => {
        state = [...action.payload];
        return state;
      },
      updateMailRead:(state, action) => {
        const { _id} = action.payload
        const mi = state.findIndex((mail:any) => mail._id === `${_id}`);
        if (mi !== -1) {
            state[mi].read = true
        }
      }
    },
  });

  export const { getMails,updateMailRead } = MailSlice.actions

  export default MailSlice.reducer;
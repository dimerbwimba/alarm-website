"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

interface AgentsProps {
    _id: string;
    
  }
const initialState :AgentsProps[] = []

export const Agentslice = createSlice({
    name: "Agents",
    initialState,
    reducers: {
      getAgents: (state, action) => {
        state = [...action.payload];
        return state;
      },
      addAgents(state, action) {
        state = [ action.payload,...state,];
        return state;
    },
    },
  });

  export const { getAgents, addAgents } = Agentslice.actions

  export default Agentslice.reducer;
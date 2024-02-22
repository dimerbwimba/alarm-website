"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

interface heroSectionsProps {
    _id: string;
    
  }
const initialState :heroSectionsProps[] = []

export const heroSectionSlice = createSlice({
    name: "heroSections",
    initialState,
    reducers: {
      getSections: (state, action) => {
        state = [...action.payload];
        return state;
      },
      addHeroSection(state, action) {
        state = [...state, action.payload];
        return state;
    },
    },
  });

  export const { getSections, addHeroSection } = heroSectionSlice.actions

  export default heroSectionSlice.reducer;
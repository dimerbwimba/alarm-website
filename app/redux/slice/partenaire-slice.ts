
"use client"; //this is a client side component

import { SinglePartenaireProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState:any = [];

export const partenaireSlice = createSlice({
  name: "partenaires",
  initialState,
  reducers: {

    getPartenaires (state, action){
        state = [...action.payload]
        return state
    },
    addPartenaire(state, action) {
        state = [...state, action.payload]
        return state
    },
    updateName(state, action){
        const { _id, name} = action.payload
        const partenaireIndex = state.findIndex((partenaire:SinglePartenaireProps) => partenaire._id === `${_id}`);
        if (partenaireIndex !== -1) {
            state[partenaireIndex].name = name
        }
    },
    updateTypePartenaire(state, action){
        const { _id, type_partenaire} = action.payload
        const partenaireIndex = state.findIndex((partenaire:SinglePartenaireProps) => partenaire._id === `${_id}`);
        if (partenaireIndex !== -1) {
            state[partenaireIndex].type_partenaire = type_partenaire
        }
    },
    updateImageUrl(state, action){
        const { _id, image} = action.payload
        const partenaireIndex = state.findIndex((partenaire:SinglePartenaireProps) => partenaire._id === `${_id}`);
        if (partenaireIndex !== -1) {
            state[partenaireIndex].image = image
        }
    },
    updateId(state, action){
        const { _id, realId} = action.payload
        const partenaireIndex = state.findIndex((partenaire:SinglePartenaireProps) => partenaire._id === `${_id}`);
        if (partenaireIndex !== -1) {
            state[partenaireIndex]._id = realId
            state[partenaireIndex].isUpdated = true
        }
    },
  },
});

export const { addPartenaire , updateName, updateTypePartenaire, updateImageUrl, updateId , getPartenaires} = partenaireSlice.actions

export default partenaireSlice.reducer;
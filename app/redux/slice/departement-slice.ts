
"use client"; //this is a client side component

import { DepartementsTypes, SingleDepartementType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState :any = []

export const departmentSlice = createSlice({
  name: "departements",
  initialState,
  reducers: {
    getDepartements: (state, action) => {
        state = [...action.payload];
        return state;
      },
    addDepartement(state, action) {
        state = [...state, action.payload];
        return state;
    },
    addRole(state, action) {
      const {_id , role} = action.payload
      const departmentIndex = state.findIndex((dep:SingleDepartementType) => dep._id === `${_id}`);
      
      if (departmentIndex !== -1) {
        state[departmentIndex].roles.push(role);
      }
    
      return state;
    },
    updateName(state, action){
      const { _id, name} = action.payload
      const depIndex = state.findIndex((dep:SingleDepartementType) => dep._id === `${_id}`);
      if (depIndex !== -1) {
        state[depIndex].name = name
      }
    },
    updateRole(state, action) {
      const { _id, roleIndex, role} = action.payload
      const depIndex = state.findIndex((dep:SingleDepartementType) => dep._id === `${_id}`);
      if (depIndex !== -1) {
        state[depIndex].roles[roleIndex] = role;
      }
    },
    isExistOnTheDB(state, action){
      const { _id, realId} = action.payload
      const depIndex = state.findIndex((dep:SingleDepartementType) => dep._id === `${_id}`);
      if (depIndex !== -1) {
        state[depIndex].updated = true
        state[depIndex]._id = realId
      }
    },
    deleteRole(state,action) {
      const { _id, roleIndex} = action.payload
      const depIndex = state.findIndex((dep:SingleDepartementType) => dep._id === `${_id}`);
      if (depIndex !== -1) {
        state[depIndex].roles.splice(roleIndex, 1);
      }
    }
  },
});

export const { getDepartements,addDepartement, addRole , updateRole , updateName, deleteRole , isExistOnTheDB} = departmentSlice.actions

export default departmentSlice.reducer;
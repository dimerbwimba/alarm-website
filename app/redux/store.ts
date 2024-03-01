"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "@/app/redux/slice/counter-slice";
import heroSectionReducer from "@/app/redux/slice/hero-section-slice"
import agentReducer from "@/app/redux/slice/agent-slice"
import cvReducer from "@/app/redux/slice/single-cv-slice"
import departementReducer from "@/app/redux/slice/departement-slice"
import  partenaireReducer from "@/app/redux/slice/partenaire-slice"
const rootReducer = combineReducers({
  counter: counterReducer,
  heroSection:heroSectionReducer,
  agents:agentReducer,
  departements: departementReducer,
  partenaires:partenaireReducer,
  cv:cvReducer
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

 });

 export type RootState = ReturnType<typeof rootReducer>;

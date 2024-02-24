"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "@/app/redux/slice/counter-slice";
import heroSectionReducer from "@/app/redux/slice/hero-section-slice"
import AgentReducer from "@/app/redux/slice/agent-slice"
const rootReducer = combineReducers({
  counter: counterReducer,
  heroSection:heroSectionReducer,
  agents:AgentReducer
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

 });

 export type RootState = ReturnType<typeof rootReducer>;

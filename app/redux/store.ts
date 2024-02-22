"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "@/app/redux/slice/counter-slice";
import heroSectionReducer from "@/app/redux/slice/hero-section-slice"
const rootReducer = combineReducers({
  counter: counterReducer,
  heroSection:heroSectionReducer
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

 });

 export type RootState = ReturnType<typeof rootReducer>;

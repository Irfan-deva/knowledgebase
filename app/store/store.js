import { configureStore } from "@reduxjs/toolkit";
import quizReducer from './quizSlice'
import titleReducer from './quizNumbersSlice'
import updatesReducer from "./updatesSlice"

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    quizTitles: titleReducer,
    updates: updatesReducer
  }
})
import { createSlice } from "@reduxjs/toolkit";
import questions from "../../data/questions";
export const quizSlice = createSlice({
  name: 'quiz',
  initialState: questions,
  reducers: {
    setOption: (state, action) => {
      // state.quiz= [...state, action.payload.question]
      state[action.payload.num].selected = action.payload.option;
      console.log('====================================');
      console.log(`${action.payload.num}    ${action.payload.option}`);
      console.log('====================================');
    }
  }
})
export const { setOption } = quizSlice.actions
export default quizSlice.reducer
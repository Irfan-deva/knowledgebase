import { createSlice } from "@reduxjs/toolkit";

const titles = [
  { id: 0, title: 'QUIZ 1', cat: 'gk' },
  { id: 1, title: 'QUIZ 2', cat: 'computer' },
  { id: 2, title: 'QUIZ 3', cat: 'english' }]

export const quizNumbersSlice = createSlice({
  name: 'quizTitles',
  initialState: {
    titles
  }
})
export default quizNumbersSlice.reducer
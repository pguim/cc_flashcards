import { createSlice } from "@reduxjs/toolkit";

const initialState = { quizzes: {} }

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: initialState,
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes = { ...state.quizzes, [action.payload.id]: action.payload }
    }
  }
})

export const selectQuizzes = (state) => state.quizzes.quizzes
export const { addQuiz } = quizzesSlice.actions
export default quizzesSlice.reducer
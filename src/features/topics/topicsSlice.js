import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  topics: {},
}

const topicsSlice = createSlice({
  name: 'topics',
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      state.topics = { ...state.topics, [action.payload.id]: { ...action.payload, quizIds: [] } }
    },
    addQuizToTopic: (state, action) => {
      state.topics[action.payload.id].quizIds.push(action.payload.id)
    }
  },
})

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  topics: {},
}

const topicsSlice = createSlice({
  name: 'topics',
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      console.log(state.topics)
      return { ...state, ...{ [action.payload.id]: { ...action.payload, ...{ quizIds: [] } } } }
    }
  },
})

export const selectTopics = (state) => state.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer
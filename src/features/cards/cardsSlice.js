import { createSlice } from "@reduxjs/toolkit";

const initialState = { cards: {} }

const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards = { ...state.cards, [action.payload.id]: action.payload }
    }
  }
})

export const { addCard } = cardsSlice.actions
export const selectCard = id => state => state.cards.cards[id]
export default cardsSlice.reducer
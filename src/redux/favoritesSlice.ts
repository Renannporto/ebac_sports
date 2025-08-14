import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

type FavoritesState = {
  items: Produto[]
}

const initialState: FavoritesState = {
  items: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<Produto>) => {
      const existe = state.items.find((item) => item.id === action.payload.id)
      if (existe) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.items.push(action.payload)
      }
    }
  }
})

export const { toggleFavorito } = favoritesSlice.actions
export default favoritesSlice.reducer

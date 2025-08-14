import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

type CartState = {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const existe = state.items.find((item) => item.id === action.payload.id)
      if (!existe) {
        state.items.push(action.payload)
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho } = cartSlice.actions
export default cartSlice.reducer

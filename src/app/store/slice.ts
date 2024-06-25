import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { 
    value: 0 
  },
  reducers: {
    x: state => {
      state.value += 1
    },
    y: state => {
      state.value -= 1
    },
 
  }
})

// Action creators are generated for each case reducer function
export const { x, y } = counterSlice.actions

export default counterSlice.reducer
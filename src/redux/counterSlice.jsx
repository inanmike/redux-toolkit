import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  isAuthenticated: false,
  personalList: [[1,2,3,4],[1,2,3]],
  name: 'user'
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
        state.value = state.value + 1;
    },
    decrement: (state) => {
        state.value = state.value - 1;
    },
    changeName: (state, newName) => {
        state.name = newName.payload;
    }

  },
})
export const { increment, decrement, changeName} = counterSlice.actions
export default counterSlice.reducer
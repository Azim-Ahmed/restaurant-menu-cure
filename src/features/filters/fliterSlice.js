import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  colors: [],
  status: '',
}

const filterSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    colorSelected: (state, action) => {
      state.colors.push(action.payload)
    },
    colorRemoved: (state, action) => {
      const index = state.colors.indexOf(action.payload)
      if (index > -1) state.colors.splice(index, 1)
    },
    statusSelected: (state, action) => {
      state.author = ''
      state.status = action.payload
    },
  },
})

export default filterSlice.reducer
export const {
  colorSelected,
  colorRemoved,
  statusSelected,
} = filterSlice.actions
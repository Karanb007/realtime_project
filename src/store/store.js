import { configureStore } from '@reduxjs/toolkit'
import playersReducer from './slices/playersSlice'

export const store = configureStore({
  reducer: {
   // All slices goes here
   Players : playersReducer,

  },
})
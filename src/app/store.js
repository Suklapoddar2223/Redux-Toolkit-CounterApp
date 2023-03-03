import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice' //counterReducer is equal to counterSlice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


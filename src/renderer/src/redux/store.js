import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '../services/baseApi'
import userReducer from './slices/userSlice'
import appReducer from './slices/appSlice'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    user: userReducer,
    app: appReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(baseApi.middleware)
})

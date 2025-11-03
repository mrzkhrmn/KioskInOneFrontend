import { configureStore } from '@reduxjs/toolkit'
import { nfcReaderApi } from '../services/nfcReaderApi'

export const store = configureStore({
  reducer: {
    [nfcReaderApi.reducerPath]: nfcReaderApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // RTK Query middleware'i ekle
    }).concat(nfcReaderApi.middleware)
})

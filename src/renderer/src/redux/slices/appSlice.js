import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  selectedLanguage: null,
  languageList: []
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setSelectedLanguage: (state, action) => {
      state.selectedLanguage = action.payload
    },
    setLanguageList: (state, action) => {
      state.languageList = action.payload
      if (!state.selectedLanguage && action.payload.length > 0) {
        const defaultLanguage = action.payload.find((lang) => lang.isActive) || action.payload[0]
        state.selectedLanguage = defaultLanguage
      }
    }
  }
})

export const { setIsLoading, setSelectedLanguage, setLanguageList } = appSlice.actions
export default appSlice.reducer

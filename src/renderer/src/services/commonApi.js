import { baseApi } from './baseApi'

const commonApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLanguageList: builder.mutation({
      query: () => ({
        url: '/Common/GetLanguageList',
        method: 'POST',
        body: {}
      })
    })
  })
})

export const { useGetLanguageListMutation } = commonApi

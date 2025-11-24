import { baseApi } from './baseApi'

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    AuthLogin: builder.mutation({
      query: () => ({
        url: '/Auth/Login',
        method: 'POST'
      })
    })
  })
})

export const { useAuthLoginMutation } = authApi

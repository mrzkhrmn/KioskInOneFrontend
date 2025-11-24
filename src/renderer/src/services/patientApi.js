import { baseApi } from './baseApi'

const patientApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    patientLogin: builder.mutation({
      query: (data) => ({
        url: '/Patient/Login',
        method: 'POST',
        body: data
      })
    }),
    patientInsert: builder.mutation({
      query: (data) => ({
        url: '/Patient/Insert',
        method: 'POST',
        body: data
      })
    }),
    patientLoginVerify: builder.mutation({
      query: (data) => ({
        url: '/Patient/Verify',
        method: 'POST',
        body: data
      })
    }),
    patientVerifyInsert: builder.mutation({
      query: (data) => ({
        url: '/Patient/VerifyInsert',
        method: 'POST',
        body: data
      })
    }),
    patientInformation: builder.mutation({
      query: (data) => ({
        url: '/Patient/Information',
        method: 'POST',
        body: data
      })
    })
  })
})

export const {
  usePatientLoginMutation,
  usePatientInsertMutation,
  usePatientLoginVerifyMutation,
  usePatientVerifyInsertMutation,
  usePatientInformationMutation
} = patientApi

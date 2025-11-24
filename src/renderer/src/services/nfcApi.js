import { baseApi } from './baseApi'

export const nfcApi = baseApi.injectEndpoints({
  tagTypes: ['NFCCard', 'NFCDevice'],
  endpoints: (builder) => ({
    StartTransaction: builder.mutation({
      query: () => ({
        url: '/Nfc/StartTransaction',
        method: 'POST',
        body: {}
      })
    }),
    ControlNewIdBackSide: builder.mutation({
      query: ({ transactionId, idType, image }) => ({
        url: '/Nfc/ControlNewIdBackSide',
        method: 'POST',
        body: { transactionId, idType, image }
      })
    }),
    ControlPassportFrontSide: builder.mutation({
      query: ({ transactionId, img }) => ({
        url: '/Nfc/ControlPassportFrontSide',
        method: 'POST',
        body: { transactionId, img }
      })
    }),
    GenerateNonceForId: builder.mutation({
      query: ({ transactionId }) => ({
        url: '/Nfc/GenerateNonceForId',
        method: 'POST',
        body: { transactionId }
      })
    }),
    GenerateNonceForPassport: builder.mutation({
      query: ({ transactionId }) => ({
        url: '/Nfc/GenerateNonceForPassport',
        method: 'POST',
        body: { transactionId }
      })
    }),
    ValidateAndSaveNfcDataForId: builder.mutation({
      query: ({ transactionId, idType, dg1, dg2, sod, dg11, dg12, dg14, dg15 }) => ({
        url: '/Nfc/ValidateAndSaveNfcDataForId',
        method: 'POST',
        body: { transactionId, idType, dg1, dg2, sod, dg11, dg12, dg14, dg15 }
      })
    })
  })
})

export const {
  useStartTransactionMutation,
  useControlNewIdBackSideMutation,
  useControlPassportFrontSideMutation,
  useGenerateNonceForIdMutation
} = nfcApi

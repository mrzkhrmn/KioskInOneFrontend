import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://localhost:5185'

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json')
    return headers
  }
})

const baseQueryWithRetry = async (args, api, extraOptions) => {
  try {
    const result = await baseQuery(args, api, extraOptions)
    return result
  } catch (error) {
    if (error?.message?.includes('certificate') || error?.message?.includes('SSL')) {
      console.warn('SSL sertifika hatası, tekrar deneniyor...')
    }
    throw error
  }
}

export const nfcReaderApi = createApi({
  reducerPath: 'nfcReaderApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['NFCCard', 'NFCDevice'],
  endpoints: (builder) => ({
    initializeDevice: builder.mutation({
      query: (deviceId) => ({
        url: '/api/nfc/initialize',
        method: 'POST',
        body: { deviceId }
      }),
      invalidatesTags: ['NFCDevice']
    }),

    stopDevice: builder.mutation({
      query: (deviceId) => ({
        url: '/api/nfc/stop',
        method: 'POST',
        body: { deviceId }
      }),
      invalidatesTags: ['NFCDevice']
    }),

    readCard: builder.mutation({
      query: (params = {}) => ({
        url: '/api/nfc/read',
        method: 'POST',
        body: params
      }),
      invalidatesTags: ['NFCCard']
    }),

    startContinuousReading: builder.mutation({
      query: () => ({
        url: '/api/NFC/read-document',
        method: 'POST',
        body: {
          mode: 0,
          enableIDCardReading: true,
          enableImageCallback: true
        }
      }),
      invalidatesTags: ['NFCCard', 'NFCDevice']
    }),

    stopCardReading: builder.mutation({
      query: () => ({
        url: '/api/nfc/stop-reading',
        method: 'POST'
      }),
      invalidatesTags: ['NFCCard', 'NFCDevice']
    }),

    getDeviceStatus: builder.query({
      query: (deviceId) => `/api/nfc/status/${deviceId || ''}`,
      providesTags: ['NFCDevice']
    }),

    getCardData: builder.query({
      query: (cardId) => `/api/nfc/card/${cardId || ''}`,
      providesTags: ['NFCCard']
    }),

    getDevices: builder.query({
      query: () => '/api/nfc/devices',
      providesTags: ['NFCDevice']
    }),

    verifyCard: builder.mutation({
      query: (cardData) => ({
        url: '/api/nfc/verify',
        method: 'POST',
        body: cardData
      }),
      invalidatesTags: ['NFCCard']
    }),

    writeCard: builder.mutation({
      query: (cardData) => ({
        url: '/api/nfc/write',
        method: 'POST',
        body: cardData
      }),
      invalidatesTags: ['NFCCard']
    })
  })
})

export const {
  useInitializeDeviceMutation,
  useStopDeviceMutation,
  useReadCardMutation,
  useStartContinuousReadingMutation,
  useStopCardReadingMutation,
  useGetDeviceStatusQuery,
  useGetCardDataQuery,
  useGetDevicesQuery,
  useVerifyCardMutation,
  useWriteCardMutation
} = nfcReaderApi

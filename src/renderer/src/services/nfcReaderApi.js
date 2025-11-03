import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Base URL - https://localhost:7285
const baseUrl = 'http://localhost:5185'

// Custom baseQuery - SSL sertifika doğrulamasını bypass et (development için)
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json')
    return headers
  }
})

// SSL hatası için retry logic
const baseQueryWithRetry = async (args, api, extraOptions) => {
  try {
    const result = await baseQuery(args, api, extraOptions)
    return result
  } catch (error) {
    // SSL sertifika hatası durumunda
    if (error?.message?.includes('certificate') || error?.message?.includes('SSL')) {
      console.warn('SSL sertifika hatası, tekrar deneniyor...')
      // Electron'da SSL doğrulaması main process'te bypass edilmeli
    }
    throw error
  }
}

// NFC Reader API servisi
export const nfcReaderApi = createApi({
  reducerPath: 'nfcReaderApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['NFCCard', 'NFCDevice'],
  endpoints: (builder) => ({
    // NFC cihazını başlat
    initializeDevice: builder.mutation({
      query: (deviceId) => ({
        url: '/api/nfc/initialize',
        method: 'POST',
        body: { deviceId }
      }),
      invalidatesTags: ['NFCDevice']
    }),

    // NFC cihazını durdur
    stopDevice: builder.mutation({
      query: (deviceId) => ({
        url: '/api/nfc/stop',
        method: 'POST',
        body: { deviceId }
      }),
      invalidatesTags: ['NFCDevice']
    }),

    // NFC kart okuma
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

    // NFC kart okumayı durdur
    stopCardReading: builder.mutation({
      query: () => ({
        url: '/api/nfc/stop-reading',
        method: 'POST'
      }),
      invalidatesTags: ['NFCCard', 'NFCDevice']
    }),

    // NFC cihaz durumunu kontrol et
    getDeviceStatus: builder.query({
      query: (deviceId) => `/api/nfc/status/${deviceId || ''}`,
      providesTags: ['NFCDevice']
    }),

    // Okunan kart bilgilerini al
    getCardData: builder.query({
      query: (cardId) => `/api/nfc/card/${cardId || ''}`,
      providesTags: ['NFCCard']
    }),

    // Mevcut cihazları listele
    getDevices: builder.query({
      query: () => '/api/nfc/devices',
      providesTags: ['NFCDevice']
    }),

    // Kart doğrulama
    verifyCard: builder.mutation({
      query: (cardData) => ({
        url: '/api/nfc/verify',
        method: 'POST',
        body: cardData
      }),
      invalidatesTags: ['NFCCard']
    }),

    // Kart yazma
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

// Hooks'ları export et
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

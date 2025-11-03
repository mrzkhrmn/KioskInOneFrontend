import { useState, useEffect } from 'react'
import {
  useInitializeDeviceMutation,
  useStopDeviceMutation,
  useReadCardMutation,
  useStartContinuousReadingMutation,
  useStopCardReadingMutation,
  useGetDeviceStatusQuery,
  useGetDevicesQuery
} from '../services/nfcReaderApi'

/**
 * NFC Reader için custom hook
 * @param {string} deviceId - NFC cihaz ID'si (opsiyonel)
 * @returns {object} NFC Reader işlevleri ve durumu
 */
export const useNfcReader = (deviceId = null) => {
  const [cardData, setCardData] = useState(null)
  const [isReading, setIsReading] = useState(false)

  // Mutations
  const [initializeDevice, { isLoading: isInitializing }] = useInitializeDeviceMutation()
  const [stopDevice, { isLoading: isStopping }] = useStopDeviceMutation()
  const [readCard, { isLoading: isReadingCard }] = useReadCardMutation()
  const [startContinuousReading, { isLoading: isStartingReading }] =
    useStartContinuousReadingMutation()
  const [stopCardReading, { isLoading: isStoppingReading }] = useStopCardReadingMutation()

  // Queries
  const { data: devices, isLoading: isLoadingDevices } = useGetDevicesQuery()
  const { data: deviceStatus, isLoading: isLoadingStatus } = useGetDeviceStatusQuery(deviceId, {
    skip: !deviceId,
    pollingInterval: isReading ? 2000 : 0 // Okuma sırasında 2 saniyede bir kontrol et
  })

  // Cihazı başlat
  const handleInitialize = async (deviceIdParam = deviceId) => {
    try {
      const result = await initializeDevice(deviceIdParam).unwrap()
      return { success: true, data: result }
    } catch (error) {
      console.error('NFC cihaz başlatma hatası:', error)
      return { success: false, error: error.message || 'Cihaz başlatılamadı' }
    }
  }

  // Cihazı durdur
  const handleStop = async (deviceIdParam = deviceId) => {
    try {
      const result = await stopDevice(deviceIdParam).unwrap()
      setIsReading(false)
      return { success: true, data: result }
    } catch (error) {
      console.error('NFC cihaz durdurma hatası:', error)
      return { success: false, error: error.message || 'Cihaz durdurulamadı' }
    }
  }

  // Tek seferlik kart okuma
  const handleReadCard = async () => {
    try {
      const result = await readCard().unwrap()
      setCardData(result)
      return { success: true, data: result }
    } catch (error) {
      console.error('NFC kart okuma hatası:', error)
      return { success: false, error: error.message || 'Kart okunamadı' }
    }
  }

  // Sürekli kart okuma başlat
  const handleStartReading = async () => {
    try {
      setIsReading(true)
      const result = await startContinuousReading().unwrap()
      return { success: true, data: result }
    } catch (error) {
      console.error('NFC okuma başlatma hatası:', error)
      setIsReading(false)
      return { success: false, error: error.message || 'Okuma başlatılamadı' }
    }
  }

  // Kart okumayı durdur
  const handleStopReading = async () => {
    try {
      const result = await stopCardReading().unwrap()
      setIsReading(false)
      return { success: true, data: result }
    } catch (error) {
      console.error('NFC okuma durdurma hatası:', error)
      setIsReading(false)
      return { success: false, error: error.message || 'Okuma durdurulamadı' }
    }
  }

  // Component unmount olduğunda okumayı durdur
  useEffect(() => {
    return () => {
      if (isReading) {
        handleStopReading()
      }
    }
  }, [isReading])

  return {
    // Durum
    cardData,
    isReading,
    devices: devices?.devices || [],
    deviceStatus,
    isLoading:
      isInitializing || isStopping || isReadingCard || isStartingReading || isStoppingReading,
    isLoadingDevices,
    isLoadingStatus,

    // İşlevler
    initializeDevice: handleInitialize,
    stopDevice: handleStop,
    readCard: handleReadCard,
    startReading: handleStartReading,
    stopReading: handleStopReading
  }
}

import { useState, useEffect } from 'react'
import { useNfcReader } from '../hooks/useNfcReader'

/**
 * NFC Reader kullanım örneği
 * Bu component, NFC Reader API'sinin nasıl kullanılacağını gösterir
 */
export const NfcReaderExample = () => {
  const [selectedDeviceId, setSelectedDeviceId] = useState(null)
  const {
    cardData,
    isReading,
    devices,
    deviceStatus,
    isLoading,
    isLoadingDevices,
    initializeDevice,
    stopDevice,
    readCard,
    startReading,
    stopReading
  } = useNfcReader(selectedDeviceId)

  // Seçili cihaz varsa otomatik başlat
  useEffect(() => {
    if (selectedDeviceId && !deviceStatus?.isActive) {
      initializeDevice(selectedDeviceId)
    }
  }, [selectedDeviceId])

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">NFC Reader Örneği</h1>

      {/* Cihaz Listesi */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Cihazlar</h2>
        {isLoadingDevices ? (
          <p>Cihazlar yükleniyor...</p>
        ) : devices.length === 0 ? (
          <p className="text-gray-500">Cihaz bulunamadı</p>
        ) : (
          <div className="space-y-2">
            {devices.map((device) => (
              <button
                key={device.id}
                onClick={() => setSelectedDeviceId(device.id)}
                className={`w-full p-3 text-left border rounded-lg ${
                  selectedDeviceId === device.id
                    ? 'bg-blue-100 border-blue-500'
                    : 'bg-white border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="font-medium">{device.name}</div>
                <div className="text-sm text-gray-500">{device.id}</div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Cihaz Kontrolleri */}
      {selectedDeviceId && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Cihaz Kontrolleri</h2>
          <div className="flex gap-2 mb-3">
            <button
              onClick={() => initializeDevice(selectedDeviceId)}
              disabled={isLoading || deviceStatus?.isActive}
              className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-400"
            >
              Başlat
            </button>
            <button
              onClick={() => stopDevice(selectedDeviceId)}
              disabled={isLoading || !deviceStatus?.isActive}
              className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-400"
            >
              Durdur
            </button>
          </div>
          {deviceStatus && (
            <div className="text-sm">
              <p>Durum: {deviceStatus.isActive ? 'Aktif' : 'Pasif'}</p>
              <p>Model: {deviceStatus.model || 'Bilinmiyor'}</p>
            </div>
          )}
        </div>
      )}

      {/* Kart Okuma Kontrolleri */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Kart Okuma</h2>
        <div className="flex gap-2 mb-3">
          <button
            onClick={readCard}
            disabled={isLoading || !deviceStatus?.isActive}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
          >
            Tek Seferlik Oku
          </button>
          <button
            onClick={startReading}
            disabled={isLoading || isReading || !deviceStatus?.isActive}
            className="px-4 py-2 bg-purple-500 text-white rounded disabled:bg-gray-400"
          >
            Sürekli Oku (Başlat)
          </button>
          <button
            onClick={stopReading}
            disabled={isLoading || !isReading}
            className="px-4 py-2 bg-orange-500 text-white rounded disabled:bg-gray-400"
          >
            Okumayı Durdur
          </button>
        </div>
        {isReading && (
          <div className="mt-3 p-3 bg-yellow-100 border border-yellow-400 rounded">
            <p className="font-medium text-yellow-800">Kart okunuyor... Lütfen bekleyin</p>
          </div>
        )}
      </div>

      {/* Okunan Kart Bilgileri */}
      {cardData && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Okunan Kart Bilgileri</h2>
          <pre className="bg-white p-3 rounded border overflow-auto text-sm">
            {JSON.stringify(cardData, null, 2)}
          </pre>
        </div>
      )}

      {/* Yükleme Durumu */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <p>İşlem gerçekleştiriliyor...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default NfcReaderExample

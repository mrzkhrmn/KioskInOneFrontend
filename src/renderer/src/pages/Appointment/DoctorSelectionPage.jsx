import NavigationButtons from '../../components/common/NavigationButtons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import SelectDoctorCard from '../../components/Appointment/SelectDoctorCard'
const DoctorSelectionPage = () => {
  const location = useLocation()
  const unitName = location.state?.unitName || ''
  const user = useSelector((state) => state.user.user)
  const [selectedDate, setSelectedDate] = useState('2025-04-16')
  const [selectedTime, setSelectedTime] = useState({ doctorId: null, time: null, doctorName: null })
  const navigate = useNavigate()
  const doctors = [
    {
      id: 1,
      name: 'Dyt. Aleyna Turan',
      availableSlots: [
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:30',
        '14:00',
        '14:30',
        '15:30',
        '16:00',
        '16:30'
      ],
      unavailableSlots: ['09:30', '10:30', '11:30', '15:00']
    },
    {
      id: 2,
      name: 'Uzm. Dyt. Damla Demirtürk Albayrak',
      availableSlots: ['10:30', '11:00', '12:00', '13:30', '14:00', '16:30'],
      unavailableSlots: ['09:00', '09:30', '10:00', '11:30', '14:30', '15:00', '15:30']
    },
    {
      id: 3,
      name: 'Uzm. Dyt. Deniz Özyalçın',
      availableSlots: [
        '09:00',
        '09:30',
        '10:00',
        '10:30',
        '11:30',
        '12:00',
        '13:30',
        '14:00',
        '16:00',
        '16:30'
      ],
      unavailableSlots: ['11:00', '14:30', '15:00', '15:30']
    }
  ]

  const allTimeSlots = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30'
  ]

  const handleTimeSelect = (doctorId, time, doctorName) => {
    setSelectedTime({ doctorId, time, doctorName })
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}.${month}.${year}`
  }

  const handleContinue = () => {
    navigate('/appointment')
    console.log('Seçimle devam et:', selectedTime)
  }
  return (
    <div className="flex flex-col py-12 h-[90vh] w-screen">
      <h1 style={{ fontWeight: 700 }} className="text-5xl text-white text-center mt-10">
        {unitName ? `Randevu Al > ${unitName}` : 'Randevu Al'}
      </h1>
      <div className="flex flex-col items-center justify-center h-full gap-20">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 style={{ fontWeight: 700 }} className="text-5xl text-white">
            Sayın {user?.patientName} {user?.patientSurname}
          </h1>
          <h2 style={{ fontWeight: 700 }} className="text-4xl text-white">
            Tarih, doktor ve saat seçiniz:
          </h2>
        </div>
        <div className="flex  items-center justify-center">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-[544px] p-4 rounded-2xl h-[90px] text-2xl text-gray-500 text-center bg-white"
          />
        </div>

        <div className="overflow-y-auto max-h-[800px] pr-4">
          {doctors.map((doctor) => (
            <SelectDoctorCard
              key={doctor.id}
              doctorName={doctor.name}
              availableSlots={doctor.availableSlots}
              allTimeSlots={allTimeSlots}
              selectedTime={selectedTime.doctorId === doctor.id ? selectedTime.time : null}
              onTimeSelect={(time) => handleTimeSelect(doctor.id, time, doctor.name)}
            />
          ))}
        </div>

        {selectedTime.doctorId && selectedTime.time && (
          <div className="bg-white w-[870px] rounded-2xl p-8 mt-2 mr-10 shadow-lg flex items-center justify-between">
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-bold text-black">{selectedTime.doctorName}</p>
              <p className="text-xl text-black">Randevu Tarihi: {formatDate(selectedDate)}</p>
              <p className="text-xl text-black">Randevu Saati: {selectedTime.time}</p>
            </div>
            <button
              onClick={handleContinue}
              className="bg-[#aa182c] text-white px-12 py-5 rounded-2xl text-2xl font-bold shadow-md hover:bg-[#8a1423] transition-colors whitespace-nowrap"
            >
              Seçimle Devam Et
            </button>
          </div>
        )}
      </div>

      <NavigationButtons />
    </div>
  )
}

export default DoctorSelectionPage

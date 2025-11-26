import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavigationButtons from '../../components/common/NavigationButtons'
import { useState } from 'react'

const AppointmentTypeSelectionPage = () => {
  const user = useSelector((state) => state.user.user)
  const navigate = useNavigate()

  const appointmentTypes = ['Muayene', 'Kontrol Randevusu']
  const [selectedAppointmentType, setSelectedAppointmentType] = useState(null)

  const handleButtonClick = (appointmentType) => {
    setSelectedAppointmentType(appointmentType)
    navigate('/unit-selection')
  }

  return (
    <div className="flex flex-col py-12 h-[90vh] w-screen">
      <h1 style={{ fontWeight: 700 }} className="text-5xl text-white text-center mt-10">
        Randevu Al
      </h1>
      <div className="flex flex-col items-center justify-center h-full gap-20">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 style={{ fontWeight: 700 }} className="text-5xl text-white">
            Sayın {user?.patientName} {user?.patientSurname}
          </h1>
          <h2 style={{ fontWeight: 700 }} className="text-4xl text-white">
            Hastane seçiniz:
          </h2>
        </div>
        <div className="flex flex-col w-[540px] gap-12">
          {appointmentTypes.map((appointmentType) => (
            <AppointmentTypeButton
              key={appointmentType}
              text={appointmentType}
              onClick={() => handleButtonClick(appointmentType)}
            />
          ))}
        </div>
      </div>
      <NavigationButtons isBack={true} isHome={true} isLogout={false} />
    </div>
  )
}

const AppointmentTypeButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ fontWeight: 700 }}
      className=" py-4 text-[32px] text-gray-700 flex items-center justify-center  border-none active:scale-95  tracking-wide bg-white/95  rounded-xl shadow-md cursor-pointer transition-all duration-200 ease-in-out backdrop-blur-md"
    >
      {text}
    </button>
  )
}

export default AppointmentTypeSelectionPage

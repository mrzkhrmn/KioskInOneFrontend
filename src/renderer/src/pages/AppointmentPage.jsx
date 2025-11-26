import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import AHLogo from '../assets/images/ah-logo.png'
import DoctorProfileImage from '../assets/images/doctor.png'
import { HospitalIcon, MuayeneIcon, CalendarIcon, ClockIcon, GuardIcon } from '../components/icons'
import NavigationButtons from '../components/common/NavigationButtons'
import useTranslation from '../hooks/useTranslation'
import { useSelector } from 'react-redux'

const AppointmentPage = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)
  const translate = useTranslation('appointment')

  useEffect(() => {
    if (!user) {
      navigate('/verify-id-or-passport')
    }
  }, [user, navigate])

  return (
    <div className="flex flex-col  py-24  h-[90vh] w-screen">
      <h2 style={{ fontWeight: 700 }} className="text-5xl text-white text-center">
        {translate('title')}
      </h2>
      <button className="bg-primary text-[32px] self-center font-bold px-12 py-3 rounded-2xl text-white mt-14">
        {translate('newAppointment')}
      </button>

      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-5xl text-white font-bold mt-24">
          {translate('dear', {
            name: user?.patientName || 'Ahmet',
            surname: user?.patientSurname || 'Örnekadam'
          })}
        </h1>
        <h2 className=" text-4xl text-white font-bold mt-10">
          {translate('appointmentOperations')}
        </h2>
        <div className="overflow-y-auto max-h-[970px]  mt-20 pr-4">
          <div className="space-y-8">
            <AppointmentCard translate={translate} />
            <AppointmentCard translate={translate} />
            <AppointmentCard translate={translate} />
            <AppointmentCard translate={translate} />
          </div>
        </div>
      </div>
      <NavigationButtons />
    </div>
  )
}

const AppointmentCard = ({ translate }) => {
  return (
    <div className=" bg-white p-8 rounded-xl ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={DoctorProfileImage} alt="DoktorImage" className="object-center w-24 h-24" />
          <div className="text-black">
            <p className="text-3xl">Dyt. Aleyna Turan</p>
            <p className="text-3xl">Amerikan Hastanesi</p>
          </div>
        </div>

        <img src={AHLogo} alt="Amerikan Hastanesi" />
      </div>

      <div className="flex  gap-40 mt-8">
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center gap-4">
            <MuayeneIcon width={32} height={32} />
            <p className="text-black text-[28px]">{translate('card.examination')}</p>
          </div>
          <div className="flex items-center gap-4">
            <HospitalIcon />
            <p className="text-black text-[28px]">Beslenme ve Diyet</p>
          </div>
          <div className="flex items-center gap-4">
            <CalendarIcon />
            <p className="text-black text-[28px]">16.04.2025</p>
          </div>
          <div className="flex items-center gap-4">
            <ClockIcon />
            <p className="text-black text-[28px]">16:00</p>
          </div>
          <div className="flex items-center gap-4">
            <GuardIcon />
            <p className="text-black text-[28px]">{translate('card.noInsurance')}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <button className="bg-primary text-3xl text-white font-bold py-4 border border-primary  px-10 rounded-2xl shadow-xl">
            {translate('card.confirm')}
          </button>
          <button className="bg-[#D9D9D9] text-3xl text-black font-bold border border-black/50 py-4 px-10 rounded-2xl shadow-xl">
            {translate('card.payment')}
          </button>
          <button className="bg-[#D9D9D9] text-3xl text-black font-bold border border-black/50 py-4 px-10 rounded-2xl shadow-xl">
            {translate('card.cancel')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppointmentPage

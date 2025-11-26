import { Link } from 'react-router-dom'
import NavigationButtons from '../components/common/NavigationButtons'
import useTranslation from '../hooks/useTranslation'

const AppointmentAccept = () => {
  const translate = useTranslation('appointmentAccept')

  return (
    <div className="flex flex-col   h-[93vh] items-center justify-center w-screen ">
      <div className="flex flex-col items-center justify-center  h-full gap-20">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-5xl text-white text-center" style={{ fontWeight: 700 }}>
            {translate('welcome')}
          </h1>
          <h2 className="text-4xl text-white text-center" style={{ fontWeight: 700 }}>
            {translate('selectInsuranceType')}
          </h2>
        </div>
        <div className="flex flex-col gap-12">
          <Link
            to="/id-verification"
            className="bg-white text-black items-center justify-center py-2 px-10 text-[32px] rounded-2xl text-center"
            style={{ fontWeight: 700 }}
          >
            {translate('buttons.individual')}
          </Link>
          <Link
            to="/"
            className="bg-white text-black items-center justify-center py-2 px-10 text-[32px] rounded-2xl text-center"
            style={{ fontWeight: 700 }}
          >
            {translate('buttons.sgk')}
          </Link>
          <Link
            to="/"
            className="bg-white text-black items-center justify-center py-2 px-10 text-[32px] rounded-2xl text-center"
            style={{ fontWeight: 700 }}
          >
            {translate('buttons.privateInsurance')}
          </Link>
        </div>
      </div>
      <NavigationButtons isHome={false} isLogout={false} />
    </div>
  )
}

export default AppointmentAccept

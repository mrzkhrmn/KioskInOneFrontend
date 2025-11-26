import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavigationButtons from '../components/common/NavigationButtons'
import useTranslation from '../hooks/useTranslation'
import homeTr from '../locales/tr/home.json'
import homeEn from '../locales/en/home.json'

const HomePage = () => {
  const user = useSelector((state) => state.user.user)
  const navigate = useNavigate()
  const translate = useTranslation({ tr: homeTr, en: homeEn })

  const handleButtonClick = (path) => {
    if (user) {
      navigate('/verify-id-or-passport')
      return
    }
    navigate(path)
  }

  return (
    <div className="flex flex-col   h-[90vh] items-center justify-center w-screen">
      <div className="flex-1 items-center justify-center flex flex-col gap-20">
        <div className="flex flex-col gap-10  justify-center ">
          {user ? (
            <>
              <h1 style={{ fontWeight: 700 }} className="text-5xl text-center text-white">
                {translate('welcome')}
              </h1>
              <h1 style={{ fontWeight: 700 }} className="text-5xl text-center text-white">
                {user.patientName} {user.patientSurname}
              </h1>
              <p style={{ fontWeight: 700 }} className="text-4xl text-center text-white">
                {translate('selectOperation')}
              </p>
            </>
          ) : (
            <>
              <h1 style={{ fontWeight: 700 }} className="text-5xl text-center text-white">
                {translate('welcome')}
              </h1>
              <p style={{ fontWeight: 700 }} className="text-4xl text-center text-white">
                {translate('selectOperation')}
              </p>
            </>
          )}
        </div>
        <div className="flex flex-col w-[540px] gap-12  justify-center">
          <HomeButtons
            text={translate('buttons.makeAppointment')}
            onClick={() => handleButtonClick('/hospital-selection')}
          />
          <HomeButtons
            text={translate('buttons.existingAppointment')}
            onClick={() => handleButtonClick('/appointment')}
          />
          <HomeButtons
            text={translate('buttons.approveTests')}
            onClick={() => handleButtonClick('/approve-tests')}
          />
          <HomeButtons
            text={translate('buttons.updateInfo')}
            onClick={() => handleButtonClick('/update-info')}
          />
        </div>
      </div>
      {user && <NavigationButtons isBack={false} isHome={false} isLogout={true} />}
    </div>
  )
}

const HomeButtons = ({ text, onClick }) => {
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

export default HomePage

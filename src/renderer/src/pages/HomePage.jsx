import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavigationButtons from '../components/common/NavigationButtons'

const HomePage = () => {
  const user = useSelector((state) => state.user.user)
  const navigate = useNavigate()

  const handleButtonClick = (path) => {
    if (!user) {
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
                Hoş Geldiniz
              </h1>
              <h1 style={{ fontWeight: 700 }} className="text-5xl text-center text-white">
                {user.patientName} {user.patientSurname}
              </h1>
              <p style={{ fontWeight: 700 }} className="text-4xl text-center text-white">
                Lütfen yapmak istediğiniz işlemi seçiniz:
              </p>
            </>
          ) : (
            <>
              <h1 style={{ fontWeight: 700 }} className="text-5xl text-center text-white">
                Hoş Geldiniz
              </h1>
              <p style={{ fontWeight: 700 }} className="text-4xl text-center text-white">
                Lütfen yapmak istediğiniz işlemi seçiniz:
              </p>
            </>
          )}
        </div>
        <div className="flex flex-col w-[540px] gap-12  justify-center">
          <HomeButtons
            text="Randevu Al"
            onClick={() => handleButtonClick('/verify-id-or-passport')}
          />
          <HomeButtons
            text="Randevum Var - Kayıt Aç"
            onClick={() => handleButtonClick('/appointment')}
          />
          <HomeButtons
            text="Tetkikleri Onayla"
            onClick={() => handleButtonClick('/approve-tests')}
          />
          <HomeButtons
            text="Bilgi Düzenleme / Güncelleme"
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
      className=" h-[70px] text-[32px] text-gray-700 flex items-center justify-center  border-none active:scale-95  tracking-wide bg-white/95  rounded-xl shadow-md cursor-pointer transition-all duration-200 ease-in-out backdrop-blur-md "
    >
      {text}
    </button>
  )
}

export default HomePage

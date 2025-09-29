import { Link } from 'react-router-dom'
import GoBackIcon from '../assets/icons/arrow-left.png'
import { useNavigate } from 'react-router-dom'

const AppointmentAccept = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col   h-[93vh] items-center justify-center w-screen ">
      {/* <h1
        className="text-5xl text-white text-center"
        style={{ fontWeight: 700, marginTop: '100px' }}
      >
        Randevu Kabul
      </h1> */}
      <div className="flex flex-col items-center justify-center  h-full gap-20">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-5xl text-white text-center" style={{ fontWeight: 700 }}>
            Hoş Geldiniz
          </h1>
          <h2 className="text-4xl text-white text-center" style={{ fontWeight: 700 }}>
            Lütfen sosyal güvence türü seçiniz:
          </h2>
        </div>
        <div className="flex flex-col gap-12">
          <Link
            to="/id-verification"
            className="bg-white text-black items-center justify-center py-2 px-10 text-[32px] rounded-2xl text-center"
            style={{ fontWeight: 700 }}
          >
            Bireysel Hasta Olarak Devam Et
          </Link>
          <Link
            to="/"
            className="bg-white text-black items-center justify-center py-2 px-10 text-[32px] rounded-2xl text-center"
            style={{ fontWeight: 700 }}
          >
            SGK
          </Link>
          <Link
            to="/"
            className="bg-white text-black items-center justify-center py-2 px-10 text-[32px] rounded-2xl text-center"
            style={{ fontWeight: 700 }}
          >
            Özel Sağlık Sigortası
          </Link>
        </div>
      </div>
      <div className="flex  w-full justify-start items-end px-10">
        <button onClick={() => navigate(-1)} className="flex flex-col items-center gap-2">
          <img src={GoBackIcon} alt="GoBackIcon" />
          <span className=" text-[32px] text-white">Geri</span>
        </button>
      </div>
    </div>
  )
}

export default AppointmentAccept

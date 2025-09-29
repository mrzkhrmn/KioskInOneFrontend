import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import AHLogo from '../assets/images/ah-logo.png'
import AHBLogo from '../assets/images/ah-bodrum-logo.png'
import KUHLogo from '../assets/images/kuh-logo.png'
import ATMLogo from '../assets/images/atm-logo.png'
import KSYLogo from '../assets/images/ksy-logo.png'

const AppointmentPage = () => {
  const navigate = useNavigate()
  const user = true

  useEffect(() => {
    if (!user) {
      navigate('/verify-id-or-passport')
    }
  }, [user, navigate])

  return (
    <div className="flex flex-col items-center py-10  h-[93vh] w-screen">
      <h1 style={{ fontWeight: 700 }} className="text-5xl text-white">
        Randevu Al
      </h1>
      <div className="flex flex-col items-center justify-center h-full gap-20">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 style={{ fontWeight: 700 }} className="text-5xl text-white">
            Sayın Ahmet Örnekadam
          </h1>
          <h2 style={{ fontWeight: 700 }} className="text-4xl text-white">
            Hastane seçiniz:
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex  items-center justify-center relative gap-4 z-10 h-[70px]  ">
            <div className="bg-white py-4 rounded-t-2xl flex items-center justify-center rounded-b-xl relative z-10 w-[210px] h-full">
              <img src={AHLogo} alt="AmerikanLogo" />
            </div>
            <div className="bg-white w-full h-[10px] absolute bottom-0 z-0 rounded-b-2xl "></div>
            <p
              className="text-black text-3xl bg-white w-[540px] text-center py-2.5 rounded-t-2xl rounded-b-xl relative z-10 h-full flex items-center justify-center"
              style={{ fontWeight: 700 }}
            >
              Amerikan Hastanesi
            </p>
          </div>
          <div className="flex  items-center justify-center relative gap-4 z-10 h-[70px]">
            <div className="bg-white py-4 rounded-t-2xl flex items-center justify-center rounded-b-xl relative z-10 w-[210px] h-full">
              <img src={ATMLogo} alt="AmerikanLogo" />
            </div>
            <div className="bg-white w-full h-[10px] absolute bottom-0 z-0 rounded-b-2xl "></div>
            <p
              className="text-black text-3xl bg-white w-[540px] text-center py-2.5 rounded-t-2xl rounded-b-xl relative z-10 h-full flex items-center justify-center"
              style={{ fontWeight: 700 }}
            >
              Amerikan Tıp Merkezi
            </p>
          </div>
          <div className="flex  items-center justify-center relative gap-4 z-10 h-[70px]">
            <div className="bg-white py-4 rounded-t-2xl flex items-center justify-center rounded-b-xl relative z-10 w-[210px] h-full">
              <img src={KUHLogo} alt="AmerikanLogo" />
            </div>
            <div className="bg-white w-full h-[10px] absolute bottom-0 z-0 rounded-b-2xl "></div>
            <p
              className="text-black text-3xl bg-white w-[540px] text-center py-2.5 rounded-t-2xl rounded-b-xl relative z-10 h-full flex items-center justify-center"
              style={{ fontWeight: 700 }}
            >
              Koç Üniversitesi Hastanesi
            </p>
          </div>
          <div className="flex  items-center justify-center relative gap-4 z-10 h-[70px]">
            <div className="bg-white py-4 rounded-t-2xl flex items-center justify-center rounded-b-xl relative z-10 w-[210px] h-full">
              <img src={AHBLogo} alt="AmerikanLogo" />
            </div>
            <div className="bg-white w-full h-[10px] absolute bottom-0 z-0 rounded-b-2xl "></div>
            <p
              className="text-black text-3xl bg-white w-[540px] text-center py-2.5 rounded-t-2xl rounded-b-xl relative z-10 h-full flex items-center justify-center"
              style={{ fontWeight: 700 }}
            >
              Bodrum Amerikan Hastanesi
            </p>
          </div>
          <div className="flex  items-center justify-center relative gap-4 z-10 h-[70px]">
            <div className="bg-white py-4 rounded-t-2xl flex items-center justify-center rounded-b-xl relative z-10 w-[210px] h-full">
              <img src={KSYLogo} alt="AmerikanLogo" />
            </div>
            <div className="bg-white w-full h-[10px] absolute bottom-0 z-0 rounded-b-2xl "></div>
            <p
              className="text-black text-3xl bg-white w-[540px] text-center py-2.5 rounded-t-2xl rounded-b-xl relative z-10 h-full flex items-center justify-center"
              style={{ fontWeight: 700 }}
            >
              Koç Sağlık Yanımda
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentPage

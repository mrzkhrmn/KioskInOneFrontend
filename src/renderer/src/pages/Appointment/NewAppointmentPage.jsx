import AHLogo from '../../assets/images/ah-logo.png'
import AHBLogo from '../../assets/images/ah-bodrum-logo.png'
import KUHLogo from '../../assets/images/kuh-logo.png'
import ATMLogo from '../../assets/images/atm-logo.png'
import KSYLogo from '../../assets/images/ksy-logo.png'
import NavigationButtons from '../../components/common/NavigationButtons'
import { useSelector } from 'react-redux'

const NewAppointmentPage = () => {
  const { user } = useSelector((state) => state.user)
  const hospitalData = [
    { logo: AHLogo, name: 'Amerikan Hastanesi' },
    { logo: ATMLogo, name: 'Amerikan Tıp Merkezi' },
    { logo: KUHLogo, name: 'Koç Üniversitesi Hastanesi' },
    { logo: AHBLogo, name: 'Bodrum Amerikan Hastanesi' },
    { logo: KSYLogo, name: 'Koç Sağlık Yanımda' }
  ]

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
          {hospitalData.map((hospital, index) => (
            <HospitalButton key={index} logo={hospital.logo} name={hospital.name} />
          ))}
        </div>
      </div>
      <NavigationButtons />
    </div>
  )
}

const HospitalButton = ({ logo, name }) => {
  return (
    <button className="flex  items-center justify-center relative gap-4 z-10 h-[70px] active:scale-95 transition-all duration-200 ease-in-out ">
      <div className="bg-white py-4 rounded-t-2xl flex items-center justify-center rounded-b-xl relative z-10 w-[210px] h-full">
        <img src={logo} alt="AmerikanLogo" />
      </div>
      <div className="bg-white w-full h-[10px] absolute bottom-0 z-0 rounded-b-2xl "></div>
      <p
        className="text-black text-3xl bg-white w-[540px] text-center py-2.5 rounded-t-2xl rounded-b-xl relative z-10 h-full flex items-center justify-center"
        style={{ fontWeight: 700 }}
      >
        {name}
      </p>
    </button>
  )
}

export default NewAppointmentPage

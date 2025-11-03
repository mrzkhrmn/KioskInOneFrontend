import { Link } from 'react-router-dom'
import EmptyImage from '../../assets/images/empty-image.png'
import { useState } from 'react'
import NavigationButtons from '../common/NavigationButtons'

const VerifyBackside = ({ idType, onGoBack }) => {
  const [idVerified, setIdVerified] = useState(true)

  return idVerified ? (
    <div className="flex flex-col h-screen justify-between">
      <div className="flex-1 flex flex-col gap-32 items-center justify-center">
        <div className="bg-white w-[900px] py-14 flex flex-col gap-16 rounded-2xl items-center justify-center">
          <img src={EmptyImage} alt="EmptyImage" />
          <p className="text-[32px] text-black text-center max-w-[600px] leading-10">
            Lütfen {idType === 'tc' ? 'TC kimlik kartınızı' : 'pasaportunuzu'}{' '}
            <span style={{ fontWeight: 700 }}>arka yüzü</span> aşağıya gelecek şekilde okuyucuya
            yerleştiriniz.
          </p>
        </div>
        <button
          onClick={() => setIdVerified(false)}
          style={{ fontWeight: 700 }}
          className="bg-[#AA182C] w-[370px] rounded-2xl h-[70px] text-white text-[32px] shadow-lg"
        >
          Devam
        </button>
      </div>
      <NavigationButtons isHome={false} />
    </div>
  ) : (
    <div className="flex flex-col h-screen justify-between items-center">
      <div className="flex-1 items-center justify-center flex">
        <div className="bg-white w-[900px] py-14 flex flex-col gap-16 rounded-2xl items-center justify-center">
          <div className="flex flex-col gap-10">
            <p className="text-[32px] text-black text-center leading-10">
              Hastane sistemimizde kaydınız bulunmamaktadır.
            </p>
            <p className="text-[32px] text-black text-center leading-10">
              Lütfen yapmak istediğiniz işlemi aşağıdan seçiniz.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Link
              to="/new-patient"
              style={{ fontWeight: 700 }}
              className="bg-[#AA182C] w-[500px] rounded-2xl h-[70px] text-white text-[32px] shadow-lg items-center justify-center flex"
            >
              Yeni Hasta Kayıt
            </Link>
            <Link
              to="/"
              style={{ fontWeight: 700 }}
              className="bg-[#F5F5F5] w-[500px] rounded-2xl h-[70px] text-black border-black/25 border text-[32px] shadow-lg items-center justify-center flex"
            >
              Çıkış
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyBackside

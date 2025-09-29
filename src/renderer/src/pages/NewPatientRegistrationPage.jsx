import NfcGif from '../assets/images/nfc-anim.gif'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GoBackIcon from '../assets/icons/arrow-left.png'
import LogoutIcon from '../assets/icons/logout.png'

const NewPatientRegistrationPage = () => {
  const [nfcVerified, setNfcVerified] = useState(false)
  const [formVerified, setFormVerified] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = () => {
    setFormVerified(true)
  }
  return (
    <div className="flex flex-col   h-[93vh]   w-screen">
      {!nfcVerified ? (
        <div className=" flex flex-col items-center justify-center h-full gap-32">
          <div className="bg-white w-[900px] px-10 py-14 flex flex-col gap-16 rounded-2xl items-center justify-center">
            <img
              src={NfcGif}
              alt="EmptyImage"
              className="w-[266px] h-[266px] object-contain"
              style={{ marginLeft: '30px' }}
            />
            <p className="text-[32px] text-black text-center max-w-[580px] leading-10">
              Lütfen TC kimlik kartınızı <span style={{ fontWeight: 700 }}>NFC okuyucuya </span>
              yerleştiriniz.
            </p>
          </div>
          <button
            style={{ fontWeight: 700 }}
            className="bg-[#AA182C] w-[370px] rounded-2xl h-[70px] text-white text-[32px] shadow-lg"
            onClick={() => setNfcVerified(true)}
          >
            Devam
          </button>
        </div>
      ) : !formVerified ? (
        <div className="flex flex-col items-center justify-center h-full gap-20">
          <p className="text-5xl text-white text-center" style={{ fontWeight: 700 }}>
            Lütfen Bilgilerinizi Giriniz
          </p>
          <form className="bg-white w-[900px] h-[825px] rounded-2xl p-14  items-center flex flex-col">
            <p className="text-[32px] text-black font-bold text-center">
              İlgili alanlara dokunarak klavyeden giriş yapınız.
            </p>
            <div style={{ marginTop: '42px' }} className="flex gap-14">
              <div className="w-[360px] flex flex-col gap-6">
                <input
                  placeholder="Ahmet"
                  type="text"
                  id="name"
                  className="bg-black/5 w-full px-4 py-2.5 placeholder:text-black/50 rounded-2xl text-black"
                />
                <input
                  placeholder="Örnekadam"
                  type="text"
                  id="surname"
                  className="bg-black/5 w-full px-4 py-2.5 placeholder:text-black/50 rounded-2xl text-black"
                />
                <input
                  placeholder="1990-01-01"
                  type="text"
                  id="birthday"
                  className="bg-black/5 w-full px-4 py-2.5 placeholder:text-black/50 rounded-3xl text-black"
                />
                <input
                  placeholder="Anne Adı"
                  type="text"
                  id="motherName"
                  className="bg-black/5 w-full px-4 py-2.5 placeholder:text-black/50 rounded-3xl text-black"
                />
                <input
                  placeholder="Baba Adı"
                  type="text"
                  id="fatherName"
                  className="bg-black/5 w-full px-4 py-2.5 placeholder:text-black/50 rounded-3xl text-black"
                />
                <input
                  placeholder="E-posta"
                  type="email"
                  id="email"
                  className="bg-[#AA182C33] w-full px-4 py-2.5 placeholder:text-black/50 rounded-3xl text-black"
                />
                <input
                  placeholder="Cep Telefonu"
                  type="tel"
                  id="fatherName"
                  className="bg-black/5 w-full px-4 py-2.5 placeholder:text-black/50 rounded-3xl text-black"
                />
              </div>
              <div className="w-[360px] flex flex-col gap-6">
                <input
                  placeholder="TC Kimlik No"
                  type="number"
                  id="tc"
                  className="bg-black/5 w-full px-4 py-2.5 placeholder:text-black/50 rounded-2xl text-black"
                />
                <input
                  placeholder="Ülke"
                  type="text"
                  id="country"
                  className="bg-black/5 w-full px-4 py-2.5 placeholder:text-black/50 rounded-2xl text-black"
                />
                <input
                  placeholder="İl"
                  type="text"
                  id="city"
                  className="bg-black/5 w-full px-4 py-2.5 placeholder:text-black/50 rounded-2xl text-black"
                />
                <input
                  placeholder="İlçe"
                  type="text"
                  id="district"
                  className="bg-black/5 w-full px-4 py-2.5 placeholder:text-black/50 rounded-2xl text-black"
                />
                <textarea
                  placeholder="Atatürk Mah. Sedef Cad. Ata 3/4 Sitesi B1 Blok No:19 D:265 Ataşehir/İstanbul/Türkiye"
                  id="address"
                  className="bg-black/5 w-full px-4 py-1.5 placeholder:text-black/50 rounded-2xl text-black resize-none"
                  rows={4}
                />
                <input
                  placeholder="Araç Plaka"
                  type="text"
                  id="plate"
                  className="bg-[#AA182C33] w-full px-4 py-2.5 placeholder:text-black/50 rounded-2xl text-black"
                />
              </div>
            </div>
            <button
              style={{ marginTop: '56px', fontWeight: 700 }}
              type="submit"
              className="bg-[#AA182C] text-white text-[32px] rounded-2xl px-32 py-2 cursor-pointer"
              onClick={handleSubmit}
            >
              Onayla ve Devam Et
            </button>
            <p className="text-black text-[14px] " style={{ marginTop: '24px' }}>
              *Demografik bilgiler NVI sisteminden alındığından güncelleme yapılamamaktadır. Sadece
              renkli alanlar güncellenebilir
            </p>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-20 items-center justify-center h-full">
          <p className="text-5xl text-white text-center" style={{ fontWeight: 700 }}>
            Lütfen Bilgilerinizi Giriniz
          </p>
          <div className="bg-white w-[900px] py-14 flex flex-col  rounded-2xl items-center justify-center gap-16">
            <p className="text-[32px] text-black text-center max-w-[600px] leading-10">
              Kişisel verilerin işlenmesine ilişkin onay formunu onaylamak için lütfen telefonunuza
              gönderilen kodu giriniz..
            </p>
            <div className="flex bg-black/5 w-[300px] h-[50px] rounded-2xl items-center justify-center gap-2 py-6">
              <span className="text-[32px] text-gray-400">_</span>
              <span className="text-[32px] text-gray-400">_</span>
              <span className="text-[32px] text-gray-400">_</span>
              <span className="text-[32px] text-gray-400">_</span>
            </div>
            <button
              className="bg-[#AA182C] text-white text-[32px] rounded-2xl px-32 py-2 cursor-pointer"
              style={{ fontWeight: 700 }}
              onClick={() => navigate('/')}
            >
              Onayla
            </button>
          </div>
        </div>
      )}
      <div className="flex  w-full justify-start items-end pb-10 px-10 gap-10">
        <button onClick={() => navigate(-1)} className="flex flex-col items-center gap-2">
          <img src={GoBackIcon} alt="GoBackIcon" />
          <span className=" text-[32px] text-white">Geri</span>
        </button>
        <button
          onClick={() => navigate('/')}
          className="flex flex-col justify-center items-center gap-2"
        >
          <img src={LogoutIcon} alt="LogoutIcon" />
          <span className=" text-[32px] text-white">Çıkış</span>
        </button>
      </div>
    </div>
  )
}

export default NewPatientRegistrationPage

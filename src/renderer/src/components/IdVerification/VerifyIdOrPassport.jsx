import { useNavigate } from 'react-router-dom'
import GoBackIcon from '../../assets/icons/arrow-left.png'
import VerifyFrontside from '../../components/IdVerification/VerifyFrontside'
import { useState } from 'react'
import VerifyBackside from '../../components/IdVerification/VerifyBackside'

const VerifyIdOrPassport = () => {
  const [isFrontVerified, setIsFrontVerified] = useState(false)
  const [selectedIdType, setSelectedIdType] = useState(null)
  const navigate = useNavigate()
  return (
    <div className="flex h-[93vh] w-screen items-center justify-center">
      {selectedIdType == null ? (
        <div className="flex flex-col h-screen justify-between">
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white w-[850px] px-10 py-14 flex flex-col gap-16 rounded-2xl items-center justify-center">
              <p className="text-[32px] text-black text-center max-w-[600px] leading-10">
                Lütfen kimlik doğrulama için kullanacağınız kimlik tipini seçiniz.
              </p>
              <div className="flex flex-col gap-6">
                <button
                  onClick={() => setSelectedIdType('tc')}
                  style={{ fontWeight: 700 }}
                  className="bg-[#AA182C] w-[500px] rounded-2xl h-[70px] text-white text-[32px] shadow-lg  items-center justify-center flex"
                >
                  TC Kimlik Kartı
                </button>
                <button
                  onClick={() => setSelectedIdType('passport')}
                  style={{ fontWeight: 700 }}
                  className="bg-[#AA182C] w-[500px] rounded-2xl h-[70px] text-white text-[32px] shadow-lg  items-center justify-center flex"
                >
                  Pasaport
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-start items-end pb-10">
            <button onClick={() => navigate(-1)} className="flex flex-col items-center gap-2">
              <img src={GoBackIcon} alt="GoBackIcon" />
              <span className=" text-[32px] text-white">Geri</span>
            </button>
          </div>
        </div>
      ) : (
        <VerifyFrontside
          setIsFrontVerified={setIsFrontVerified}
          idType={selectedIdType}
          onGoBack={() => setSelectedIdType(null)}
        />
      )}
    </div>
  )
}

export default VerifyIdOrPassport

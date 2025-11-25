import { useNavigate } from 'react-router-dom'
import NavigationButtons from '../components/common/NavigationButtons'
import useTranslation from '../hooks/useTranslation'
import verifyIdOrPassportTr from '../locales/tr/verifyIdOrPassport.json'
import verifyIdOrPassportEn from '../locales/en/verifyIdOrPassport.json'

const VerifyIdOrPassportPage = () => {
  const navigate = useNavigate()
  const translate = useTranslation({ tr: verifyIdOrPassportTr, en: verifyIdOrPassportEn })

  const handleIdTypeSelection = (idType) => {
    navigate(`/scan-id?idType=${idType}`)
  }

  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="w-screen flex-1 flex items-center justify-center">
        <div className="bg-white w-[900px] px-10 py-14 flex flex-col gap-16 rounded-2xl items-center justify-center">
          <p className="text-[32px] text-black text-center max-w-[600px] leading-10">
            {translate('title')}
          </p>
          <div className="flex flex-col gap-6">
            <button
              onClick={() => handleIdTypeSelection(2)}
              style={{ fontWeight: 700 }}
              className="bg-primary w-[500px] rounded-2xl h-[70px] text-white text-[32px] shadow-lg  items-center justify-center flex"
            >
              {translate('buttons.tcCard')}
            </button>
            <button
              onClick={() => handleIdTypeSelection(3)}
              style={{ fontWeight: 700 }}
              className="bg-primary w-[500px] rounded-2xl h-[70px] text-white text-[32px] shadow-lg  items-center justify-center flex"
            >
              {translate('buttons.passport')}
            </button>
          </div>
        </div>
      </div>
      <NavigationButtons isHome={false} isLogout={false} />
    </div>
  )
}

export default VerifyIdOrPassportPage

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetLanguageListMutation } from '../../services/commonApi'
import { setSelectedLanguage, setLanguageList } from '../../redux/slices/appSlice'
import TurkeyFlag from '../../assets/flagTurkey.png'
import { useTranslation } from 'react-i18next'

const LanguageSelectionModal = ({ onClose }) => {
  const dispatch = useDispatch()
  const [getLanguageList, { isLoading }] = useGetLanguageListMutation()
  const languageList = useSelector((state) => state.app.languageList)
  const selectedLanguage = useSelector((state) => state.app.selectedLanguage)
  const { i18n } = useTranslation()

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const result = await getLanguageList().unwrap()
        if (result?.data && Array.isArray(result.data)) {
          const activeLanguages = result.data.filter((lang) => lang.isActive)
          dispatch(setLanguageList(activeLanguages))
        }
      } catch (error) {
        console.error('Dil listesi yüklenirken hata oluştu:', error)
      }
    }

    if (languageList.length === 0) {
      fetchLanguages()
    }
  }, [getLanguageList, dispatch, languageList.length])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(false)
    }
  }

  const handleLanguageSelect = (language) => {
    dispatch(setSelectedLanguage(language))
    i18n.changeLanguage(language.code)
    onClose(false)
  }

  const getFlagImage = (code) => {
    if (code === 'tr') {
      return TurkeyFlag
    }
    const flagCode = code === 'en' ? 'gb' : code
    return `https://flagcdn.com/w40/${flagCode}.png`
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-[600px] rounded-2xl shadow-2xl p-8">
        <h2
          className="text-2xl font-bold text-center  text-gray-800"
          style={{ marginBottom: '20px' }}
        >
          Dil Seçimi
        </h2>
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <p className="text-xl">Yükleniyor...</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {languageList.map((language) => (
              <button
                key={language.id}
                onClick={() => handleLanguageSelect(language)}
                className={`bg-white border-2 border-black text-black py-4 flex items-center gap-4 justify-center px-6 rounded-lg text-2xl font-semibold `}
              >
                <img
                  src={getFlagImage(language.code)}
                  alt={language.name}
                  className="w-14"
                  onError={(e) => {
                    e.target.src = TurkeyFlag
                  }}
                />
                <p className="text-2xl" style={{ fontWeight: 700 }}>
                  {language.name}
                </p>
              </button>
            ))}
          </div>
        )}
        <button
          onClick={() => onClose(false)}
          className=" w-full bg-primary py-3 px-4 rounded-lg text-3xl text-white font-semibold"
          style={{ marginTop: '20px' }}
        >
          Kapat
        </button>
      </div>
    </div>
  )
}

export default LanguageSelectionModal

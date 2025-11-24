import { useSelector } from 'react-redux'
import CompanyLogo from '../assets/khLogo.png'
import UnionLogo from '../assets/Union.png'
import TurkeyFlag from '../assets/flagTurkey.png'
import Clock from './common/Clock'

const Header = ({ onLanguageSelectionModalOpen }) => {
  const selectedLanguage = useSelector((state) => state.app.selectedLanguage)

  const getFlagImage = (code) => {
    if (code === 'tr') {
      return TurkeyFlag
    }
    const flagCode = code === 'en' ? 'gb' : code
    return `https://flagcdn.com/w40/${flagCode}.png`
  }

  return (
    <header
      className="relative  bg-no-repeat bg-contain h-[6rem] w-full bg-center"
      style={{ backgroundImage: `url(${UnionLogo})` }}
    >
      <div className="flex  items-center relative  px-6 h-full  ">
        <button onClick={onLanguageSelectionModalOpen} className="flex-1 flex items-center gap-4">
          <span style={{ fontWeight: 700 }} className="text-white text-2xl">
            Dil:
          </span>
          {selectedLanguage ? (
            <img
              src={getFlagImage(selectedLanguage.code)}
              alt={selectedLanguage.name}
              className="w-14"
              onError={(e) => {
                e.target.src = TurkeyFlag
              }}
            />
          ) : (
            <img src={TurkeyFlag} alt="TurkeyFlag" className="w-14" />
          )}
        </button>
        <div className="flex flex-1 items-center justify-center ">
          <img src={CompanyLogo} alt="KocHealthcare Logo" className="object-contain h-16 " />
        </div>
        <Clock />
      </div>
    </header>
  )
}

export default Header

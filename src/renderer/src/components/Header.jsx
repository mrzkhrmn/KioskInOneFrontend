import CompanyLogo from '../assets/khLogo.png'
import UnionLogo from '../assets/Union.png'
import TurkeyFlag from '../assets/flagTurkey.png'
const Header = ({ onLanguageSelectionModalOpen }) => {
  return (
    <header className="relative h-28">
      <img
        src={UnionLogo}
        alt="UnionBg"
        className="bg-contain bg-center bg-no-repeat w-full absolute "
      />
      <div className="flex  items-center relative  px-6 h-full  ">
        <button onClick={onLanguageSelectionModalOpen} className="flex-1 flex items-center gap-4">
          <span style={{ fontWeight: 700 }} className="text-white text-2xl">
            Dil:
          </span>
          <img src={TurkeyFlag} alt="TurkeyFlag" className="w-14" />
        </button>
        <div className="flex flex-1 items-center justify-center ">
          <img src={CompanyLogo} alt="KocHealthcare Logo" />
        </div>
        <div className="flex-1 ">
          <div style={{ fontWeight: 700 }} className="text-end text-white text-2xl leading-5">
            12.06.2025
          </div>
          <div style={{ fontWeight: 700 }} className="text-end text-white text-2xl">
            10:00
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

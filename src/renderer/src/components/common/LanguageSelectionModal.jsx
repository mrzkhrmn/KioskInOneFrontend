import TurkeyFlag from '../../assets/flagTurkey.png'
const LanguageSelectionModal = ({ onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(false)
    }
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
        <div className="flex flex-col gap-4">
          <button
            onClick={() => onClose(true)}
            className="bg-white border-2 text-black border-black hover:bg-blue-500 hover:text-white py-4 flex items-center gap-4  justify-center px-6 rounded-lg text-2xl font-semibold transition-all duration-200 transform hover:scale-105"
          >
            <img src={TurkeyFlag} alt="TurkeyFlag" className="w-14" />
            <p className="text-2xl" style={{ fontWeight: 700 }}>
              Türkçe
            </p>
          </button>
          <button
            onClick={() => onClose(false)}
            className="bg-white border-2 border-black text-black flex items-center gap-4  justify-center hover:bg-red-500 hover:text-white py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            <img src={TurkeyFlag} alt="TurkeyFlag" className="w-14" />
            <p className="text-2xl" style={{ fontWeight: 700 }}>
              Ingilizce
            </p>
          </button>
        </div>
        <button
          onClick={() => onClose(false)}
          className=" w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-2xl transition-colors duration-200"
          style={{ marginTop: '20px' }}
        >
          Kapat
        </button>
      </div>
    </div>
  )
}

export default LanguageSelectionModal

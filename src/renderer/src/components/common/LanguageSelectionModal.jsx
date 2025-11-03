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
            className="bg-white border-2 text-black border-black py-4 flex items-center gap-4  justify-center px-6 rounded-lg text-2xl font-semibold"
          >
            <img src={TurkeyFlag} alt="TurkeyFlag" className="w-14" />
            <p className="text-2xl" style={{ fontWeight: 700 }}>
              Türkçe
            </p>
          </button>
          <button
            onClick={() => onClose(false)}
            className="bg-white border-2 border-black text-black flex items-center gap-4  justify-center py-4 px-6 rounded-lg text-lg font-semibold"
          >
            <img src={TurkeyFlag} alt="TurkeyFlag" className="w-14" />
            <p className="text-2xl" style={{ fontWeight: 700 }}>
              İngilizce
            </p>
          </button>
        </div>
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

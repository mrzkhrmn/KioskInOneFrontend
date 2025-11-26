import { useNavigate } from 'react-router-dom'

const PatientNotFoundModal = ({ onClose, idType }) => {
  const navigate = useNavigate()

  const handleNewPatient = () => {
    onClose()
    navigate('/new-patient', { state: { idType } })
  }

  const handleExit = () => {
    onClose()
    navigate('/')
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[900px] rounded-2xl shadow-2xl px-10 py-14 flex flex-col gap-16 items-center justify-center">
        <div className="flex flex-col gap-6 items-center">
          <p className="text-[32px] text-black text-center max-w-[600px] leading-10">
            Hastane sistemimizde kaydınız bulunmamaktadır.
          </p>
          <p className="text-[32px] text-black text-center max-w-[600px] leading-10">
            Lütfen yapmak istediğiniz işlemi aşağıdan seçiniz.
          </p>
        </div>
        <div className="flex flex-col gap-6 w-full max-w-[500px]">
          <button
            onClick={handleNewPatient}
            style={{ fontWeight: 700 }}
            className="bg-primary w-full rounded-2xl h-[70px] text-white text-[32px] shadow-lg flex items-center justify-center"
          >
            Yeni Hasta Kayıt
          </button>
          <button
            onClick={handleExit}
            style={{ fontWeight: 700 }}
            className="bg-white border-2 border-primary text-black w-full rounded-2xl h-[70px] text-[32px] shadow-lg flex items-center justify-center"
          >
            Çıkış
          </button>
        </div>
      </div>
    </div>
  )
}

export default PatientNotFoundModal

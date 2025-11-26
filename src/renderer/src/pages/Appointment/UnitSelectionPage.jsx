import { useState } from 'react'
import { useSelector } from 'react-redux'
import NavigationButtons from '../../components/common/NavigationButtons'
import { useNavigate } from 'react-router-dom'
const UnitSelectionPage = () => {
  const user = useSelector((state) => state.user.user)
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate()
  const handleUnitSelection = (unit) => {
    navigate('/doctor-selection', { state: { unitName: unit } })
  }

  const units = [
    'Ağız ve Diş',
    'Alerji',
    'Beslenme ve Diyet',
    'Beyin Sinir Cerrahisi',
    'Dahiliye',
    'Kardiyoloji',
    'Nöroloji',
    'Ortopedi',
    'Pediatri',
    'Üroloji',
    'Göz Hastalıkları',
    'Kulak Burun Boğaz',
    'Kalp ve Damar Cerrahisi',
    'KBB',
    'Nöroloji',
    'Ortopedi',
    'Üroloji'
  ]

  const filteredUnits = units.filter((unit) =>
    unit.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col py-12 h-[90vh] w-screen">
      <h1 style={{ fontWeight: 700 }} className="text-5xl text-white text-center mt-10">
        Randevu Al
      </h1>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl text-white font-bold mt-24">
          Sayın {user?.patientName} {user?.patientSurname}
        </h1>
        <h2 className="text-4xl text-white font-bold mt-10">Bölüm Seçiniz</h2>

        <div className="w-full max-w-xl mt-10 px-4">
          <input
            type="text"
            placeholder="Bölüm ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-3xl px-6 py-4 rounded-2xl border-2 border-gray-300 focus:outline-none focus:border-primary text-black"
          />
        </div>

        <div className="overflow-y-auto max-h-[1014px] mt-10 pr-4 w-full  max-w-[544px]">
          <div className="space-y-10">
            {filteredUnits.map((unit, index) => (
              <UnitCard key={index} unitName={unit} onClick={() => handleUnitSelection(unit)} />
            ))}
          </div>
        </div>
      </div>
      <NavigationButtons />
    </div>
  )
}

const UnitCard = ({ unitName, onClick }) => {
  return (
    <div
      className="bg-white py-2 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <p className="text-black text-center text-[32px] font-semibold">{unitName}</p>
    </div>
  )
}

export default UnitSelectionPage

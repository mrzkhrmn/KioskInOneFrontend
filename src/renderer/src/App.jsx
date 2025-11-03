import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import HomePage from './pages/HomePage'
import kioskBackVideo from './assets/kiosk-back.mp4'
import Header from './components/Header'
import AppointmentPage from './pages/AppointmentPage'
import NewPatientRegistrationPage from './pages/NewPatientRegistrationPage'
import AppointmentAccept from './pages/AppointmentAccept'
import VerifyIdOrPassportPage from './pages/VerifyIdOrPassportPage'
import { useState } from 'react'
import LanguageSelectionModal from './components/common/LanguageSelectionModal'
function App() {
  const [isLanguageSelectionModalOpen, setIsLanguageSelectionModalOpen] = useState(false)

  return (
    <Provider store={store}>
      <div className="relative h-screen w-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={kioskBackVideo} type="video/mp4" />
        </video>

        {isLanguageSelectionModalOpen && (
          <LanguageSelectionModal
            isOpen={isLanguageSelectionModalOpen}
            onClose={setIsLanguageSelectionModalOpen}
          />
        )}
        <Header onLanguageSelectionModalOpen={setIsLanguageSelectionModalOpen} />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/new-patient" element={<NewPatientRegistrationPage />} />
            <Route path="/appointment-accept" element={<AppointmentAccept />} />
            <Route path="/verify-id-or-passport" element={<VerifyIdOrPassportPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  )
}

export default App

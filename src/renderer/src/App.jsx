import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux'
import { store } from './redux/store'
import kioskBackVideo from './assets/kiosk-back.mp4'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import LanguageSelectionModal from './components/common/LanguageSelectionModal'
import GlobalLoading from './components/common/GlobalLoading'
import { useAuthLoginMutation } from './services/authApi'
import { useGetLanguageListMutation } from './services/commonApi'
import { setLanguageList } from './redux/slices/appSlice'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useSessionTimeout from './hooks/useSessionTimeout'
import {
  HomePage,
  AppointmentPage,
  NewPatientRegistrationPage,
  AppointmentAccept,
  VerifyIdOrPassportPage,
  NewAppointmentPage,
  InsuranceSelectionPage,
  ScanIdPage
} from './pages'
import OtpVerificationPage from './pages/OtpVerificationPage'

function RouterContent() {
  useSessionTimeout()
  return null
}

function AppContent() {
  const dispatch = useDispatch()
  const [isLanguageSelectionModalOpen, setIsLanguageSelectionModalOpen] = useState(false)
  const [authLogin] = useAuthLoginMutation()
  const [getLanguageList] = useGetLanguageListMutation()

  useEffect(() => {
    const result = authLogin()
    console.log(result)
  }, [authLogin])

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

    fetchLanguages()
  }, [getLanguageList, dispatch])

  return (
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
      <GlobalLoading />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 10000 }}
      />
      <Header onLanguageSelectionModalOpen={setIsLanguageSelectionModalOpen} />
      <Router>
        <RouterContent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/new-appointment" element={<NewAppointmentPage />} />
          <Route path="/new-patient" element={<NewPatientRegistrationPage />} />
          <Route path="/appointment-accept" element={<AppointmentAccept />} />
          <Route path="/verify-id-or-passport" element={<VerifyIdOrPassportPage />} />
          <Route path="/scan-id" element={<ScanIdPage />} />
          <Route path="/insurance-selection" element={<InsuranceSelectionPage />} />
          <Route path="/otp-verification" element={<OtpVerificationPage />} />
        </Routes>
      </Router>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App

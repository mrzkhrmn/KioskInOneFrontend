import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  usePatientInformationMutation,
  usePatientLoginVerifyMutation
} from '../services/patientApi'
import { setIsLoading } from '../redux/slices/appSlice'
import { useDispatch } from 'react-redux'
import { useToast } from '../hooks/useToast'
import { setUser } from '../redux/slices/userSlice'

const OtpVerificationPage = () => {
  const location = useLocation()
  const sessionId = location.state?.sessionId
  const [verifyInsert] = usePatientLoginVerifyMutation()
  const [patientInformation] = usePatientInformationMutation()
  const [otp, setOtp] = useState('')
  const dispatch = useDispatch()
  const { showError } = useToast()
  const navigate = useNavigate()

  const handleOtpChange = (e) => {
    const value = e.target.value
    const numericValue = value.replace(/\D/g, '')
    if (numericValue.length <= 5) {
      setOtp(numericValue)
    }
  }

  const handleSubmit = async () => {
    if (otp.length === 5 && sessionId) {
      try {
        dispatch(setIsLoading(true))
        const result = await verifyInsert({
          sessionId,
          smsCode: otp
        }).unwrap()

        if (!result.isSuccess) {
          showError(result.errors.Messages[0])
          navigate('/verify-id-or-passport')
          return
        }

        const informationResult = await patientInformation({
          identityNo: '40595168198',
          passportNo: '',
          birthDate: '2001-06-20'
        }).unwrap()

        if (!informationResult.isSuccess) {
          showError(informationResult.errors.Messages[0])
          navigate('/verify-id-or-passport')
          return
        }

        dispatch(setUser(informationResult.data))
        navigate('/')
      } catch (error) {
        showError(error.data.errors.Messages[0])
        navigate('/verify-id-or-passport')
      } finally {
        dispatch(setIsLoading(false))
      }
    }
  }

  return (
    <div className="flex flex-col h-[85vh] items-center justify-center ">
      <div className="flex flex-col gap-20 items-center justify-center h-full">
        <p className="text-5xl text-white text-center" style={{ fontWeight: 700 }}>
          Lütfen Bilgilerinizi Giriniz
        </p>
        <div className="bg-white w-[900px] py-14 flex flex-col  rounded-2xl items-center justify-center gap-16">
          <p className="text-[32px] text-black text-center max-w-[600px] leading-10">
            Kişisel verilerin işlenmesine ilişkin onay formunu onaylamak için lütfen telefonunuza
            gönderilen kodu giriniz..
          </p>
          <div className="flex flex-col items-center gap-4">
            <input
              type="text"
              inputMode="numeric"
              maxLength={5}
              value={otp}
              onChange={handleOtpChange}
              className="bg-black/5 w-[300px] h-[50px] rounded-2xl text-center text-[32px] text-black focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="-----"
              style={{ fontWeight: 500 }}
            />
          </div>
          <button
            className={`text-white text-[32px] rounded-2xl px-32 py-2 cursor-pointer ${
              otp.length === 5 ? 'bg-primary' : 'bg-gray-400 cursor-not-allowed'
            }`}
            style={{ fontWeight: 700 }}
            onClick={handleSubmit}
            disabled={otp.length !== 5}
          >
            Onayla
          </button>
        </div>
      </div>
    </div>
  )
}

export default OtpVerificationPage

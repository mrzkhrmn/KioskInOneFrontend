import EmptyImage from '../../assets/images/empty-image.png'
import NavigationButtons from '../common/NavigationButtons'
import { useDispatch } from 'react-redux'
import { setIsLoading } from '../../redux/slices/appSlice'
import { usePatientLoginMutation } from '../../services/patientApi'
import { useToast } from '../../hooks/useToast'
import { useNavigate } from 'react-router-dom'
import { useMemo, useState } from 'react'
import PatientNotFoundModal from '../modals/PatientNotFoundModal'
import useTranslation from '../../hooks/useTranslation'
import scanIdTr from '../../locales/tr/scanId.json'
import scanIdEn from '../../locales/en/scanId.json'

const ScanDocument = ({ idType }) => {
  const dispatch = useDispatch()
  const [patientLogin] = usePatientLoginMutation()
  const { showError } = useToast()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [showPatientNotFoundModal, setShowPatientNotFoundModal] = useState(false)
  const translate = useTranslation({ tr: scanIdTr, en: scanIdEn })

  const labels = useMemo(() => {
    const isTc = idType === 2
    return {
      documentLabel: isTc ? translate('documents.tcCard') : translate('documents.passport'),
      step1Action: translate('steps.front'),
      step2Action: isTc ? translate('steps.back') : translate('steps.entryDate')
    }
  }, [idType, translate])

  const handleContinue = async () => {
    const isTc = idType === 2
    const isPassport = idType === 3

    if (isPassport && step === 1) {
      setStep(2)
      return
    }

    try {
      dispatch(setIsLoading(true))
      const result = await patientLogin({
        type: idType,
        birthDate: '2001-06-20',
        phone: '5312055650',
        tcIdentityNo: isTc ? '40595168198' : '',
        passaportNo: isTc ? '' : '12312311',
        enablePatientsVIPControl: false
      }).unwrap()

      if (result.data.isMember) {
        navigate('/otp-verification', {
          state: { sessionId: result.data.sessionId }
        })
      } else {
        setShowPatientNotFoundModal(true)
      }
    } catch (error) {
      error?.data?.errors?.Messages?.forEach((err) => {
        showError(err)
      })
    } finally {
      dispatch(setIsLoading(false))
    }
  }
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="flex-1 flex flex-col gap-32 items-center justify-center">
        <div className="bg-white w-[900px] px-10 py-14 flex flex-col gap-16 rounded-2xl items-center justify-center">
          <img src={EmptyImage} alt="EmptyImage" />
          <p className="text-[32px] text-black text-center max-w-[600px] leading-10">
            {translate('instruction', {
              documentLabel: labels.documentLabel,
              stepAction: step === 1 ? labels.step1Action : labels.step2Action
            })}
          </p>
        </div>
        <button
          onClick={handleContinue}
          style={{ fontWeight: 700 }}
          className="bg-primary w-[370px] rounded-2xl h-[70px] text-white text-[32px] shadow-lg"
        >
          {step === 1 ? translate('buttons.continue') : translate('buttons.complete')}
        </button>
      </div>
      <NavigationButtons isHome={false} goBackTo="/verify-id-or-passport" />
      {showPatientNotFoundModal && (
        <PatientNotFoundModal onClose={() => setShowPatientNotFoundModal(false)} idType={idType} />
      )}
    </div>
  )
}

export default ScanDocument

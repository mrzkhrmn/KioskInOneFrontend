import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NavigationButtons from '../../components/common/NavigationButtons'
import useTranslation from '../../hooks/useTranslation'

const InsuranceSelectionPage = () => {
  const user = useSelector((state) => state.user.user)
  const navigate = useNavigate()
  const translate = useTranslation('insuranceSelection')
  const translateAppointment = useTranslation('newAppointment')

  const handleInsuranceSelection = () => {
    navigate('/appointment-type-selection')
  }

  return (
    <div className="flex flex-col py-12 h-[90vh] w-screen">
      <h1 style={{ fontWeight: 700 }} className="text-5xl text-white text-center mt-10">
        {translateAppointment('title')}
      </h1>
      <div className="flex-1 items-center justify-center flex flex-col gap-20">
        <div className="flex flex-col gap-10  justify-center ">
          <h1 style={{ fontWeight: 700 }} className="text-5xl text-center text-white">
            {translate('title', {
              name: user?.patientName || '',
              surname: user?.patientSurname || ''
            })}
          </h1>
          <p style={{ fontWeight: 700 }} className="text-4xl text-center text-white">
            {translate('selectInsuranceType')}
          </p>
        </div>
        <div className="flex flex-col w-[540px] gap-12  justify-center">
          <InsuranceButtons
            textKey="buttons.individual"
            translate={translate}
            onClick={handleInsuranceSelection}
          />
          <InsuranceButtons
            textKey="buttons.sgk"
            translate={translate}
            onClick={handleInsuranceSelection}
          />
          <InsuranceButtons
            textKey="buttons.privateInsurance"
            translate={translate}
            onClick={handleInsuranceSelection}
          />
        </div>
      </div>
      <NavigationButtons />
    </div>
  )
}

const InsuranceButtons = ({ textKey, translate, onClick }) => {
  const text = translate(textKey)
  return (
    <button
      style={{ fontWeight: 700 }}
      className=" h-[70px] text-[32px] text-gray-700 flex items-center justify-center  border-none active:scale-95  tracking-wide bg-white/95  rounded-xl shadow-md cursor-pointer transition-all duration-200 ease-in-out backdrop-blur-md "
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  )
}

export default InsuranceSelectionPage

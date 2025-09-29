import EmptyImage from '../../assets/images/empty-image.png'
import ExitButton from '../common/ExitButton'
import BackButton from '../common/BackButton'

const VerifyFrontside = ({ setIsFrontVerified, idType, onGoBack }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="flex-1 flex flex-col gap-32 items-center justify-center">
        <div className="bg-white w-[900px] px-10 py-14 flex flex-col gap-16 rounded-2xl items-center justify-center">
          <img src={EmptyImage} alt="EmptyImage" />
          <p className="text-[32px] text-black text-center max-w-[600px] leading-10">
            Lütfen {idType === 'tc' ? 'TC kimlik kartınızı' : 'pasaportunuzu'}{' '}
            <span style={{ fontWeight: 700 }}>ön yüzü</span> aşağıya gelecek şekilde okuyucuya
            yerleştiriniz.
          </p>
        </div>
        <button
          onClick={() => setIsFrontVerified(true)}
          style={{ fontWeight: 700 }}
          className="bg-[#AA182C] w-[370px] rounded-2xl h-[70px] text-white text-[32px] shadow-lg"
        >
          Devam
        </button>
      </div>
      <div className="flex w-screen justify-start items-end pb-10 gap-10 px-10">
        <BackButton />
        <ExitButton />
      </div>
    </div>
  )
}

export default VerifyFrontside

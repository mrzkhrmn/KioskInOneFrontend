import { useNavigate } from 'react-router-dom'
import GoBackIcon from '../../assets/icons/arrow-left.png'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(-1)} className="flex flex-col items-center gap-2">
      <img src={GoBackIcon} alt="GoBackIcon" />
      <span className=" text-[32px] text-white">Geri</span>
    </button>
  )
}

export default BackButton

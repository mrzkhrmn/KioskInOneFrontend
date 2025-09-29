import { useNavigate } from 'react-router-dom'
import LogoutIcon from '../../assets/icons/logout.png'

const ExitButton = () => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate('/')} className="flex flex-col items-center gap-2">
      <img src={LogoutIcon} alt="LogoutIcon" />
      <span className=" text-[32px] text-white">Çıkış</span>
    </button>
  )
}

export default ExitButton

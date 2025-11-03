import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '../icons'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(-1)} className="flex flex-col items-center gap-2">
      <ArrowLeftIcon size={72} />
      <span className=" text-[32px] text-white">Geri</span>
    </button>
  )
}

export default BackButton

import { ArrowLeftIcon, HomeIcon, LogoutIcon } from '../icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../../redux/slices/userSlice'
import useTranslation from '../../hooks/useTranslation'

const NavigationButtons = ({ isLogout = true, isHome = true, isBack = true, goBackTo = -1 }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const translate = useTranslation('common')

  const handleLogout = () => {
    dispatch(clearUser())
    navigate('/')
  }

  return (
    <div className="absolute flex  gap-10 bottom-6 left-10">
      {isBack && (
        <button onClick={() => navigate(goBackTo)} className="flex flex-col items-center gap-2">
          <ArrowLeftIcon size={72} />
          <span className=" text-[32px] text-white">{translate('buttons.back')}</span>
        </button>
      )}
      {isHome && (
        <button onClick={() => navigate('/')} className="flex flex-col items-center gap-2">
          <HomeIcon size={72} />
          <span className=" text-[32px] text-white">{translate('buttons.home')}</span>
        </button>
      )}
      {isLogout && user && (
        <button onClick={handleLogout} className="flex flex-col items-center gap-2">
          <LogoutIcon size={72} />
          <span className=" text-[32px] text-white">{translate('buttons.logout')}</span>
        </button>
      )}
    </div>
  )
}

export default NavigationButtons

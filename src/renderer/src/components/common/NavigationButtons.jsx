import React from 'react'
import { ArrowLeftIcon, HomeIcon, LogoutIcon } from '../icons'
import { useNavigate } from 'react-router-dom'
const NavigationButtons = ({ isLogout = true, isHome = true, isBack = true }) => {
  const navigate = useNavigate()
  return (
    <div className="absolute flex  gap-10 bottom-6 left-10">
      {isBack && (
        <button onClick={() => navigate(-1)} className="flex flex-col items-center gap-2">
          <ArrowLeftIcon size={72} />
          <span className=" text-[32px] text-white">Geri</span>
        </button>
      )}
      {isHome && (
        <button onClick={() => navigate('/')} className="flex flex-col items-center gap-2">
          <HomeIcon size={72} />
          <span className=" text-[32px] text-white">Anasayfa</span>
        </button>
      )}
      {isLogout && (
        <button onClick={() => navigate('/')} className="flex flex-col items-center gap-2">
          <LogoutIcon size={72} />
          <span className=" text-[32px] text-white">Çıkış</span>
        </button>
      )}
    </div>
  )
}

export default NavigationButtons

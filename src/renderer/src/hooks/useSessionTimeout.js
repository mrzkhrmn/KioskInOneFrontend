import { useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearUser } from '../redux/slices/userSlice'

const SESSION_TIMEOUT = 60 * 1000

const useSessionTimeout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)
  const timeoutRef = useRef(null)
  const userRef = useRef(user)

  useEffect(() => {
    userRef.current = user
  }, [user])

  const resetTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (userRef.current) {
      timeoutRef.current = setTimeout(() => {
        dispatch(clearUser())
        navigate('/')
      }, SESSION_TIMEOUT)
    }
  }, [dispatch, navigate])

  useEffect(() => {
    if (!user) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
      return
    }

    resetTimer()

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click']

    const handleUserActivity = () => {
      if (userRef.current) {
        resetTimer()
      }
    }

    events.forEach((event) => {
      document.addEventListener(event, handleUserActivity, true)
    })

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      events.forEach((event) => {
        document.removeEventListener(event, handleUserActivity, true)
      })
    }
  }, [user, resetTimer])
}

export default useSessionTimeout

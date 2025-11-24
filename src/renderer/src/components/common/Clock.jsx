import { useEffect, useState } from 'react'

const Clock = () => {
  const [currentDate, setCurrentDate] = useState('')
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()

      const date = now.toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })

      const time = now.toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })

      setCurrentDate(date)
      setCurrentTime(time)
    }
    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex-1">
      <div style={{ fontWeight: 700 }} className="text-end text-white text-2xl leading-5">
        {currentDate}
      </div>
      <div style={{ fontWeight: 700 }} className="text-end text-white text-2xl">
        {currentTime}
      </div>
    </div>
  )
}

export default Clock


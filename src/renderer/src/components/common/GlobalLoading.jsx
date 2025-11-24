import { useSelector } from 'react-redux'

const GlobalLoading = () => {
  const isLoading = useSelector((state) => state.app.isLoading)

  if (!isLoading) return null

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-[9999]"
      style={{ pointerEvents: 'all' }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

export default GlobalLoading

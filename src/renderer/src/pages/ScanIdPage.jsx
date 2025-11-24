import { useSearchParams, useNavigate } from 'react-router-dom'
import ScanDocument from '../components/ScanId/ScanDocument'

const ScanIdPage = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const idType = parseInt(searchParams.get('idType'), 10)

  if (!idType || (idType !== 2 && idType !== 3)) {
    navigate('/verify-id-or-passport')
    return null
  }

  return <ScanDocument idType={idType} />
}

export default ScanIdPage

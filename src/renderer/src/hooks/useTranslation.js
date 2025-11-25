import { useSelector } from 'react-redux'

const useTranslation = (translations) => {
  const selectedLanguage = useSelector((state) => state.app.selectedLanguage)

  const getTranslations = () => {
    const langCode = selectedLanguage?.code || 'tr'
    return translations[langCode] || translations.tr || {}
  }

  const translate = (key, params = {}) => {
    const t = getTranslations()
    const keys = key.split('.')
    let value = t
    for (const k of keys) {
      value = value?.[k]
    }
    if (typeof value === 'string' && params) {
      return value.replace(/\{(\w+)\}/g, (match, key) => params[key] || match)
    }
    return value || key
  }

  return translate
}

export default useTranslation

import { useSelector } from 'react-redux'
import { useTranslation as useI18nextTranslation } from 'react-i18next'
import { useEffect } from 'react'

const useTranslation = (translationsOrNamespace) => {
  const selectedLanguage = useSelector((state) => state.app.selectedLanguage)
  const { t: i18nT, i18n: i18nInstance } = useI18nextTranslation()

  useEffect(() => {
    if (selectedLanguage?.code) {
      i18nInstance.changeLanguage(selectedLanguage.code)
    }
  }, [selectedLanguage?.code, i18nInstance])

  const getNamespace = () => {
    if (typeof translationsOrNamespace === 'string') {
      return translationsOrNamespace
    }

    if (
      translationsOrNamespace &&
      typeof translationsOrNamespace === 'object' &&
      translationsOrNamespace.namespace
    ) {
      return translationsOrNamespace.namespace
    }

    if (translationsOrNamespace && typeof translationsOrNamespace === 'object') {
      if (translationsOrNamespace.namespace) {
        return translationsOrNamespace.namespace
      }
      return 'common'
    }

    return 'common'
  }

  const translate = (key, params = {}) => {
    const namespace = getNamespace()

    return i18nT(key, { ns: namespace, ...params })
  }

  return translate
}

export default useTranslation

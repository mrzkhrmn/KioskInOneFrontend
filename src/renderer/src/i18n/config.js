import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonTr from '../locales/tr/common.json'
import commonEn from '../locales/en/common.json'
import homeTr from '../locales/tr/home.json'
import homeEn from '../locales/en/home.json'
import appointmentTr from '../locales/tr/appointment.json'
import appointmentEn from '../locales/en/appointment.json'
import appointmentAcceptTr from '../locales/tr/appointmentAccept.json'
import appointmentAcceptEn from '../locales/en/appointmentAccept.json'
import insuranceSelectionTr from '../locales/tr/insuranceSelection.json'
import insuranceSelectionEn from '../locales/en/insuranceSelection.json'
import newAppointmentTr from '../locales/tr/newAppointment.json'
import newAppointmentEn from '../locales/en/newAppointment.json'
import newPatientRegistrationTr from '../locales/tr/newPatientRegistration.json'
import newPatientRegistrationEn from '../locales/en/newPatientRegistration.json'
import otpVerificationTr from '../locales/tr/otpVerification.json'
import otpVerificationEn from '../locales/en/otpVerification.json'
import scanIdTr from '../locales/tr/scanId.json'
import scanIdEn from '../locales/en/scanId.json'
import verifyIdOrPassportTr from '../locales/tr/verifyIdOrPassport.json'
import verifyIdOrPassportEn from '../locales/en/verifyIdOrPassport.json'

const resources = {
  tr: {
    common: commonTr,
    home: homeTr,
    appointment: appointmentTr,
    appointmentAccept: appointmentAcceptTr,
    insuranceSelection: insuranceSelectionTr,
    newAppointment: newAppointmentTr,
    newPatientRegistration: newPatientRegistrationTr,
    otpVerification: otpVerificationTr,
    scanId: scanIdTr,
    verifyIdOrPassport: verifyIdOrPassportTr
  },
  en: {
    common: commonEn,
    home: homeEn,
    appointment: appointmentEn,
    appointmentAccept: appointmentAcceptEn,
    insuranceSelection: insuranceSelectionEn,
    newAppointment: newAppointmentEn,
    newPatientRegistration: newPatientRegistrationEn,
    otpVerification: otpVerificationEn,
    scanId: scanIdEn,
    verifyIdOrPassport: verifyIdOrPassportEn
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'tr',
  fallbackLng: 'tr',
  interpolation: {
    escapeValue: false,
    prefix: '{',
    suffix: '}'
  },
  defaultNS: 'common',
  ns: [
    'common',
    'home',
    'appointment',
    'appointmentAccept',
    'insuranceSelection',
    'newAppointment',
    'newPatientRegistration',
    'otpVerification',
    'scanId',
    'verifyIdOrPassport'
  ]
})

export default i18n

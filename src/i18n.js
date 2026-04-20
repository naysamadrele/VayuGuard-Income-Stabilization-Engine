import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Dashboard": "Dashboard",
      "Policy": "Policy",
      "Claims": "Claims",
      "Risk": "Risk",
      "Fraud": "Fraud",
      // Add more translations here
    }
  },
  hi: {
    translation: {
      "Dashboard": "डैशबोर्ड",
      "Policy": "पॉलिसी",
      "Claims": "दावे",
      "Risk": "जोखिम",
      "Fraud": "धोखाधड़ी",
      // Add more translations here
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_EN } from "./translations/en/translations";
import { TRANSLATIONS_ES } from "./translations/es/translations";
import { TRANSLATIONS_FR } from "./translations/fr/translations";

const resources = {
  en: {
    translation: TRANSLATIONS_EN
    },
  es: {
    translation: TRANSLATIONS_ES
  },
    fr: {
    translation: TRANSLATIONS_FR
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: false,
    lng: "en",
    supportedLngs: ["en","es", "fr"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
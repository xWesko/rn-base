import i18next from 'i18next';
const changeLanguage = (lang) => {
    i18next.changeLanguage(lang);
};
const toggleLanguage = () => {
    i18next.changeLanguage(i18next.language === "en-EN" /* SupportedLanguages.EN_EN */
        ? "fr-FR" /* SupportedLanguages.FR_FR */
        : "en-EN" /* SupportedLanguages.EN_EN */);
};
export const useI18n = () => {
    return { changeLanguage, toggleLanguage };
};

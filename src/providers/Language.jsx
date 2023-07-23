import { createContext, useContext, useState } from "react";
import { languageOptions, dictionaryList } from "../languages";

export const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionaryList.en,
});

export function LanguageProvider({ children }) {
  const defaultLanguage = window.localStorage.getItem("lang");
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || "en");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "en";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("lang", newLanguage);
    },
  };

  return <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>;
}

export function TextLocale({ tid }) {
  const languageContext = useContext(LanguageContext);
  return languageContext.dictionary[tid] || tid;
}
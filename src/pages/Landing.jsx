import { useNavigate } from "react-router-dom";

import { languageOptions } from "../languages";
import { LanguageContext, TextLocale } from "../providers/Language";
import { useContext } from "react";

export default function Landing() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);
  const Navigate = useNavigate();
  return (
    <>
      <p>Ini Landing Page</p>
      <button onClick={() => Navigate("/battle")}>Battle</button>
      <div className="container bg-slate-500 text-black mx-auto text-center p-5">
        <p>Current Language is : English</p>
        <p>
          <TextLocale tid={"landingText"} />
        </p>
        <select onChange={handleLanguageChange} value={userLanguage}>
          {Object.entries(languageOptions).map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

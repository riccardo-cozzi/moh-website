import './App.css';

import { useEffect, useState } from 'react';
import { LanguageContext } from './multilang/LanguageContext';
import { Languages } from './multilang/Languages';
import { FloatingLanguageSelector } from './components/LanguageSelectors';
import HomePage from './pages/HomePage';
import { WorkinProgress } from './pages/WorkInProgress';

function App() {
  console.log("language stored: ", sessionStorage.getItem("language_id") ? "set to " + sessionStorage.getItem("language_id") : "not set")
  const [currentLanguage, setCurrentLanguage] = useState(Languages.ENG)

  useEffect(() => {
    if (!currentLanguage) {
      console.log("Setting new language in local storage: ", currentLanguage)
      sessionStorage.setItem("language_id", Languages.ENG)
    }
  }, [currentLanguage])
  
  return (
    
    <>
    <LanguageContext.Provider value={[currentLanguage, setCurrentLanguage]}>
        <HomePage />
        <FloatingLanguageSelector />
        {/* -------------- ciao Ric del futuro -> DECOMMENTA QUESTO PER PASSARE ALLA PAGINA DA CUI LINKARE I FILE DI MERDA ------------------- */}
        {/* <WorkinProgress /> */}
    </LanguageContext.Provider>
    </>
  );
}

export default App;
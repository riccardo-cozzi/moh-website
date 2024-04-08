import './App.css';

import { useState } from 'react';
import { LanguageContext } from './multilang/LanguageContext';
import { Languages } from './multilang/Languages';
import { FloatingLanguageSelector } from './components/LanguageSelectors';
import HomePage from './pages/HomePage';
import { WorkinProgress } from './pages/WorkInProgress';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(Languages.ENG)

  return (
    
    <>
    <LanguageContext.Provider value={[currentLanguage, setCurrentLanguage]}>
        {/* <HomePage />
        <FloatingLanguageSelector /> */}
        <WorkinProgress />
    </LanguageContext.Provider>
    </>
  );
}

export default App;
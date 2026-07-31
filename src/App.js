import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import config from './config.json';
import { LanguageContext } from './multilang/LanguageContext';
import { Languages } from './multilang/Languages';
import { FloatingLanguageSelector } from './components/LanguageSelectors';
import HomePage from './pages/HomePage';
import { DownloadPage } from './pages/DownloadPage';
import { GradientSvgDef } from './styles';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(Languages.ENG)

  useEffect(() => {
    if (!currentLanguage) {
      sessionStorage.setItem("language_id", Languages.ENG)
    }
  }, [currentLanguage])

  return (
    <BrowserRouter>
      <GradientSvgDef />
      <Routes>
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/*" element={
          <LanguageContext.Provider value={[currentLanguage, setCurrentLanguage]}>
            <HomePage />
            <FloatingLanguageSelector />
          </LanguageContext.Provider>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import TranslateIcon from '@mui/icons-material/Translate';
import { LanguageContext } from '../multilang/LanguageContext';
import { Languages } from '../multilang/Languages';


const FABStyle = {
  margin: 0,
  top: 20,
  right: 20,
  bottom: 'auto',
  left: 'auto',
  position: 'fixed',
}

const background_selected = "#0aa"
const background_unselected = "#fff"


export const FloatingLanguageSelector = () => {

  const [language, setLanguage] = React.useContext(LanguageContext)
  const allLanguages = Languages.all()


  const handleChangeLanguage = (targetLanguageId) => {
    if (language.id !== targetLanguageId) {
        let newLanguage = allLanguages.filter(language => language.id === targetLanguageId)[0]
        setLanguage(newLanguage)
        console.log("language changed to ", newLanguage)
    }
}

  return (
    <Box style={FABStyle} sx={{transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={<TranslateIcon />}
        direction={"down"}
        FabProps={{sx: { 
          color:"black",
          background:"white",
          ":hover": {
            background:"#ddd",
          }
        }}}
      >
        {
          Object.keys(allLanguages).map((languageKey) => {
            let isSelected = allLanguages[languageKey].id === language.id
            return (
              <SpeedDialAction
                sx={{
                  color: "black", background: isSelected ? background_selected : background_unselected
                }}
                
                key={allLanguages[languageKey].id}
                icon={allLanguages[languageKey].flag}
                tooltipTitle={allLanguages[languageKey].label}
                onClick={() => handleChangeLanguage(allLanguages[languageKey].id)}
              />
            )})
        }
      </SpeedDial>
    </Box>
  );
}

import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const ThemeContext = createContext();

function App(){

  const [theme, setTheme] = useState('light');
  const [btnColor, setBtnColor] = useState('black');

  const themeToogle = () =>{
    if(theme === 'light'){
      setTheme('dark');
      setBtnColor('white')
      document.body.style.background = 'black';
    }else{
      setTheme('light');
      setBtnColor('black')
      document.body.style.background = 'white'
    }
  }

  return(
    <ThemeContext.Provider value={theme}>
        <div className='btn-div'>
            <button style={{color: btnColor}} onClick={themeToogle}>{theme === 'light'? 'Light.' : 'Dark.'}</button>
        </div>
    </ThemeContext.Provider>
  )
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

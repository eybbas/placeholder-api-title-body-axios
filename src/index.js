import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import userPic from './img/userPic.png'

const ThemeContext = createContext();

function ThemeToggle(){
  const [theme, setTheme] = useState('light');

  const themeToggle = () => {
    setTheme((prev) => (prev === 'light'? 'dark' : 'light'));
  }
  return(
  <ThemeContext.Provider value={theme}>
    <div className='theme-radio-div' style={{backgroundColor: theme === "light" ? "#f4f4f4" : "#1E1E1E" }}>
      <span className='theme-title-span' style={{ color: theme === "dark" ? "white" : "black" }}>Dark Mode: </span>
      <label className='theme-label' htmlFor='themeToggle'>
        <input id='themeToggle' className='theme-radio' type='checkbox' name='themeToggle' onChange={themeToggle}/>
        <span className='theme-slider' />
      </label>
    </div>
    <App />
  </ThemeContext.Provider>
    
  )
}
function App(){
  const theme = useContext(ThemeContext);
  if(theme === 'light'){
    document.body.style.background = '#d6d6d6';
  }else{
    document.body.style.background = '#292929'
  }
  return(
    <div className='user-card-div' style={{backgroundColor: theme === "light" ? "#f4f4f4" : "#1E1E1E" }}>
      <div className='user-pic-div'>
        <img className='user-pic-img' src={userPic}/>
      </div>
      <div className='user-info-div'>
        <span className='user-name-span' style={{ color: theme === "dark" ? "white" : "black" }}>@sxtell</span>
        <span className='user-prof-span' style={{ color: theme === "dark" ? "white" : "black" }}>artist</span>
        <span className='user-followers-span' style={{ color: theme === "dark" ? "white" : "black" }}>12.3M followers</span>
        <button className='user-follow-btn'>follow</button>
      </div>
    </div>
  )
}

const root = document.getElementById("root");
ReactDOM.render(<ThemeToggle />, root);

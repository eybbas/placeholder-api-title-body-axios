import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

//2. Создайте компонент ScrollToTopButton, который будет содержать кнопку "Наверх". 
//При клике на кнопку, страница должна прокручиваться вверх.

function App(props){
  const buttonRef = useRef();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return(
    <div className='container'>
        <button className='scroll-to-top-btn' onClick={scrollToTop} ref={buttonRef}>Scroll To Top</button>
    </div>
  )
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

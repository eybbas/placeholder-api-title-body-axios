import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//2. Реализуйте функциональный компонент с использованием хука useState, который будет отображать текстовое поле и кнопку. 
//При вводе значения в текстовое поле и нажатии на кнопку, значение должно сохраняться в состоянии и отображаться под текстовым полем.

function App(props){
  const textRef = React.createRef()

  let [text, setText] = useState(null)

  const showText = () => {
    setText(textRef.current.value)
  }

  const usersdiv = <div><p>{text}</p></div>

  return(
    <>
    <input type='text' ref={textRef} placeholder='enter text'/>
    <button onClick={showText}>Show Text</button>
    {usersdiv}
    </>
  )

}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
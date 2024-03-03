import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

//3. Создайте компонент PasswordResetForm, который будет содержать поле ввода адреса электронной почты и кнопку "Сбросить пароль". 
//При отправке формы, поле ввода должно очищаться.
function App(props){
  const inputRef = useRef();

  const inputClear = () => {
    inputRef.current.value = ""
  }

  return(
    <div className='container'>
        <input ref={inputRef} type='email' />
        <button onClick={inputClear} >Сбросить пароль</button>
    </div>
  )
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
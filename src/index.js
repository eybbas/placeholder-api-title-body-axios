import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//1. Создайте функциональный компонент с использованием хука useState, который отобразит кнопку и счетчик. 
//При каждом нажатии на кнопку счетчик должен увеличиваться на 1.

function App(props){
  let [number, setNum] = useState(0)

  const numberPlus = (number) => {
    number++
    setNum(number);
  }

  const usersdiv = <div><p>{number}</p></div>

  return(
    <>
    <button onClick={() => numberPlus(number)}>Plus</button>
    {usersdiv}
    </>
  )

}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

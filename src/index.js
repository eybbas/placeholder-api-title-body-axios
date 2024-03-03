import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

//3. Создайте функцию-редуктор с использованием хука useState, которая будет управлять состоянием массива задач. 
//Функция-редуктор должна поддерживать добавление новой задачи, удаление задачи по индексу и изменение статуса выполнения задачи.

function App(props){
  const inputRef = React.createRef()
  const inputTaskRef = React.createRef()
  const inputCheckRef = React.createRef()
  let [toDos, setToDos] = useState([])
  let [toDoStatus, setToDoStatus] = useState(false)
  //const [selectedValue, setSelectedValue] = useState('');

  //const text_decoration = { textDecoration: "line-through" }

  const createTask = () => {
    let toDoName = inputRef.current.value
    setToDos([...toDos, {id: toDos.length + 1, title: toDoName, status: toDoStatus}])
  }
  const deleteToDos = (deleteToDo) => {
    let newToDos = toDos.filter((toDo) => toDo !== deleteToDo)
    setToDos(newToDos);
    //console.log(newTodos);
  }

  const toDoStatusFunc = () => {
    setToDoStatus(!toDoStatus)
  }

  function TasksDiv({toDos}){
    //console.log(toDos);
    return (
      <>
        {toDos.map((task) => (
          <div className='task-div' id={task.id}>
            <input type='checkbox' ref={inputCheckRef} key={"checkbox" + task.id} id={task.id} onChange={toDoStatusFunc}/>
            {console.log(inputCheckRef) }
            <span className={'span' + task.id} ref={inputTaskRef} key={"span" + task.id}>{task.title}</span>
            <button key={"remove" + task.id} onClick ={() => deleteToDos(task)}>Remove</button>
          </div>
        ))}
      </>
    )
  }
  return(
    <div className='main-div'>
      <div className='input-div'>
        <input className='task-text' type='text' ref={inputRef}/>
        <button className='add-task-btn' onClick={createTask}>Plus</button>
      </div>
      <div className='todo-div'>
        <TasksDiv toDos={toDos}/>
      </div>
    </div>
  )

}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

import React, { createContext, useContext, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import userPic from './img/userPic.png'
import userNotLog from './img/userNotLog.png'

const UserContext = createContext();

function UserLogIn(){
  const [user, setUser] = useState([])
  const nameRef = useRef()
  const mailRef = useRef()

  const getUserInfo = () => {
    let name = nameRef.current.value;
    let mail = mailRef.current.value;
    let userInfo = [{name: name, email: mail}];
    setUser(userInfo);
    
    console.log(user.name);
  }
  return(
    <UserContext.Provider value={user}>
      <div className='login-div'>
        <div className='login-title-div'>
          <span className='login-title-span'>Log In:</span>
        </div>
        <div className='username-div'>
          <label className='username-label' htmlFor='username'>Username:</label>
          <input className='username-input' ref={nameRef} type='text' id='username' placeholder='sxtell'/>
        </div>
        <div className='email-div'>
          <label className='email-label' htmlFor='email'>Email:</label>
          <input className='email-input' ref={mailRef} type='email' id='email' placeholder='eybbas@gmail.com'/>
        </div>
        <div className='login-btn-div'>
          <button className='login-btn' onClick={getUserInfo}>Log In</button>
          <button className='signup-btn' onClick={getUserInfo}>Sign Up</button>
        </div>
      </div>
      <UserProfile/>
    </UserContext.Provider>
  )
}
function UserProfile(){
  const user = useContext(UserContext);
  console.log(user);
  return(
    <>
      {user.map((user) =>{
        if(user.name === '' || user.email === ''){
          return(
          <div className='profile-div'>
            <div className='profile-pic-div'>
              <img className='profile-pic-img' src={userNotLog} />
            </div>
            <div className='profile-not-logged-div'>
              <span className='profile-not-logged-span'>User Is Not Logged In</span>
              <span className='profile-not-logged-link-span'>We could not find information about this user. <a className='profile-not-logged-link' src=''>Read more in detail.</a></span>
            </div>
          </div>
          )
        }
        else{
          return(
          <div className='profile-div'>
            <div className='profile-pic-div'>
              <img className='profile-pic-img' src={userPic} />
            </div>
            <div className='profile-info-div'>
              <span className='profile-username-span'>@{user.name}</span>
              <span className='profile-subscribers-span'>12.3M followers</span>
              <span className='profile-email-span'>email: {user.email}</span>
              <button className='profile-moreinfo-btn'>More Information</button>
            </div>
          </div>
          )
        }
          
      })}
    </>
    
  )
}
function App(){
  return(
    <div className='container-div'>
      <UserLogIn/>
    </div>
  )
}
const root = document.getElementById("root");
ReactDOM.render(<App/>, root);

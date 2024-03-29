import {Routes, Route, Link} from 'react-router-dom';
import './App.css'

import { Mainpage } from './pages/Mainpage';
import { Productpage } from './pages/Productpage';
import { Cartpage } from './pages/Cartpage';
import { Checkout } from './pages/Checkout';

function App() {
  return (
    <>
      <header className="App-header">
        <Link className='menu-link' to='/'>Home</Link>
        <Link className='menu-link' to='/cart'>Cart</Link>
        <Link className='menu-link' to='/about'>About Us</Link>
        <Link className='menu-link' to='/contact'>Contact</Link>
      </header>
      <Routes>
        <Route path='/' element={<Mainpage/>} />
        <Route path='/cart' element={<Cartpage/>} />
        <Route path={`/product/:id`} element={<Productpage/>} />
        <Route path={`/check-out`} element={<Checkout/>} />
      </Routes>
    </>
  );
}

export default App;

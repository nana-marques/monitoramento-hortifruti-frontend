import './styles.css'
import Login from "./login"
import Home from "./assets/home/home.jsx"
import Cards from './assets/cards/cards.jsx'
import Navbar from './assets/navbar/index.jsx'

import { Outlet } from 'react-router-dom'


function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <Outlet />
    </div>

  )
}

export default App

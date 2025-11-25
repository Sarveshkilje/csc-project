import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './section/Navbar'
import Hero from './section/Hero'

const App= ()=> {

  return (
    <div className="container mx-auto max-w-7xl">
<Navbar/>
<Hero/>
    </div>
  );
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StaticData from './StaticData';  // Import the StaticData component

const App = () => {
  return (
    <div>
      <h1 id='teste'>Informações do Legiano</h1>
      <StaticData />
    </div>
  )
}

export default App

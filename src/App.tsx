import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import { User } from './types/User' // Import interface

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home')
  const user: User = { name: 'Hakim Ibrahim', age: 20 }; // Interface


  return (
    <div className="app">
      <nav>
        <button onClick={() => setCurrentView('home')}>Home</button>
        <button onClick={() => setCurrentView('about')}>About</button>
      </nav>

      <div className="content">
        {currentView === 'home' && <Home />}
        {currentView === 'about' && <About />}
      </div>
      <div>
        <p>Hello, {user.name}!</p> {/* Use data from the interface */}
      </div>
    </div>
  )
}

export default App
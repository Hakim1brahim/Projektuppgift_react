import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import { User } from './types/User' // Import interface


const greetUser = (user: User): string => {
  return `Hello, ${user.name}! You are ${user.age} years old.`
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home')
  const [theme, setTheme] = useState<'light' | 'dark'>('light') // State för tema


  const user: User = { name: 'Hakim Ibrahim', age: 22 } // Interface


  // Funktion för att byta tema 
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }


  return (
    <div className={`app ${theme}`}>
      <nav>
        <button onClick={() => setCurrentView('home')}>Home</button>
        <button onClick={() => setCurrentView('about')}>About</button>
      </nav>

      <div className="content">
        {currentView === 'home' && <Home />}
        {currentView === 'about' && <About />}
      </div>

      <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button> 
      </div>

      <div>
      <p>{greetUser(user)}</p> 
    </div>
    </div>
    
  )
}

export default App
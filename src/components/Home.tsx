import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <img
        src="https://www.visma.se/blogg/wp-content/uploads/sites/7/2022/01/Viktigaste-tekniktrenderna-2022-enligt-Gartner.jpg"
        alt="Technology Trends"
        className="round-image"
      />

    </div>
  )
}

export default Home
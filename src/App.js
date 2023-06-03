import React, { useState } from 'react'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import FirstSection from './FirstSection';

const App = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  return (
    <div>
      {console.log(typeof setShowHamburger)}
      <Navbar toggle={setShowHamburger} value={showHamburger}></Navbar>
      {showHamburger ? <Hamburger></Hamburger> : ""}

      <FirstSection></FirstSection>

    </div>
  )
}

export default App
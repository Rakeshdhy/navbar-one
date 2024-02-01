import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'

const App = () => {

// step2
  const currentTheme = localStorage.getItem('currentTheme');

  //const [theme, setTheme] = useState('light');
  //step 3
  const [theme, setTheme] = useState(currentTheme ? currentTheme :'light' );

  // step4
  useEffect(()=>{
localStorage.setItem('currentTheme', theme)
  },[theme]);

  return (
    <React.Fragment>
     <div className={`container ${theme}`}>     
    <Navbar theme={theme} setTheme={setTheme} />

    </div>
    </React.Fragment>
  )
}

export default App

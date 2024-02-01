import React from 'react'
import Screen1 from './Components/Screen1'
import Screen2 from './Components/Screen2'

import { Routes, Route, useNavigate } from "react-router-dom";

const Main = () => {
    
  return (
    <Routes> 
       <Route
          path="/"
          element={
          <Screen1/>
          }
        />
      
          <Route
          path="/summary"
          element={
          <Screen2/>
          }
        />
    </Routes>
  )
}

export default Main

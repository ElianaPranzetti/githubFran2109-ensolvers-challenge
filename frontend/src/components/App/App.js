import { useState } from 'react';
import Navbar from '../Header/Header';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './../Login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar 
          isLoggedIn={isLoggedIn}
        />
        <div className="d-flex justify-content-center" style={{marginTop: "30px"}}>
          
            <Routes>
              <Route path="/" exact>
                
              </Route>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register">

              </Route>
            </Routes>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

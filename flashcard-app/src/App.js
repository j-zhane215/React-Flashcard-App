import React, { useState } from 'react'
import './App.css';
import { Login } from "./components/LoginAccount"
import { Register } from "./components/Registration"

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div className="App">
      
      { currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>}

    </div>
  );
}

export default App;
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [userName, setUsername] = useState('');

  useEffect(() => {
    getNames();
  }, [])

  const getNames = async () => {
    const response = await axios.get('/names');
    console.log(response);
    setUsername(response.data);
  }

  return (
    <>
      <h1>My frontend</h1>
      <h3>My name is {userName}</h3>
    </>

  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  async function onClick(){

    try{
      const response = await fetch('http://localhost:8080/api/tasks');
      const data = await response.json();
      console.log(JSON.stringify(data));
    } catch(error){
      console.log("Something went wrong.");
    }
  }

  return(
  <div className = "container">
      <button className = "task" onClick = {onClick}>Get Tasks</button>
  </div>
  );

  //when you call fetch(), the Response object is like a "container" holding metadata and methods to extract the actual data from the server.
}


export default App


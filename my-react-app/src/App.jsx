import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard';

export function SiAddCircleLine(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8 12h8m-4 4V8m10 4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></path></svg>
    )
}

function App() {
  const PORT = 5000;
  async function onClick(){

    try{
      let response = await fetch(`http://localhost:${PORT}/api/tasks`);
      let data = await response.json();
      console.log(JSON.stringify(data));
    } catch(error){
      console.log("Something went wrong.");
    }
  }

  async function addTask(){

    const task = prompt('Add Task...');

    try{
      let response = await fetch(`http://localhost:${PORT}/api/tasks`, {
        method : "POST",
        headers : {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: task})
      });
      let data = await response.json();
      console.log(data); 

      data.map((task) => {
        <div>{task.text}</div>
      })

    } catch(error){
      console.log("Something went wrong.");
    }
  }


  return(
  <div className = "container">
      <button className = "task" onClick = {onClick}>Get Tasks</button>
      <button className = "addTask" onClick = {addTask}>Add Task</button>

      <TaskCard task = "task" category = "HW" priority= "High" status = "good" dueDate = "date" notes = "notes"/>
  </div>);

 
}
export default App


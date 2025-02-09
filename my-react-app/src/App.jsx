import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard';

export function SiAddCircleLine(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8 12h8m-4 4V8m10 4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></path></svg>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "p-4">
        <TaskCard
          title = ""
          description = ""
        />
      </div>
      
    </>
  )
}

export default App

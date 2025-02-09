export default function TaskCard({task, priority, category, dueDate, notes, status}) {
    return (
      <>
         <div className = "taskCard">
          
          <p>{task}</p>
          <p>{category}</p>
          <p>{priority}</p>
          <p>{dueDate}</p>
          <p>{notes}</p>
          <p>{status}</p>

          </div>


      </>
    )
  }


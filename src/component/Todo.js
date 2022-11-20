import React from 'react'

const Todo = ({task,del,comp}) => {
  return (
    <div className={task.isDone?"completed":""}>
        <h1>{task.action} </h1>
        <button onClick={()=>comp()}>{task.isDone?"Undo":"Completed"}</button>
        <button onClick={()=>del()}>Delete </button>
    </div>
  )
}

export default Todo
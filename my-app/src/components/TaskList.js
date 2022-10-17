import TaskCard from './TaskCard'
import { TaskContext } from "../context/TaskContext";
import { useContext } from 'react';

export function TaskList() {
   const {tasks}= useContext(TaskContext)
    if (tasks.length===0){
        return <h1>Nada</h1>
     }
  return (
    <div className="row Grid1">
        {
            tasks.map((task)=>(
               <TaskCard key={task.id} task={task}/>
            ) )
        }
    </div>
  )
}

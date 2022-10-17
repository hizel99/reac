import {useState, useContext} from 'react'
import { TaskContext } from '../context/TaskContext';

export default function Taskform() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {createTask}= useContext(TaskContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(title,description)
        createTask({
            title,
            description
        });
        setTitle('')
        setDescription('')
    }
  return (
    <div className='row  justify-content-center back-form'>
        <form className=' col-4 m-3 form' onSubmit={handleSubmit}>

            <input className='col-12 mb-1' placeholder='Escribe tu tarea' 
            onChange={(e)=>{setTitle(e.target.value)}}
            value={title}
            autoFocus 
            />
            <textarea className='col-12 mb-1'placeholder='Escribe Descripcion'
             onChange={(e)=>setDescription(e.target.value)}
             value={description}             
             ></textarea>
            <button className='btn btn-success'>
                Guardar
                </button></form>
    </div>
  )
}
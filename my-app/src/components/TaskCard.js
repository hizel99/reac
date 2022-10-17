import { TaskContext } from "../context/TaskContext";
import { useState, useEffect, useContext } from "react";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="card Card-Color bg-dark text-white col-3 ">
      <div className="card-body">
        <h3 className="card-title"> {task.title} </h3>
        <p className="card-text"> {task.description}</p>
        <button
          className=" btn btn-danger ButtonDelete"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskCard;

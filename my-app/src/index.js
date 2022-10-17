import React from 'react';
import { TaskList } from './components/TaskList';
import Taskform from './components/Taskform';
import ReactDOM from 'react-dom/client';
import { TaskContextProvider } from './context/TaskContext';
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

 ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TaskContextProvider>
        <Index/> 
        </TaskContextProvider>
         
    </React.StrictMode>
);

export function Index() 
{    
    return(
        <>
    <Taskform/>
     <TaskList/>
    </>
    )
 
}        
 
import { BsFillAlarmFill } from 'react-icons/bs';

export const Posts= ()=>{
return <button onClick={()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())    
    .then(data=>console.log(data))
    .catch(error=>console.error(error))
}}>
    <BsFillAlarmFill/>
    traer datos
</button>
}
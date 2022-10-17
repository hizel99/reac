function Counter(){
    const [mensaje, setMensaje ] = useState()   
    useEffect(function(){
        console.log('render')
    }, [])
    return (  
    <div>
        <input onChange={(e)=>setMensaje(e.target.value)}/>
        <button onClick={()=>{
            alert('El mensaje es:'+ mensaje)
        }}>save</button>
    </div>)
}
const users=[
    {
        id:1,
        name:'Ryan',
        image: 'https://robohash.org/user2'
    },
    {
        id:1,
        name:'Ryan',
        image: 'https://robohash.org/user2'
    }
]

const handleChange= (e)=>{
    console.log(e.target.value)
}

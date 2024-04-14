import axios from "axios";
import { useEffect, useState } from "react"


function App() {

  const [id, setId ] = useState(1);

  
  

  return (

    <div style={{marginLeft: "600px", marginTop: "50px"}}>

      <button onClick={function(){

        if(id>1){

          setId(id-1);
        }

        
      }}
      
      style={{cursor: "pointer", padding: "10px", marginLeft:"20px", border: "5px solid red", color: "white", fontSize: "20px", background: "black"}}>Previous</button>

      

      <button onClick={function(){

        setId(id+1);


      }} style={{cursor: "pointer", padding: "10px", marginLeft: "20px", border: "5px solid red", color: "white", fontSize: "20px", background: "black"}}>Next</button>

      <FetchTodo id={id}></FetchTodo>
    </div>
   
  )
}

function FetchTodo({id}){

  const [todos, setTodos] =useState([]);

  useEffect(()=>{

    axios.get("https://sum-server.100xdevs.com/todo?id="+id)

  .then(function(response){

    setTodos(response.data.todo)
  })

  }, [id])
  return <div>

    <RenderTodo todos={todos}></RenderTodo>
  </div>
}


function RenderTodo({todos}){

  return <div style={{marginLeft: "50px", marginTop: "70px", marginRight: "720px"}}>

    <h1 style={{fontWeight: "1000px", fontSize: "50px", border: "2px solid black", borderRadius:"10px", color: "gray"}}><em>{todos.title}</em></h1>

    <h4 style={{fontSize: "25px", color: "red", marginLeft: "5px"}}><i>{todos.description}</i></h4>
  </div>


}
export default App

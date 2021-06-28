import React,{useState,useEffect} from 'react';
import './App.css';
import { Button,Card } from 'react-bootstrap';
import { db } from './firebase-config';
import { TextField } from '@material-ui/core'
import TodoListItems from './ListItems';

function App() {
  const[todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("")

  useEffect(() => {
    getTodos();
  }, [])

  function getTodos() {
db.collection("todos").onSnapshot(function(querySnapshot){
    
     let data=[];
     querySnapshot.docs.map((doc) =>{
       data.push({...doc.data(), id : doc.id})
     })
      setTodos(data);
      }
        
      )

  }

  function addTodo(e) {
     e.preventDefault();

     db.collection("todos").add({
       inprogress: true,
       timestamp: Date.now(),
       todo:todoInput,
       
     })
     setTodoInput("");
  }

 
  return (
    <div>
       <div  style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'20px'}}>

           <Card style={{ width: '40vh' ,boxShadow:'2px 3px 4px ',borderRadius:'5%'}}>

       <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>

           <i class="fas fa-sticky-note fa-2x todo-icon">  <b className="todo-icon-text" style={{color:'#96ceeb'}}>Todo</b>  </i>
    
           <TextField id="standard-basic" label="Type....." style={{width :"300px"}} 

             value={todoInput} onChange={(e)=>setTodoInput(e.target.value)}/>
             </div>
 
       <Card.Body>
            <Card.Title><b style={{marginLeft:'10px',color:'gray'}}>Notes...</b></Card.Title>
                <Card.Text value={todoInput}>
              
              
                {todos.map((todo) => {
                   return <TodoListItems
                   todo={todo.todo}
                   inprogress={todo.inprogress}
                   id={todo.id} />
        })}
                

                </Card.Text>
            <Button  type="Submit" onClick={addTodo} className="plusbtn"><i class="fa fa-plus"></i></Button>
        </Card.Body>
      </Card>
        
  </div>
    </div>
  );
}

export default App;

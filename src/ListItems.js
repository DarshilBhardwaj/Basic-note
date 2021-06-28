import React from 'react'
import { ListItem,ListItemText,Button } from '@material-ui/core'
import { db } from './firebase-config'

export default function TodoListItems({todo,inprogress,id}) {

       function toggleInProgress(id){
           db.collection("todos").doc(id).update({
               inprogress: !inprogress,
           })
       }

       function deleteTodo(){
           db.collection("todos").doc(id).delete();
       }

     return(
        <div style={{display:'flex'}}>
            <ListItem>
               <ListItemText primary={todo} secondary={inprogress ? "In progress":"Completed"}/>
            </ListItem>

            <Button onClick={() => toggleInProgress(id)} style={{backgroundColor:'#96ceeb',height:'50px',marginTop:'9px'}}>
                <b>{inprogress ? "Done":"UnDone"}</b></Button>
            <Button onClick={() => deleteTodo(id)} style={{backgroundColor:'#faa89b',height:'50px',marginTop:'9px'}}>
                <i class="fas fa-times fa-lg"></i></Button>
           

        </div>
    )
}
import React, {useState} from 'react'
import Todoform from './Todoform';
import{RiCloseCircleLine} from 'react-icons/ri';
import{RiEdit2Fill} from 'react-icons/ri';

function Todo({todos, completeTodo, removeTodo, uptadeTodo}) {
    const[edit, setEdit]= useState({

        id: null,
        value: ''
    });

    const submitUpdate = value => {

        uptadeTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id){
        return <Todoform edit={edit} onSubmit={submitUpdate}/>
    }

  return todos.map((todo, index) => (

     <div className={todo.isComplete ? 'todo-row complete': 'todo-row'} key={index}>
         <div key= {todo.id} onClick ={() => completeTodo(todo.id)}> {todo.text}</div>
         <div className='icon'> 
         <RiCloseCircleLine
         onClick={() => removeTodo(todo.id)}
         className='delete-icon'/> 

         <RiEdit2Fill
         onClick={() => setEdit({id: todo.id, value: todo.text})}
         className='edit-icon'/>
          </div>
        
    </div>
  ));


}

export default Todo;
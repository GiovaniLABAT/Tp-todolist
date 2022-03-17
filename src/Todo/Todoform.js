import React, {useState} from 'react';

function Todoform(props) {
const [input, setInput] = useState('');
const handleChange = e =>{
    setInput(e.target.value);
}

const handleSubmit = e => {

    e.preventDefault();

    props.onSubmit({

        id: Math.floor(Math.random() * 10000),
        text: input

    });
    setInput('');
    
};

  return (
    <form className='container py-5 h-100' onSubmit={handleSubmit}>
        

        <input type='text' placeholder='Ecrire tache' value={input} name='text' className='todo-input' onChange={handleChange} />
        <button className='todo-input'>Ajouter todo</button>

    </form>
  )
}

export default Todoform;
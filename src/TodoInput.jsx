import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function Todo_input(){
    const [todo,setTodo] = useState();
    const [priority,setPriority] = useState();

    function handleTextChange(e){
        setTodo(e.target.value);
    }
    function handlePriorityChange(e){
        setPriority(e.target.value);
    }
    function addTodo(){
        priority;
        //add the todo along with the priority to the database
    }
    return (
        <>
            <InputGroup className='todo-input'>
                <Form.Control 
                    className='text-input'
                    placeholder='Task'
                    onChange={handleTextChange}
                    value={todo}
                />
                <Form.Select className='priority-select' onChange={handlePriorityChange}>
                    <option>Priority</option>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
                </Form.Select>
                <Button className='btn' variant='dark' onClick={addTodo}>
                    Add
                </Button>
            
            </InputGroup>
        
        
        </>
    )

}

export default Todo_input;
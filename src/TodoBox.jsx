import TodoInput from "./TodoInput";
import Task from "./Task";
function TodoBox(){
    return(
        <div className="todo-box">
            <h1>Todo</h1>
            <TodoInput></TodoInput>
            <Task/>

        </div>


    );

}

export default TodoBox;
import  Button  from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function Task(){
    //code for done and deletion etc
    

    return(
        <div className="todo">
            <Button variant="dark" className="btn done-btn">
                <FontAwesomeIcon icon={faCheck} />
            </Button>
            <p>Sample Task</p>
            <Button variant="dark" className="btn delete-btn">
                <FontAwesomeIcon icon={faTimes} />
            </Button>
        </div>
    );
}

export default Task;
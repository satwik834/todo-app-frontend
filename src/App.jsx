import TodoBox from "./TodoBox";
import NavBar from "./NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Route , Routes} from 'react-router-dom';



function App(){
    return(
      <>
            <header><NavBar></NavBar></header>
            <Routes>
              <Route path="/" element={<TodoBox/>} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
            </Routes>
      </>

    );
}

export default App; 

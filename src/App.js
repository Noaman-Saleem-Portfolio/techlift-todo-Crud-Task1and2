import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import PaginatedTodos from './components/PaginatedTodos';
 

function App(){
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        <Route path='/paginated-todos' element={<PaginatedTodos></PaginatedTodos>}></Route>
      </Routes>
    </>
  );
}

export default App;

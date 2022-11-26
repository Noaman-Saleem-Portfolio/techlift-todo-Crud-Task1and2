import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css



import '../index.css'

const Home = () => {
    const [todos,setTodos]=useState([])
    const [isUpdated, setIsUpdated] = useState(false)

    useEffect(()=>{
        // /WITH ASYNC/AWAIT
        const fetchPosts = async () =>{
        let response = await axios.get('https://bootcamp.todo.arhamsoft.org/client/todo/list?userId=6332681')
        // console.log(response.data.todos);
        setTodos(response.data.todos)
    }
        fetchPosts();
    }, [isUpdated])

    

    const navigate = useNavigate()
    const navigateToPaginatedTodos = (route) => navigate(route)
    const navigateToCreateRoute = (route) => navigate(route)
    const navigateToEditRoute = (route) => navigate(route)
    // const navigateToHomeRoute = (route) => navigate(route)

    const deleteTodo =async (id) => {
        try {
            

            await axios.delete(`https://bootcamp.todo.arhamsoft.org/client/todo/delete/${id}`)

            setIsUpdated(!isUpdated)
            // navigateToHomeRoute('/')
            
        } catch (error) {
            console.log(`Oh No Error`);
            console.log(error);
        }

    }
    
    

    //Dialog Box
    //Dialog Box
    const submit = (id) => {
        confirmAlert({
          title: 'Confirm to submit',
          message: 'Are you sure to Delete this Todo from the list.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => deleteTodo(id)
            },
            {
              label: 'No',
              onClick: () => alert('Click No')
            }
          ]
        });
      };

  return (
    <div>
        <button onClick={() => navigateToPaginatedTodos('/paginated-todos')}>Paginated Todo List View</button>
        <button onClick={()=>navigateToCreateRoute('/create')}>Create a Todo</button>


        <h1>Table of Todos</h1>

        

        <table className='todo-table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((todo,index) => {
                        return (
                            <tr key={index}>
                                <td>{todo.title}</td>
                                <td>{todo.desc}</td>
                                <td>
                                    <button  onClick={() => navigateToEditRoute(`/edit/${todo._id}`)}>Edit Todo</button>
                                    <button onClick={() => submit(todo._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home
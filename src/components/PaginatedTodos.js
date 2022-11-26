import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PaginatedTodos = () => {
    const [todos,setTodos] = useState([])
    const [page,setPage] = useState(1)


    const handleClick = (p) => {
        // console.log(p);
        setPage(p)
    }


    useEffect(() => {
        const fetchPosts = async () => {
        const response = await axios.get(`https://bootcamp.todo.arhamsoft.org/client/todo/pagination?userId=6332681&page=${page}&limit=5`)

        console.log(response.data.data.todos)
        setTodos(response.data.data.todos)


        }
        fetchPosts()
    },[page])


    const navigate = useNavigate()
    const navigateToCreateRoute = (route) => navigate(route)

  return (
    <div>
        
        <button onClick={()=>navigateToCreateRoute('/create')}>Create a Todo</button>


        <h1>Table of Todos</h1>

        

        <table className='todo-table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((todo,index) => {
                        return (
                            <tr key={index}>
                                <td>{todo.title}</td>
                                <td>{todo.desc}</td>
                                
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <h3>Page Number</h3>
        <button onClick={()=>handleClick(1)}>1</button> {''}
        <button onClick={()=>handleClick(2)}>2</button>

    </div>
  )
}

export default PaginatedTodos
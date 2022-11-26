import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'



const Edit = () => {

    const [todo,setTodo] = useState({})
    const params = useParams();

    const navigate = useNavigate()
    const navigateToRoute = (route) => navigate(route)
    
    useEffect(() => {
        const fetchPosts = async () => {
            // console.log(params.id);
            const response = await axios.get(`https://bootcamp.todo.arhamsoft.org/client/todo/get/${params.id}`)
            // console.log(response.data.todo);
            setTodo(response.data.todo)
        }
        fetchPosts()
    },[])


    const handleSubmit = async (e,id) => {
        e.preventDefault()
        // console.log(todo);
        
        await axios.put(`https://bootcamp.todo.arhamsoft.org/client/todo/edit/${todo._id}`,
        {userId:todo.userId, title: todo.title, desc : todo.desc})


        navigateToRoute('/')
    }

  return (
    <div>
    <form onSubmit={(e) => handleSubmit(e,todo._id)}>
            <input name='userId' readOnly value={todo.userId} required></input>
            <br></br>
            <br></br>
            <input onChange={(e) => setTodo({...todo, [e.target.name]: e.target.value})} name='title' placeholder='Enter Title of Todo' required value={todo.title}></input>
            <br></br>
            <br></br>
            <input onChange={(e) => setTodo({...todo, [e.target.name] : e.target.value})} name='desc' placeholder='Enter Description' value={todo.desc}></input>
            <br></br>
            <br></br>
            <button >Edit</button>
        </form>
    </div>
  )
}

export default Edit
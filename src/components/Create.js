import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Create = () => {
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [userId,setUserId] = useState(6332681)



    const navigate = useNavigate()
    const navigateToRoute = (route) => navigate(route)

    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.post('https://bootcamp.todo.arhamsoft.org/client/todo/create',
        {userId:userId, title: title, desc : desc})

        // console.log(response);

        navigateToRoute('/')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTitle(e.target.value)} style={{backgroundColor : 'rgba(0,0,0,0.5)'}} name='userId' readOnly value={userId} required></input>
            <br></br>
            <br></br>
            <input onChange={(e) => setTitle(e.target.value)} name='title' placeholder='Enter Title of Todo' required value={title}></input>
            <br></br>
            <br></br>
            <input onChange={(e) => setDesc(e.target.value)} name='desc' placeholder='Enter Description' value={desc}></input>
            <br></br>
            <br></br>
            <button >Create</button>
        </form>
    </div>
  )
}

export default Create
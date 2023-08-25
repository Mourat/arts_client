import React, {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"


const Add = () => {
    const [art, setArt] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setArt(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/arts`, art)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="form">
            <h1>Add new Art</h1>
            <input type="text" name="title" onChange={handleChange} placeholder="Title"/>
            <textarea name="desc" rows={5} onChange={handleChange} placeholder="Description"/>
            <input type="number" name="price" onChange={handleChange} placeholder="Price"/>
            <input type="text" name="cover" placeholder="Cover picture URL with http" onChange={handleChange}/>
            <button type="submit" className="formButton" onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add
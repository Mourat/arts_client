import React, {useEffect, useState} from "react"
import axios from "axios"
import {Link, useLocation, useNavigate} from "react-router-dom"


const Update = () => {
    const [art, setArt] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    })

    const [error,setError] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const artId = location.pathname.split("/")[2]

    useEffect(() => {
        const fetchArtById = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/arts/${artId}`)
                setArt(res.data[0])
            } catch (err) {
                console.log(err)
            }
        }
        fetchArtById()
    }, [artId]);


    const handleChange = (e) => {
        setArt((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`${process.env.REACT_APP_BACKEND_URL}/arts/${artId}`, art)
            navigate("/")
        } catch (err) {
            console.log(err)
            setError(true)
        }
    }

    return (
        <div className="form">
            <h1>Update Art</h1>
            <input type="text" name="title" onChange={handleChange} placeholder="Title" value={art.title}/>
            <textarea name="desc" rows={5} onChange={handleChange} placeholder="Description" value={art.desc}/>
            <input type="number" name="price" onChange={handleChange} placeholder="Price" value={art.price}/>
            <input type="text" name="cover" placeholder="Cover picture URL with http" onChange={handleChange} value={art.cover}/>
            <button className="formButton" onClick={handleClick}>Update</button>
            {error && "Something went wrong!"}
            <Link to="/">See gallery</Link>
        </div>
    )
}

export default Update
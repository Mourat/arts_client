import React, {useEffect, useState} from "react"
import axios from "axios";
import {Link} from "react-router-dom";

const Arts = () => {
    const [arts, setArts] = useState([])

    useEffect(() => {
        const fetchAllArts = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/arts`)
                setArts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllArts()
    }, []);

    const handleDelete = async (id) => {
        try{
            await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/arts/${id}`)
            window.location.reload()
        } catch (err){
            console.log(err)
        }
    }

    return (
        <div>
            <h1 className="">Arts gallery</h1>
            <div className="arts">
                {arts.map(art => (
                    <div className="art" key={art.id}>
                        {art.cover && <img src={`${art.cover}?random=${Math.random()}&grayscale`} alt=""/>}
                        <h2 className="">{art.title}</h2>
                        <p className="">{art.desc}</p>
                        <span className="">{art.price}&nbsp;{process.env.REACT_APP_CURRENCY}</span>
                        <Link className="delete" onClick={() => handleDelete(art.id)}>Delete</Link>
                        <Link className="update" to={`/update/${art.id}`}>Update</Link>

                    </div>
                ))}
            </div>
            <Link className="btn btn-primary mt-4" to="/add">Add new Art</Link>
        </div>
    )
}

export default Arts
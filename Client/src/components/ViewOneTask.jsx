import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import style from "./style.css"


export function ViewOneTask () {
    const [thisProject, setThisProject] = useState({});
    const { id } = useParams();
    const [thisTask, setThisTask] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    console.log(id);
    const history = useHistory();

    useEffect(() => {
            fetch("http://localhost:8000/api/task/" + id, {
                method: 'GET',
                headers: {
                    "x-access-token" : localStorage.getItem("token")
                }
            })
            .then(res => res.json())
            .then(data => {setIsLoaded(true); setThisTask(data);})
        }, [])

    function handleTaskDelete() {
        fetch("http://localhost:8000/api/task/" + id, {
                method: 'DELETE',
                headers: {
                    "x-access-token" : localStorage.getItem("token")
                }
            })
            //Todo: push to projectid
            .then(a => history.push(`/profile`));
            
            
    }

    return (
        <>
            <div className='topbar'>
                <h1>Task Manager</h1>
                <div className='topRight'>
                    <button><Link to="/">Home</Link></button>
                    <button>
                        <Link to="/">Log Out</Link>
                    </button>

                </div>
            </div>
            <div className="MidControl">
                <div className='welcome'>
                    <h2>Welcome, userName or first name</h2>

                </div>
            </div>

            <div className='mainDisplay'>
                <br />
                <h2>View This Task</h2><br />
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Task Name:</td>
                                <td>{thisTask.taskName}</td>
                            </tr>
                            <tr>
                                <td>Description:</td>
                                <td>{thisTask.description}</td>
                            </tr>
                            <tr>
                                <td>Is this complete:</td>
                                <td>{JSON.stringify(thisTask.isComplete)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='edit-delete'>
                <button className='edit-btn'><Link to={"/task/update/" + id } className='bLink'>Edit</Link></button><button onClick={handleTaskDelete}>Delete</button>
            </div>
        </>
    )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import style from "./style.css"


const Detail = (props) => {
    const [thisProject, setThisProject] = useState({});
    const { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    console.log(id);

    useEffect(() => {
            fetch("http://localhost:8000/api/projects/" + id, {
                method: 'GET',
                headers: {
                    "x-access-token" : localStorage.getItem("token")
                }
            })
            .then(res => res.json())
            .then(data => {setIsLoaded(true); setThisProject(data);})
        }, [])

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
                <h2>View One</h2><br />
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Project Name:</td>
                                <td>{thisProject.projectName}</td>
                            </tr>
                            <tr>
                                <td>Description:</td>
                                <td>{thisProject.description}</td>
                            </tr>
                            <tr>
                                <td>Priority:</td>
                                <td>{thisProject.priority}</td>
                            </tr>
                            <tr>
                                <td>Due Date:</td>
                                <td>{thisProject.dueDate}</td>
                            </tr>
                            <tr>
                                <td>Team Members:</td>
                                <td>{thisProject.teammates}</td>
                            </tr>
                            <tr>
                                <td>Invite a friend:</td>
                                <td>
                                    <input type="text" />    <button>send</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className='task-control'> */}

                {/* <div className='task-list'> */}
                    {
                        // tasks.map((task, idx) => {
                        //     return (
                        //         <div className='taskCard' key={task._id} >
                        //             <img className='taskImg' src={task.url} alt={task.name} />
                        //             <h5>
                        //                 <Link to={"/tasks/" + task._id} className='bLink'>{task.name}</Link>
                        //             </h5>
                        //         </div>
                        //     )
                        // })
                    }
                    {/* <a href="/">Task1</a>
                    <a href="/">Task2</a>

                </div>
                <div className='add-task'>
                    <button>Add Task</button>
                </div>
            </div>
            <div className='edit-delete'>
                <button className='edit-btn'><Link to={"/projects/update/" + project._id } className='bLink'>Edit</Link></button><button>Delete</button>
            </div> */}
        </>
    )
}

export default Detail;


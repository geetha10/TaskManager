import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import style from "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

const Detail = (props) => {
    const [project, setProject] = useState({});
    const [tasks, setTasks] = useState({});
    const [status, setStatis] = useState("Ongoing");
    const [duration, setDuration] = useState("");
    const [hookHand, setHookHand] = useState("No");
    const { id } = useParams();
    console.log(id);

<<<<<<< Updated upstream
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/projects/' + id)
    //         .then(res => {
    //             console.log(res.data);
    //             setProject(res.data)
    //             if(res.data.eye){
    //                 setEyePatch("Yes");
    //             }
    //             if(res.data.leg){
    //                 setPegLag("Yes");
    //             }
    //             if(res.data.hand){
    //                 setHookHand("Yes");
    //             }
    //         })
    //         .catch(err => console.error(err));
    // }, [id]);
=======
    useEffect(() => {
        fetch("http://localhost:8000/api/projects/" + id, {
            method: 'GET',
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => { setIsLoaded(true); setThisProject(data); })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8000/api/tasks/${id}`, {
            method: 'GET',
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => { setIsLoaded2(true); setTasks(data); })
    }, [])

    function handleProjectDelete() {
        fetch("http://localhost:8000/api/projects/" + id, {
            method: 'DELETE',
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
            //Todo: push to projectid
            .then(a => history.push(`/profile`));


    }
>>>>>>> Stashed changes

    return (
        <>
            <div className='topbar'>
                <h1>Task Manager</h1>
                <div className='topRight'>
<<<<<<< Updated upstream
                    <button className='btn btn-info'><Link to="/">Home</Link></button>
                    <button className='btn btn-info'>
                        <Link to="/">Log Out</Link>
                    </button>

=======
                    <Link className='btn btn-primary' to="/">Home</Link>
                    <Link className='btn btn-danger' to="/logOut">Log Out</Link>
>>>>>>> Stashed changes
                </div>
            </div>
            <div className="MidControl">
                <div className='welcome'>

                </div>
            </div>

            <div className='mainDisplay'>
                <br />
                <h2>Project Details</h2><br />
                <div>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>Project Name:</td>
                                <td>{project.name}</td>
                            </tr>
                            <tr>
                                <td>Details:</td>
                                <td>{project.details}</td>
                            </tr>
                            <tr>
                                <td>Priority:</td>
                                <td>{project.priority}</td>
                            </tr>
                            <tr>
                                <td>Status:</td>
                                <td>{status}</td>
                            </tr>
                            <tr>
                                <td>TimeFrame with Duration:</td>
                                <td>{duration}</td>
                            </tr>
                            <tr>
<<<<<<< Updated upstream
                                <td>Team Members:</td>
                                <td>{project.teamMembers}</td>
=======
                                <td>Invite a friend:</td>
                                <td>
                                    <input type="text" />    <button className='btn btn-primary'>send</button>
                                </td>
>>>>>>> Stashed changes
                            </tr>
                            <tr>
                                <td>Invite a friend:</td>
                                <td>
                                    <input type="text" />    <button className='btn btn-primary'>send</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='task-control'>

                <div className='task-list'>
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
                    <a href="/">Task1</a>
                    <a href="/">Task2</a>

                </div>
                <div className='add-task'>
<<<<<<< Updated upstream
                    <button className='btn btn-success'>Add Task</button>
                </div>
            </div>
            <div className='edit-delete'>
                <Link to={"/projects/" + project._id+"/edit" } className='btn btn-warning'>Edit</Link>
                <button className='btn btn-danger'>Delete</button>
=======
                    <Link className='btn btn-success' to={"/tasks/" + thisProject._id}>Add Task</Link>
                </div>
            </div>
            <div className='edit-delete'>
                <Link  to={"/projects/" + thisProject._id + "/edit"} className='btn btn-warning'>Edit</Link><button className='btn btn-danger' onClick={handleProjectDelete}>Delete</button>
>>>>>>> Stashed changes
            </div>
        </>
    )
}

export default Detail;


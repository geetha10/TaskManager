import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import style from "./style.css"


const Detail = (props) => {
    const [project, setProject] = useState({});
    const [tasks, setTasks] = useState({});
    const [status, setStatis] = useState("Ongoing");
    const [duration, setDuration] = useState("");
    const [hookHand, setHookHand] = useState("No");
    const { id } = useParams();
    console.log(id);

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
                                <td>Team Members:</td>
                                <td>{project.teamMembers}</td>
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
                    <button>Add Task</button>
                </div>
            </div>
            <div className='edit-delete'>
                <button className='edit-btn'><Link to={"/projects/update/" + project._id } className='bLink'>Edit</Link></button><button>Delete</button>
            </div>
        </>
    )
}

export default Detail;


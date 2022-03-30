import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import style from "./style.css"
import 'bootstrap/dist/css/bootstrap.css';

const DetailTask = (props) => {
    const [task, setTask] = useState({});

    const [status, setStatis] = useState("Ongoing");


    const { id } = useParams();
    console.log(id);

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/tasks/' + id)
    //         .then(res => {
    //             console.log(res.data);
    //             setTask(res.data)
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
                    <button className='btn btn-info'><Link to="/">Home</Link></button>
                    <button className='btn btn-info'>
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
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>Task Name:</td>
                                <td>{task.name}</td>
                            </tr>
                            <tr>
                                <td>Details:</td>
                                <td>{task.details}</td>
                            </tr>
                            
                            <tr>
                                <td>Completion:</td>
                                <td>{task.completion}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div className='edit-delete'>
                <Link to={"/task/" + task._id+"/edit" } className='btn btn-warning'>Edit</Link>
                <button className='btn btn-danger'>Delete</button>
            </div>
        </>
    )
}

export default DetailTask;


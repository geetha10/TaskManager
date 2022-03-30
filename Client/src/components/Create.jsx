import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import style from "./style.css"
import 'bootstrap/dist/css/bootstrap.css';

const Create = (props) => {

    const history = useHistory()

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [teammembers, setTeammembers] = useState("");
    const [duedate, setDuedate] = useState("")


    const [errors, setErrors] = useState([]);


    const priorityList = [
        "Low",
        "Medium",
        "High"
    ]
    let displayPos = priorityList;

    const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/projects')
    //         .then(res => {
    //             setProjects(res.data);
    //             // console.log(projects);
    //         })
    //         .catch(err => console.error(err));
    // }, []);
    // }


    //dynamic validation
    // let nameErr="";
    // let descriptionErr="";
    // let chestErr="";
    // let teammembersErr="";
    // let priorityErr="";

    // if(name.length==0){
    //     nameErr="Name is required!";
    //     // console.log("empty");
    // }else{
    //     // setNameErr("");
    //     nameErr="";
    //     // console.log("not empty");
    // }
    // if(description.length==0){
    //     descriptionErr="description is required!";
    // }else{
    //     descriptionErr="";
    // }
    // if(teammembers.length==0){
    //     teammembersErr="teammembers is required!";
    // }else{
    //     teammembersErr="";
    // }
    // if(priority.length==0){
    //     priorityErr="priority is required!";
    // }else{
    //     priorityErr="";
    // }


    const createProject = (e) => {
        e.preventDefault();
        // console.log(title, content, isImportant);

        const newProject = {
            name: name,
            description: description,
            duedate: duedate,
            teammembers: teammembers,
            priority: priority,
        }
        // POST to the db, with the obj
        // axios.post("http://localhost:8000/api/pirates", newProject)
        //     .then(res => {
        //         console.log(res.data);
        //         console.log("SUCCESS CLIENT");
        //         history.push("/")
        //     })
        //     .catch(err => {
        //         console.log("❌ ERROR CLIENT")
        //         console.log(err.response.data)

        //         // alternate way
        //         const { errors } = err.response.data;
        //         const messages = Object.keys(errors).map(error => errors[error].message)
        //         console.log(messages);
        //         setErrors(messages);

        //     })
    }

    return (
        <>
            <div>
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

                {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
                <form onSubmit={createProject}>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>

                                    Project Name:

                                </td>
                                <td>
                                    <input onChange={e => setName(e.target.value)} value={name} /> <br />

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Description:
                                </td>
                                <td>
                                    <input onChange={e => setDescription(e.target.value)} value={description} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Priority:
                                </td>
                                <td>
                                    <select name="priority" id="priority" onChange={e => setPriority(e.target.value)} value={priority}>
                                        {displayPos.map((po, idx) => <option key={idx} value={po}>{po}</option>)}
                                    </select><br />

                                </td>
                            </tr>
                            <tr>
                                <td>

                                    Due Date:
                                </td>
                                <td>
                                    <input type="date" onChange={e => setDuedate(e.target.value)} value={duedate} /> <br />

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    TeamMembers:
                                </td>
                                <td>
                                    <input onChange={e => setTeammembers(e.target.value)} value={teammembers} /> <br />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <p>{nameErr}</p> */}
                    {/* <p>{descriptionErr}</p> */}
                    {/* <p>{priorityErr}</p> */}
                    {/* <p>{duedateErr}</p> */}
                    {/* <p>{teammembersErr}</p> */}
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-primary'>Create Project</button>
                        <Link className='btn btn-danger' to="/">Cancel</Link>
                    </div>

                </form>

            </div>
        </>
    )
}

export default Create
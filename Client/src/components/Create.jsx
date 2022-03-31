import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Create = (props) => {

    const history = useHistory()

    const [projectName, setProjectName] = useState("");
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

    const createProject = (e) => {
        e.preventDefault();

        console.log("In createProject method", projectName)
        const newProject = {
            projectName: projectName,
            description: description,
            duedate: duedate,
            teammembers: teammembers,
            priority: priority,

        }
        // POST to the db, with the obj
        fetch("http://localhost:8000/api/projects", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "x-access-token": localStorage.getItem("token")
            },
            body: JSON.stringify(newProject)
        })
        history.push("/profile")
    }

    useEffect(() => {
        fetch("/user/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => data.isLoggedIn ? null : history.push("/"))
    }, [])

    return (
        <>
            <div>
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

                {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
                <form onSubmit={createProject}>
                    <table>
                        <tbody>
                            <tr>
                                <td>

                                    Project Name:

                                </td>
                                <td>
                                    <input onChange={e => setProjectName(e.target.value)} value={projectName} /> <br />

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
                    <button onClick={createProject}>Create Project</button>
                </form>
                <button>
                    <Link to="/profile">Cancel</Link>
                </button>
            </div>
        </>
    )
}

export default Create
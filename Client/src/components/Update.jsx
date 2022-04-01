import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function Update(props) {


    const history = useHistory()

<<<<<<< Updated upstream
    const [name, setName] = useState("");
=======
    const history = useHistory();
    const { id } = useParams();
    const [projectName, setProjectName] = useState("");
>>>>>>> Stashed changes
    const [description, setDescription] = useState("");
    const [status, setStatus]=useState(false);
    const [priority, setPriority] = useState("");
    const [teammembers, setTeammembers] = useState("");
<<<<<<< Updated upstream
    const [duedate, setDuedate] = useState("")


=======
    const [dueDate, setDuedate] = useState("")
>>>>>>> Stashed changes
    const [errors, setErrors] = useState([]);


    const priorityList = [
        "Low",
        "Medium",
        "High"
    ]
    let displayPos = priorityList;

    const [projects, setProjects] = useState([]);

<<<<<<< Updated upstream
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/tasks/' + id)
    //     .then(res=> {
    //         console.log(res.data);
    //         setName(res.data.name);
    //         setDetails(res.data.details);
    //         setDuration(res.data.duration);
    //         setTimeFrame(res.data.timeFrame);
    //         setIsComplete(res.data.isComplete);
    //     })
    //     .catch(err => console.log(err));
    // },[id])

    // const updateProject = (e) => {
    //     e.preventDefault();
        
    //     axios.put('http://localhost:8000/api/tasks/' + id, {
    //         name,
    //         details,
    //         timeFrame,
    //         duration,
    //         isComplete
    //     })
    //     .then(res => {
    //         console.log(res.data);
    //         history.push('/');
    //     })
    //     .catch(err => {
    //         console.log(err.response.data);
    //         const {errors} = err.response.data;
    //         const messages = Object.keys(errors).map(error => errors[error].message)
    //         console.log(messages);
    //         setErrors(messages);
    //     })
    // }

    const updateProject = (e) => {console.log("Uncomment the above code");}

    return (
        <div>
            <h3 className='mt-3 text-center'>Update Task:</h3>
            {
                errors.map((error, i) => {
                    return <p style={{color:"red"}} key={i}>{error}</p>
                })
            }
            <form onSubmit={updateProject} className='mx-auto col-5'>
            <table className='table'>
=======
    const createProject = (e) => {
        e.preventDefault();

        console.log("In createProject method", projectName)
        const updatedProject = {
            projectName: projectName,
            description: description,
            dueDate: dueDate,
            teammembers: teammembers,
            priority: priority,
            status:status

        }

        fetch("http://localhost:8000/api/projects/" + id, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "x-access-token": localStorage.getItem("token")
            },
            body: JSON.stringify(updatedProject)
        })
        history.push("/")
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
                        <Link className='btn btn-primary' to="/">Home</Link>
                        <Link className='btn btn-danger' to="/logOut">Log Out</Link>
                    </div>
                </div>
                <div className="MidControl">
                    <div className='welcome'>

                    </div>
                </div>

                {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
                <form onSubmit={createProject}>
                    <table className='table'>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    {/* <p>{nameErr}</p> */}
                    {/* <p>{descriptionErr}</p> */}
                    {/* <p>{priorityErr}</p> */}
                    {/* <p>{duedateErr}</p> */}
                    {/* <p>{teammembersErr}</p> */}
                    <button className='btn btn-primary'>Create Project</button>
                <Link className='btn btn-danger m-3' to="/">Cancel</Link>
                
            </form>
        </div>
=======
                    <button className='btn btn-success' onClick={createProject}>Update Project</button>
                    <Link className='btn btn-danger' to={`/projects/${id}`}>Cancel</Link>
                </form>


            </div>
        </>
>>>>>>> Stashed changes
    )
}

export default Update
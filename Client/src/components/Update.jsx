import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function Update(props) {


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
                    <button className='btn btn-primary'>Create Project</button>
                <Link className='btn btn-danger m-3' to="/">Cancel</Link>
                
            </form>
        </div>
    )
}

export default Update
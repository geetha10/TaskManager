import { useHistory, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import style from "./style.css"

export function NewTask() {
    const history = useHistory();
    const { projectId } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [tasks, setTasks] = useState([]);

    //This verifies that the user is logged
    useEffect(() => {
        fetch("/user/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => data.isLoggedIn ? null : history.push(`/projects/${projectId}`))
    }, [])

    //This gets the viewTasks
    useEffect(() => {
        fetch(`http://localhost:8000/api/projects/${projectId}/tasks`, {
            method: 'GET',
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => { setIsLoaded(true); setTasks(data); })
    }, [])

    function handleTaskSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const task = {
            taskName: form[0].value,
            description: form[1].value,
            isComplete: form[2].checked,
        }
        fetch("http://localhost:8000/api/tasks/" + projectId, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "x-access-token": localStorage.getItem("token")
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json);
        history.push(`/projects/${projectId}`);
    }

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h1>Task Form</h1>
                <div>

                    <Link className='btn btn-info' to="/">Home</Link>
                    <Link className='btn btn-info' to="/logOut">Log Out</Link>
                </div>
            </div>
            <form onSubmit={e => handleTaskSubmit(e)}>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>
                                <label>Name: </label>
                            </td>
                            <td>
                                <input required type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Details: </label>
                            </td>
                            <td>
                                <input required type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Complete: </label>
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className='btn btn-primary' type="submit">Create Task</button>
                <Link className='btn btn-danger' to={`/projects/${projectId}`}>Cancel</Link>
            </form>
            <div>
                {/* {
                    JSON.stringify(tasks)
                    // isLoaded ? <p>{items.tasks.name}</p> : <p>Loading...</p>
                    
                } */}
            </div>
        </div>

    )
}
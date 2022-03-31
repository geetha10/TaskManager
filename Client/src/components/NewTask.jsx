import { useHistory, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function NewTask() {
    const history = useHistory();
    const {projectId} = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [tasks, setTasks] = useState([]);

    //This verifies that the user is logged
    useEffect(() => {
        fetch("/user/isUserAuth", {
            headers: {
                "x-access-token" : localStorage.getItem("token")
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
                "x-access-token" : localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => {setIsLoaded(true); setTasks(data);})
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
                "Content-type" : "application/json",
                "x-access-token" : localStorage.getItem("token")
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json);
        history.push(`/projects/${projectId}`);
    }

    return(
        <div>
            <h1>Task Form</h1>
            <button><Link to="/profile">Home</Link></button>
            <button>
                <Link to="/logOut">Log Out</Link>
            </button>
            <form onSubmit={e => handleTaskSubmit(e)}>
                <label>Name: </label><input required type="text"/><br/>
                <label>Details: </label><input required type="textarea"/><br/>
                <label>Complete: </label><input type="checkbox"/><br/>
                <button type="submit">Create Task</button>
            </form>
            <Link to={`/projects/${projectId}`}>Cancel</Link>
            <div>
                {
                    JSON.stringify(tasks)
                    // isLoaded ? <p>{items.tasks.name}</p> : <p>Loading...</p>
                    
                }
            </div>
        </div>

    )
}
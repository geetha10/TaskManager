import { useHistory, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function UpdateTask() {
    const history = useHistory();
    const {id} = useParams();
    const [isLoaded, setIsLoaded] = useState(false);

    //This verifies that the user is logged
    useEffect(() => {
        fetch("/user/isUserAuth", {
            headers: {
                "x-access-token" : localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => data.isLoggedIn ? null : history.push(`/`))
    }, [])

    function handleTaskSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const task = {
            taskName: form[0].value,
            description: form[1].value,
            isComplete: form[2].checked,
        }
        fetch("http://localhost:8000/api/task/update/" + id, {
            method: "PUT",
            headers: {
                "Content-type" : "application/json",
                "x-access-token" : localStorage.getItem("token")
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json);
        history.push(`/task/${id}`);
    }

    return(
        <div>
            <h1>Task Form</h1>
            <form onSubmit={e => handleTaskSubmit(e)}>
                <label>Name: </label><input required type="text"/><br/>
                <label>Details: </label><input required type="textarea"/><br/>
                <label>Complete: </label><input type="checkbox"/><br/>
                <button type="submit">Update Task</button>
            </form>
            <Link to={`/task/${id}`}>Cancel</Link>
            <div>
                {
                    // JSON.stringify(tasks)
                    // isLoaded ? <p>{items.tasks.name}</p> : <p>Loading...</p>
                    
                }
            </div>
        </div>

    )
}
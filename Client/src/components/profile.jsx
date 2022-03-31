import { useHistory, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Create from './Create';

export function Profile() {
    const history = useHistory();
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    function handleTaskSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const task = {
            name: form[0].value,
            comment: form[1].value,
            timeframe: form[2].value,
            duration: form[3].value,
            complete: form[4].ch
        }
        fetch("http://localhost:8000/task/createTask", {
            method: "POST",
            headers: {
                "Content-type" : "application/json",
                "x-access-token" : localStorage.getItem("token")
            },
            body: JSON.stringify(task)
        })
        //May need to rerender on change
    }
    //This verifies that the user is logged
    useEffect(() => {
        fetch("/user/isUserAuth", {
            headers: {
                "x-access-token" : localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => data.isLoggedIn ? null : history.push("/"))
    }, [])
    //This gets the viewTasks
    // useEffect(() => {
    //     fetch("http://localhost:8000/task/viewTasks", {
    //         method: 'GET',
    //         headers: {
    //             "x-access-token" : localStorage.getItem("token")
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {setIsLoaded(true); setItems(data);})
    // }, [])

    return(
        <div>
            {/* <form onSubmit={e => handleTaskSubmit(e)}>
                <label>Name: </label><input required type="text"/><br/>
                <label>Comment: </label><input required type="textarea"/><br/>
                <label>Timeframe: </label><select><option>Hours</option><option>Minutes</option><option>Seconds</option></select><br/>
                <label>Duration: </label><input required type="number"/><br/>
                <label>Complete: </label><input type="checkbox"/><br/>
                <button type="submit">Create Task</button>
            </form>
            <div>
                {
                    JSON.stringify(items)
                    // isLoaded ? <p>{items.tasks.name}</p> : <p>Loading...</p>
                    
                }
            </div> */}
            <Create/>
        </div>

    )
}
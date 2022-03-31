import { useHistory, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export function Profile() {
    const history = useHistory();
    const [projects, setProjects] = useState([]);
    //const [isLoaded, setIsLoaded] = useState(false);

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
                "Content-type": "application/json",
                "x-access-token": localStorage.getItem("token")
            },
            body: JSON.stringify(task)
        })
        //May need to rerender on change
    }
    //This verifies that the user is logged
    useEffect(() => {
        fetch("/user/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => data.isLoggedIn ? null : history.push("/"))
    }, projects)
    //This gets the viewTasks
    useEffect(() => {
        fetch("http://localhost:8000/api/projects", {
            method: 'GET',
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("All Projects Response:", data)
                setProjects(data);
            })
    }, [])

    return (
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
            {
                projects.map((project, i) => {
                    return (
                        <div className='projectCard mx-auto m-3' key={i}>
                            <h1>{project.projectName}</h1>
                            <p>{project.description}</p>
                            <p>Created By: {project.creator.username}</p>
                            <Link to={"/projects/" + project._id}>View Project</Link><span> || </span>
                            <Link to={"/projects/" + project._id + "/edit"}>Edit Project</Link>
                        </div>
                    )
                })
            }
            <div className='text-center'>
                <Link className='btn btn-primary' to="/projects/new">Create a New Project</Link>
            </div>
        </div>

    )
}
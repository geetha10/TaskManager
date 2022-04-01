import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import style from "./style.css"
const Main = (props) => {

    const history = useHistory();
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);


    useEffect(() => {
        fetch("/user/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("User Auth response", data)
                return data.isLoggedIn ? null : history.push("/login")
            })
    }, [])

    //This gets the All projects from DB
    useEffect(() => {
        fetch("http://localhost:8000/api/projects", {
            method: 'GET',
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log("Response is: ", data)
                setProjects(data);
            })
    }, [])

    // DELETE
    const deleteProject = (deleteId) => {
        console.log(deleteId);

        if (window.confirm("really?")) {


        }
    }

    function filterProjects(e) {
        e.preventDefault();
        let tempList = []
        var today = new Date();
        if (e.target.value === "quarter") {
            tempList = projects.filter(p => {
                let tempDate = new Date(p.dueDate)
                let result = (tempDate.getTime() - today.getTime()) / (1000 * 3600 * 24) < 90;
                console.log(result)
                return result
            })
        }
        if (e.target.value === "priority") {

            console.log("Projects",projects)
            let highP = projects.filter(p => p.priority == "High");
            let midP = projects.filter(p => p.priority == "Medium");
            let lowP = projects.filter(p => p.priority == "Low");
            tempList=[...highP,...midP,...lowP];
        }
        console.log("Temp List", tempList)
        setFilteredProjects(tempList)
    }


    return (
        <>
            <div className='topbar'>
                <h1>Task Manager</h1>
                <div className='topRight'>
                    <button><Link to="/profile">Home</Link></button>
                    <button>
                        <Link to="/logOut">Log Out</Link>
                    </button>

                </div>
            </div>
            <div className="MidControl">
                <div className='welcome'>
                    <h2>Welcome, userName or first name</h2>

                </div>
                <div className='mid1'>
                    <div className='filter'>
                        <label htmlFor="sorted">sorted by:</label>
                        <select name="sorted" id="sorted" selc onChange={filterProjects} >
                            <option value="default">-----</option>
                            <option value="quarter" >Due in 90 days</option>
                            <option value="priority">Priority - high to low</option>
                        </select>
                    </div>
                    <Link to="/projects/new">Create A New Project</Link>
                </div>
                <div className='progressbar'>
                    Your progress:
                    <img className='barimg' src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-blue-glowing-progress-bar-image_1355333.jpg" alt="progress bar" />
                </div>
            </div>
            <div className='ongoing-proj proj-list'>
                <h3>Display all the ongoing User's Projects</h3>

                {
                    (filteredProjects.length>0)?
                    (filteredProjects.map((project, idx) => {
                        return (
                            <div className='projectCard' key={project._id} >
                                <h5>
                                    <Link to={"/projects/" + project._id} className='bLink'>{project.projectName}</Link>
                                </h5>
                                <button className='btn bluebtn'><Link to={"/projects/update/" + project._id } className='bLink'>Edit</Link></button>
                                <button className='btn' onClick={() => deleteProject(project._id)}>Delete</button>
                            </div>
                        )
                    })):(projects.map((project, idx) => {
                        return (
                            <div className='projectCard' key={project._id} >
                                <h5>
                                    <Link to={"/projects/" + project._id} className='bLink'>{project.projectName}</Link>
                                </h5>
                                <button className='btn bluebtn'><Link to={"/projects/update/" + project._id } className='bLink'>Edit</Link></button>
                                <button className='btn' onClick={() => deleteProject(project._id)}>Delete</button>
                            </div>
                        )
                    }))
                }
            </div>
            <div className='complete-proj proj-list'>
                <h3>Display all the completed User's Projects</h3>
                {
                    projects.map((project, idx) => {
                        
                        return (
                            (project.status)?
                            (<div className='projectCard' key={project._id} >
                                <h5>
                                    <Link to={"/projects/" + project._id} className='bLink'>{project.projectName}</Link>
                                </h5>
                            </div>):null
                        )
                    })
                }
            </div>
        </>
    )
}

export default Main;
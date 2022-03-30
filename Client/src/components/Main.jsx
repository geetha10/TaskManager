import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import style from "./style.css"
const Main = (props) => {
    const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/projects')
    //         .then(res => {
    //             setProjects(res.data);
    //         })
    //         .catch(err => console.error(err));
    // }, []);

    // DELETE
    const deleteProject = (deleteId) => {
        console.log(deleteId);

        if (window.confirm("really?")) {

            // // make a request to the DB to delete
            // axios.delete("http://localhost:8000/api/projects/" + deleteId)
            // .then(res => {
            //     console.log(res.data);
            //     console.log("SUCCESS DELETE");

            //     // remove from the DOM after a successful delete
            //     setProjects(projects.filter((project) => project._id !== deleteId))
            // })
            // .catch(err => console.log(err))
        }
    }


    return (
        <>
            <div className='topbar'>
                <h1>Task Manager</h1>
                <div className='topRight'>
                    <button>
                        <Link to="/">Log Out</Link>
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
                        <select name="sorted" id="sorted">
                            <option value="quarter">Due in 90 days</option>
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
                    projects.map((project, idx) => {
                        return (
                            <div className='projectCard' key={project._id} >
                                <img className='projectImg' src={project.url} alt={project.name} />
                                <h5>
                                    <Link to={"/projects/" + project._id} className='bLink'>{project.name}</Link>
                                </h5>
                                <button className='btn bluebtn'><Link to={"/projects/update/" + project._id } className='bLink'>Edit</Link></button>
                                <button className='btn' onClick={() => deleteProject(project._id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
            <div className='complete-proj proj-list'>
                <h3>Display all the completed User's Projects</h3>
                {
                    projects.map((project, idx) => {
                        return (
                            <div className='projectCard' key={project._id} >
                                <img className='projectImg' src={project.url} alt={project.name} />
                                <h5>
                                    <Link to={"/projects/" + project._id} className='bLink'>{project.name}</Link>
                                </h5>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Main;
import React, {useState} from 'react';
import axios from 'axios';
import { useHistory, useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function CreateTask() {

    const projectId=useParams();

    const history = useHistory();

    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [timeFrame, setTimeFrame] = useState("");
    const [duration, setDuration] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const [timeOptions, setTimeOptions] = useState(['hours', 'minutes', 'seconds'])
    const [errors, setErrors] = useState([]);

    const createTask = (e) => {
        e.preventDefault();
        //Need to see how to connect ProjectId to Task
        // axios.post('http://localhost:8000/api/tasks', {
        //     name,
        //     details,
        //     timeFrame,
        //     duration,
        //     isComplete
        // })
        // .then(res => {
        //     console.log(res.data);
        //     history.push('/');
        // })
        // .catch(err => {
        //     console.log(err.response.data);
        //     const {errors} = err.response.data;
        //     const messages = Object.keys(errors).map(error => errors[error].message)
        //     console.log(messages);
        //     setErrors(messages);
        // })
    }
    
    return (
        <div>
            <h3>Create a new task:</h3>
            {
                errors.map((error, i) => {
                    return <p style={{color:"red"}} kye={i}>{error}</p>
                })
            }
            <form onSubmit={createTask} className='col-5 mx-auto'>
                <div className='form-group mt-3 d-flex'>
                    <label className='col-3'> Name: </label>
                    <input className="form-control" type="text" onChange={e => setName(e.target.value)} value={name}/>
                </div>

                <div className='form-group mt-3 d-flex' >
                    <label className='col-3'> details: </label>
                    <textarea className="form-control" type="text" onChange={e => setDetails(e.target.value)} value={details}/>
                </div>

                <div className='form-group mt-3 d-flex'>
                    <label className='col-3'> Time Frame: </label>
                        <select className="form-control" onChange={e => setTimeFrame(e.target.value)}>
                            {
                                timeOptions.map((elem, i) => {
                                    return (
                                        <option key={i} value={elem}>{elem}</option>
                                    )
                                })
                            }
                        </select>
                </div>
                <div className='form-group mt-3 d-flex'>
                    <label className='col-3'> Duration: </label>
                    <input type="number" className="form-control"  onChange={e => setDuration(e.target.value)} value={duration}/>
                </div>
                <div className='form-group mt-3 d-flex'>
                    <label className='col-3'> Is This Complete? </label>
                    <input type="checkbox"  onChange={e => setIsComplete(e.target.checked)} checked={isComplete}/>
                </div>
                <button className='btn btn-primary mt-3'>Create</button>
            </form>
        </div>
    )
}

export default CreateTask
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function UpdateTask(props) {

    const history = useHistory();

    const {id} = useParams();
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [timeFrame, setTimeFrame] = useState("");
    const [duration, setDuration] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const [timeOptions, setTimeOptions] = useState(['hours', 'minutes', 'seconds'])
    const [errors, setErrors] = useState([]);

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

    // const updateTask = (e) => {
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

    const updateTask = (e) => {console.log("Uncomment the above code");}

    return (
        <div>
            <h3 className='mt-3 text-center'>Update Task:</h3>
            {
                errors.map((error, i) => {
                    return <p style={{color:"red"}} key={i}>{error}</p>
                })
            }
            <form onSubmit={updateTask} className='mx-auto col-5'>
                <div className='form-group mt-3 d-flex'>
                    <label className='col-3'> Name: </label>
                    <input className="form-control" type="text" onChange={e => setName(e.target.value)} value={name}/>
                </div>

                <div className='form-group mt-3 d-flex'> 
                    <label className='col-3'> Details: </label>
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
                    <input className="form-control" type="number" onChange={e => setDuration(e.target.value)} value={duration}/>
                </div>
                <div className='form-group mt-3 d-flex'>
                    <label className='col-3'> Is This Complete? </label>
                    <input type="checkbox" onChange={e => setIsComplete(e.target.checked)} checked={isComplete}/>
                </div>
                <div className='mt-3 text-center'>
                <button className='btn btn-success '>Update</button>
                <Link className='btn btn-danger m-3' to="/">Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default UpdateTask
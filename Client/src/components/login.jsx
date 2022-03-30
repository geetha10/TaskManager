// import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import style from "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
const Login = (props) => {


    // const history = useNavigate();
    //************Login**************
    function handleLogin(e) {
        e.preventDefault();

        const form = e.target;
        const user = {
            username: form[0].value,
            password: form[1].value
        }
        // fetch("http://localhost:8000/user/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-type" : "application/json",
        //     },
        //     body: JSON.stringify(user)
        // })
        // .then(res => res.json())
        // .then(data => {localStorage.setItem("token", data.token)})
        // .then(data => {data.isLoggedIn ? history.push("/profile") : null})
    }

    // useEffect(() => {
    //     fetch("/user/isUserAuth", {
    //         headers: {
    //             "x-access-token" : localStorage.getItem("token")
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => data.isLoggedIn ? history.push("/profile") : null)
    // }, [])
    //************Login**************

    //************Reg */
    async function handleRegister(e) {
        e.preventDefault();

        const form = e.target;
        const user = {
            username: form[0].value,
            email: form[1].value,
            firstname: form[2].value,
            lastname: form[3].value,
            password: form[4].value,
            confirmpassword: form[5].value
        }

        //     fetch("http://localhost:8000/user/signup", {
        //         method: "POST",
        //         headers : {
        //             "Content-type" : "application/json"
        //         },
        //         body: JSON.stringify(user)
        //     })
        // }

        // useEffect(() => {
        //     fetch("/user/isUserAuth", {
        //         headers: {
        //             "x-access-token" : localStorage.getItem("token")
        //         }
        //     })
        //     .then(res => res.json())
        //     .then(data => data.isLoggedIn ? history.push("/profile") : null)
        // }, [])
    }
    //***************reg */



    return (
        <>
            <div className='container d-flex justify-content-around'>
                <div className='reg'>
                    <h3>Don't have a account yet? Register here!</h3>
                    <form onSubmit={e => handleRegister(e)}>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>Username: </label>
                                    </td>
                                    <td>
                                        <input required type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Email: </label>
                                    </td>
                                    <td>
                                        <input required type="email" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>First Name: </label>
                                    </td>
                                    <td>
                                        <input required type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Last Name: </label>
                                    </td>
                                    <td>
                                        <input required type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Password: </label>
                                    </td>
                                    <td>
                                        <input required type="password" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Confirm Password: </label>
                                    </td>
                                    <td>
                                        <input required type="password" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <button type="submit" className='btn btn-success'>Register</button>
                    </form>
                </div>
                <div className='login'>
                    <h3>Login here!</h3>
                    <form onSubmit={e => handleLogin(e)}>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>Username: </label>
                                    </td>
                                    <td>
                                        <input required type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Password: </label>
                                    </td>
                                    <td>
                                        <input required type="password" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="submit" className='btn btn-primary'>Log In</button>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Login;
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export function Register() {
    const history = useHistory();

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

        fetch("http://localhost:8000/user/signup", {
            method: "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(user)
        })
    }

    useEffect(() => {
        fetch("/user/isUserAuth", {
            headers: {
                "x-access-token" : localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => data.isLoggedIn ? history.push("/profile") : null)
    }, [])

    return(
        <form onSubmit={e => handleRegister(e)}>
            <label>Username: </label><input required type="text"/><br/>
            <label>Email: </label><input required type="email"/><br/>
            <label>First Name: </label><input required type="text"/><br/>
            <label>Last Name: </label><input required type="text"/><br/>
            <label>Password: </label><input required type="password"/><br/>
            <label>Confirm Password: </label><input required type="password"/><br/>
            <button type="submit">Register</button>
        </form>
    )
}
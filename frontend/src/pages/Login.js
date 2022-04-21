import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {

    const [email, setEmail] = useState("sub-zero@mortalcombat.com");
    const [password, setPassword] = useState("Strapi2022");
    const history = useHistory();

    const tryLogin = () => {
        console.log("workin");
        axios
            .post('http://localhost:1337/api/auth/local', {
                identifier: email,
                password: password
            })
            .then((response) => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
                props.setAuthenticated(true);
                localStorage.setItem("save_up_token", response.data.jwt);
                props.setUserToken(response.data.jwt);
                history.push("/dashboard");
            })
            .catch((error) => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        tryLogin();
    }
    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }

    useEffect(() => {
        console.log(email);
        console.log(password);
    }, [email, password]);

    return (
        <div className="flex-grow-1">
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="email">Email:</label>
                <input onChange={handleChange} name="email" id="email" type="email" value={email} required />
                <label htmlFor="password">Password:</label>
                <input onChange={handleChange} name="password" id="password" type="password" value={password} required />
                <button type="submit">Login</button>
            </form>
        </div>
    )

}

export default Login;
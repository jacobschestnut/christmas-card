import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"


export const Login = ({setAuthUser}) => {
    const [loginUser, setLoginUser] = useState({ username: "" })
    const [existDialog, setExistDialog] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?username=${loginUser.username}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    setAuthUser(exists)
                    navigate("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <fieldset>
                        <label htmlFor="inputUsername"> Username: </label>
                        <input 
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="enter username"
                            required autoFocus
                            value={loginUser.username}
                            onChange={handleInputChange} />
                    </fieldset>
                    <fieldset id="authBtns">
                        <button type="submit" className="button" id="authBtn">
                            Sign In
                        </button>
                        <Link to="/register" className="registerLink"><button className="button" id="authBtn">Register</button></Link>
                    </fieldset>
                </form>
            </section>
        </main>
    );
};
import React from 'react'
import "./Login.css"
import {auth, provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer"


function Login() {
    const [ state , dispatch] = useStateValue();
    const handleSignIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user.email);
        }).catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
         <img className="img1" src="data:image/png;base64,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" />
            <img  className="img2" src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/11/e8d53e91-3831-4429-8ba7-b5c290a5ba98-5dc0b9c0642a3.gif" />
            </div>
            <div className="login__bottom">
                <button onClick={handleSignIn}> Sign In</button>
            </div>
        </div>
    )
}

export default Login

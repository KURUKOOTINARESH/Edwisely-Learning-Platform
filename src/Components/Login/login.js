import logo from '../../images/logo.svg'
import "./login.css"
import {FiLogIn} from "react-icons/fi"
import {FaUser} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () =>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [emailError,setEmailError] = useState(false)
    const [passwordError,setPasswordError] = useState(false)
    const [valid,setValid] = useState(true)

    const onEmailChange=(event)=>{
        setEmail(event.target.value)
    }
    const onPasswordChange=(event)=>{
        setPassword(event.target.value)
    }

    const onEmailBlur=(event)=>{
        if(event.target.value===''){
            setEmailError(true)
        }
        else{
            setEmailError(false)
        }
    }
    const onPasswordBlur=(event)=>{
        if(event.target.value===''){
            setPasswordError(true)
        }
        else{
            setPasswordError(false)
        }
    }

    const onSubmitForm=(event)=>{
        event.preventDefault()
        setValid(false)
    }

    return(
        <div className="login-container">
            <div className="top-section">
                <Link to="/" className='nav-link'><img src={logo} alt="edwisely-logo" className='login-logo'/></Link>
                <div className='top-left-section'>
                    <FaUser className='login-icon'/>
                    <FiLogIn className='login-icon'/>
                </div>
            </div>
            <hr/>
            <div className='bottom-section'>
                <h2 className='welcome-text'>Welcome Back!</h2>
                <p>Please Sign in as a guest</p>
                <form className='form-container' onSubmit={onSubmitForm}>
                    {!valid && <span className='error-text'>Invalid Email or Password</span>}
                    <div className='field-container'>
                        <label htmlFor='email' className='field-label'>Email</label>
                        <input id='email' type='email' className={emailError ? 'field error' : 'field'} placeholder='Email' value={email} onChange={onEmailChange} onBlur={onEmailBlur}/>
                        {emailError && <span className='error-text'>Please enter a valid Email address</span>}
                    </div>
                    <div className='field-container'>
                        <label htmlFor='password' className='field-label'>Password</label>
                        <input id='password' type='password' className={passwordError ? 'field error' : 'field'} placeholder='Password' value={password} onChange={onPasswordChange} onBlur={onPasswordBlur}/>
                        {passwordError && <span className='error-text'>Password must be at least 8 characters</span>}
                    </div>
                    <div className='help-container'>
                        <div className='remember-me-container'>
                            <input id='rememberCheckBox' type='checkbox'/>
                            <p>Remember me</p>
                        </div>
                        <p>Forgot Password?</p>
                    </div>
                    <div className='buttons-container'>
                        <button id="not-guest" className='submit-button' type='submit'>Sign in</button>
                        <Link to='/dashboard'><button id="guest" className='submit-button' type='button'>Sign-in as Guest</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
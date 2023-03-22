import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import "./home.css"
import {BsArrowRight} from "react-icons/bs"

const Home = ()=>{
    return(
        <div className="home-container">
            <div className="nav-container">
                <img src={logo} alt="edwisely-logo" className='logo'/>
                <div className='nav-right-wrapper'>
                    <Link to='/' className='nav-link'>About us</Link>
                    <Link to='/login' className='nav-link'>Sign in</Link>
                </div>
            </div>
            <div className='content-container'>
                <div className='text-wrapper'> 
                    <h2 className='title'>Accelerated<br/> Learning Platform</h2>
                    <hr className='hr-line'/>
                    <p className='description'>AI-Driven Hybrid Learning and Career platform for Engineering Students</p>
                    <Link to='/login' className='nav-link'>
                        <button className='start-button'><span>Start Course</span> <BsArrowRight className='arrow-icon'/></button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default Home
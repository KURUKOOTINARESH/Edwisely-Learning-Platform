import "./dashboard.css"
import { Link } from "react-router-dom"
import {FiLogOut} from "react-icons/fi"
import logo from '../../images/logo.svg'
import introComputerScience from "../../images/introComputerScience.jpg"
import advancedComputerScience from "../../images/advancedComputerScience.jpg"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {FiEdit} from "react-icons/fi"
import {BsCaretRightFill} from 'react-icons/bs'
import { useState } from "react"

const courses = [{id:'a',title:'Introduction to Computer Science',image:introComputerScience},{id:'b',title:'Advanced Computer Science',image:advancedComputerScience}]
const DashBoard = ()=>{
    const [progress,setProgress] = useState(0)
    return(
        <div className="dashboard-container">
            <div className="top-section">
                <Link to="/" className='nav-link'><img src={logo} alt="edwisely-logo" className='login-logo'/></Link>
                <div className='dashboard-top-left-section'>
                    <p className="dashboard-text">My Dashboard</p>
                    <Link to='/login' className="nav-link dashboard-link-wrapper">
                        <p className="logout-text">Logout</p>
                        <FiLogOut className='login-icon'/>
                    </Link>
                </div>
            </div>
            <hr/>
            <div className="dashboard-bottom-section">
                <h2 className="my-courses-text">My Courses</h2>
                <ul className="courses-wrapper">
                    {courses.map(eachItem=>{
                        return (
                            <Link to={`/course/${eachItem.title.split(" ").join("")}`} className='nav-link dashboard-link'>
                                <li className="course-container" key={eachItem.id}>
                                    <img src={eachItem.image} alt='introduction-to-computer-science' className="course-image"/>
                                    <div style={{ width: 68, height: 68 }} className="progress-circle">
                                        <CircularProgressbar
                                        value={progress}
                                        text={`${progress}%`}
                                        styles={{
                                            // Customize the path, i.e. the "completed progress"
                                            path: {
                                            // Path color
                                            stroke: `#042A2B`,
                                            strokeWidth: '8px'
                                            },
                                            trail: {
                                                strokeWidth: '8px'
                                            },
                                            // Customize the text
                                            text: {
                                            // Text color
                                            fill: '#042A2B',
                                            // Text size
                                            fontSize: '24px',
                                            fontWeight:'bold'
                                            },
                                            backgroundColor: 'red',
                                        }}
                                    />
                                    </div>
                                    <p className="course-title">{eachItem.title}</p>
                                    <hr className="course-hr-line"/>
                                    <div className="course-controls-container">
                                        <button className="control-wrapper">
                                            <FiEdit/>
                                            <p className="control-text">See Overview</p>
                                        </button>
                                        <button className="control-wrapper">
                                            <BsCaretRightFill/>
                                            <p className="control-text">Resume Course</p>
                                        </button>
                                    </div>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
                
            </div>
        </div>
    )
}

export default DashBoard
import "./course.css"
import { Link, useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import logo from '../../images/logo.svg'
import {MdOutlineArrowBackIosNew} from "react-icons/md"
import ProgressBar from "@ramonak/react-progress-bar";
import {FiChevronDown} from 'react-icons/fi'
import axios from "axios";
import {BsArrowRight} from "react-icons/bs"
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Course=(props)=>{
    let params = useParams()
    const [data,setData] = useState(null)
    const [activeTask,setActiveTask] = useState('1')
    const [progress,setProgress] = useState(0)
    useEffect(()=>{
        axios.get(`http://localhost:3000/${params.title}`).then((response) => {
            setData(response.data);
          });
        
    },[])

    const getTaskContent=()=>{
        const details = data.steps.filter(eachItem=>eachItem.id===activeTask)
        const taskDetails = details[0]
        return(
            <div className="content">
                <h2>{taskDetails.task}</h2>
                <hr/>
                {taskDetails.subTasks.map(eachItem=>(
                <>
                    <h3>{eachItem.name}</h3>
                    <p>{eachItem.description}</p>
                    <div className="video">
                        <LiteYouTubeEmbed 
                            id={eachItem.videoLink}
                            title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                        />
                    </div>
                    <p className="tutorial-text">Tutorial Link : <a href={`${eachItem.tutorialLink}`}>{eachItem.tutorialLink}</a></p>
                </>
                ))}
            </div>
        )
    }

    const onTaskClick = (event)=>{
        setActiveTask(event.target.id)
        const newData = data.steps.map(eachItem=>{
            if(eachItem.id===event.target.id){
                return({...eachItem,isActive:true})
            }
            return({...eachItem,isActive:false})
        })
        setData({...data,steps:newData})
    }

    const onContinueClick=()=>{
        if(parseInt(activeTask)<5){
           const taskId = (parseInt(activeTask)+1).toString()
           setActiveTask(taskId)
           const newData = data.steps.map(eachItem=>{
                if(eachItem.id===taskId){
                    return({...eachItem,isActive:true})
                }
                if(eachItem.id===activeTask){
                    setProgress((progress+20))
                    return({...eachItem,isActive:false,isCompleted : true})
                }
                return({...eachItem,isActive:false})
            })
            setData({...data,steps:newData})             
        }
        else{
            setActiveTask('1')
            const newData = data.steps.map(eachItem=>{
                if(eachItem.id==='5'){
                    setProgress((progress+20))
                    return({...eachItem,isActive:true,isCompleted:true})
                }
                if(eachItem.id==='1'){
                    return({...eachItem,isActive:true})
                }
                return({...eachItem,isActive:false})
            })
            setData({...data,steps:newData})
        }
        
    }
    return(
        <div className="course-page">
            <div className="overview-section">
                <div className="top-header-container">
                    <div className="logo-container">
                        <img src={logo} alt="edwisely-logo" className='login-logo'/>
                    </div>
                    <Link to='/dashboard' className="dashboard-back-container">
                        <MdOutlineArrowBackIosNew/>
                        <span>Go to DashBoard</span>
                    </Link>
                    {data && <p className="course-title-txt">{data.title}</p>}
                    <ProgressBar completed={progress} height='16px' width="90%" bgColor="#5454dc" className="progress-bar"/>
                </div>
                <ul className="index-container">
                    {data && data.steps.map(eachItem=>
                    <li className="topic-container">
                        <div className="task-wrapper">
                            <input type='checkbox' className="checkbox" checked={eachItem.isCompleted}/>
                            <button id={eachItem.id} className={eachItem.isActive ? "topic-button topic-button-active" : "topic-button"} onClick={onTaskClick}>{eachItem.task}<FiChevronDown className={eachItem.isActive? "arrow arrow-active":"arrow"}/></button>
                        </div>
                        {eachItem.isActive && <div className="subtasks-wrapper">
                            {eachItem.subTasks.map(eachSub=><p>{eachSub.name}</p>)}
                        </div>}
                        
                    </li>)}
                </ul>
                
            </div>
            <div className="content-section">
                <div className="black-bg-container">
                    <div className="course-content-container">
                        {data && getTaskContent()}
                    </div>
                    <button className="submit-button" onClick={onContinueClick}>Complete & Continue <BsArrowRight className="submit-arrow"/> </button>
                </div>
            </div>
        </div>
    )
}

export default Course
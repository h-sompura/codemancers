import React, {useState} from 'react'
import './MessageSender.css'
import { IoPersonCircle } from 'react-icons/io5'
import AddGIF from './AddGIF'
const MessageSender = () => {
    const [input,setInput]= useState('')
    const [print,setPrint] =useState(false)
    const[post,setPost]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setPost(input)
        setInput('')
        setPrint(true)
    }
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <div className="messageSender">
            {/* Takes input message and add gif option */}
            <h1>Post Feed</h1>
            <div className="message__top">
                <IoPersonCircle size={64} style={{color:"#efefef", marginTop:"2.3em"}}/>
                <form onSubmit={handleSubmit}>
                    <input 
                        value={input}
                        onChange={handleChange}
                        placeholder={`What's on your mind?`} 
                    />
                    <button type="submit">Post</button>
                </form>
            </div>
            {/* Post Message */}
            <div className="output__container">
                    <h2>You posted this message:</h2>
                     {
                        print ? <div><IoPersonCircle size={64} style={{color:"#efefef"}} /><h5>{post}</h5></div> : null
                     }
                     
             </div>
             {/* Search GIF */}
             <AddGIF />
             
        </div>
    )
}

export default MessageSender

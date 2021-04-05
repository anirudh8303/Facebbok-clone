import React from 'react'
import "./MessageSender.css"
import Avatar from '@material-ui/core/Avatar';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useState } from "react";
import db  from "./firebase"
import {useStateValue} from "./StateProvider"
import firebase from "firebase"
function MessageSender() {
    const [ { user }, dispatch]= useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            caption: input,
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
        setImageUrl("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input onChange ={(e) => setInput(e.target.value)}  type="text" placeholder="Whats on your mind ?"></input>
                    <input onChange ={(e) => setImageUrl(e.target.value)}type="text" placeholder="ImageUrl"></input>
                <button onClick={handleSubmit} type="submit">Hidden submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                <VideocamIcon style={{color: "red"}} />
                <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                <PhotoLibraryIcon   style={{color: "green"}} />
                <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                <InsertEmoticonIcon style={{color: "orange"}} />
                <h3>Feeling/Activity</h3>
                </div>
            </div>
            
        </div>
    )
}

export default MessageSender

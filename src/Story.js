import React from 'react'
import "./Story.css"
import Avatar from '@material-ui/core/Avatar';

function Story({ img, profileSrc, title }) {
    return (
        <div style={{ backgroundImage: `url(${img})`}} className="story">
             <Avatar className="story_avatar" src={profileSrc} />
             <h4>{title}</h4>
        </div>
    )
}

export default Story

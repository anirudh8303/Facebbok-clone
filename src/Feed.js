import React, {useState, useEffect} from 'react'
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post";
import db from "./firebase"

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts").onSnapshot((snpashot) => 
              setPosts(snpashot.docs.map((doc) => (
                  {
                      id: doc.id,
                      data: doc.data()
                  }
              )))
        )
    }, [])
    return (
        <div className="feed">
             <StoryReel />
             <MessageSender />
             {posts.map((post) => 
                 <Post 
                 key={post.data.mapid}
                 profilePic={post.data.profilePic}
                 message={post.data.caption}
                 username={post.data.mapusername}
                 timestamp={post.datatimestamp}
                 image={post.data.image} 
                 />
             )}
        </div>
    )
}

export default Feed

import React from 'react'
import style from './profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './MyPosts/Post/ProfileInfo/ProfileInfo.jsx'

const Profile = (props) => {
  return (
    <div >
      
      <ProfileInfo/>
      <MyPosts
       PostData={props.PostData}
       addPost={props.addPost}/>

    </div>
  )
}
export default Profile
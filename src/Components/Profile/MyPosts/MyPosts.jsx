import React from 'react'
import style from './myposts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

  const newPostElement = React.createRef()

  const AddPost = () => {
    const text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = ' ';
  }
  return (
    <div className={style.mypostBlock}>
      <h3 >My posts</h3>
      <div>
        <textarea ref={newPostElement}
        
         />
      </div>
      <button onClick={AddPost}>Add Post</button>
      <div className={style.posts}>new posts</div>
      {props.PostData.map(p => <Post massage={p.massage} likesCount={p.likesCount} />)}
    </div>
  )
}
export default MyPosts
import React from 'react'
import style from '../dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Massage = (props) => {
   const post=React.createRef();
   const addPost =()=>{
       const text=post.current.value;
       alert(text)
   }
    return (
    <div className={style.massage}>
        <button onClick={addPost}>SEND</button>
        <textarea ref={post}>{props.massage}</textarea>
        </div>
    )
}
export default Massage

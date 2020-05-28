import React from 'react'
import style from './post.module.css'

const Post = (props) => {
  

    return (
        <div className={style.item}>
            <img src='data:image/png;base64,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' />
            {props.massage}
            {props.name}
            <div>
                <span>Liked </span> {props.likesCount}
            </div>
        </div>
    )
}
export default Post
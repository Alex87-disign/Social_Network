import React from 'react'
import style from '../../../profile.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <div className="itemimg">
        <img src='https://scx1.b-cdn.net/csz/news/800/2019/2-nature.jpg' width="200" height="150"/>
      </div>
      <div className={style.descriptionBlock}>
        ava+description
       </div>
    </div>
  )
}
export default ProfileInfo
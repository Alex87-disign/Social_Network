import React from 'react'
import style from './navbar.module.css'
import { NavLink } from 'react-router-dom'
import Post from '../Profile/MyPosts/Post/Post'

const Navbar = ({DialogsData}) => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink >
      </div>
      <div className={`${style.item} ${style.active}`}>
        <NavLink to='/dialogs' activeClassName={style.activeLink}>Massages</NavLink >
      </div>
      <div className={style.item}>
        <NavLink to='/news' activeClassName={style.activeLink}>News</NavLink >
      </div>
      <div className={style.item}>
        <NavLink to='/music' activeClassName={style.activeLink}>Music</NavLink >
      </div>
      <div className={style.item}>
        <NavLink to='/settings' activeClassName={style.activeLink}>Settings</NavLink >
      </div>
      <h2>My Friends</h2>
      <div className={style.friends}>
        
        {DialogsData.map(dialogs=> <Post name={dialogs.name} id={dialogs.id} />)}
      </div>
    </nav>
  )
}
export default Navbar
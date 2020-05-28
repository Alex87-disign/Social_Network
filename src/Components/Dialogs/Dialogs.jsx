import React from 'react'
import style from './dialogs.module.css'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogsItems/DialogsItems'
import Massage from './DialogsItems/Massage'



const Dialogs = ({DialogsData,MassagesData}) => {

    return (
        <div className={style.dialogs} >
            <div className={style.dialogsItems}>
                {DialogsData.map(dialog =><DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={style.massages}>
                
                {MassagesData.map(m =><Massage massage={m.massage} id={m.id}/>)}
            </div>
        </div>
    )
}

export default Dialogs
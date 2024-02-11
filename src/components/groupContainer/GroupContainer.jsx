import React, { useState, useContext } from 'react'
import './style.css'
import Group from '../group/Group'
import { Context } from '../../Context'

const GroupContainer = () => {
    const { setShow } = useContext(Context);

    const handleClick = () => {
        setShow(true)
    }

    return (
        <>
            <div className='groupContainer'>
                <Group />
            </div>
            <div className="add" onClick={handleClick}>+</div>
        </>
    )
}

export default GroupContainer

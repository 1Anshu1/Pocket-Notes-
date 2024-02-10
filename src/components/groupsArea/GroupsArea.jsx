import React from 'react'
import './style.css'
import GroupContainer from '../groupContainer/GroupContainer'

const GroupsArea = () => {
    return (
        <div className='groupsArea'>
            <h1 className='groupsArea-title'>Pocket Notes</h1>
            <GroupContainer />
        </div>
    )
}

export default GroupsArea

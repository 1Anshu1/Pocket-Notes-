import React, { useContext, useState } from 'react'
import './style.css'
import { Context } from '../../Context'

const Group = () => {
    const [active, setActive] = useState('')
    const allGroup = JSON.parse(localStorage.getItem('Group'))

    const { setCurrentGroup } = useContext(Context)

    function getLogo(name) {
        const temp = name.split(' ')
        if (temp.length > 1) {
            return (temp[0][0] + temp[1][0]).toUpperCase()
        } else {
            return (temp[0][0]).toUpperCase()
        }
    }

    const handleClick = (e, group) => {
        setActive(group.name)
        setCurrentGroup(allGroup.find((item) => item.name === group.name))
    }

    return (
        <>
            {
                allGroup ?

                    allGroup.map((group) => (
                        <div key={group.name} className={group.name === active ? 'group active' : 'group'} onClick={(e) => handleClick(e, group)}>
                            <div className="group-icon" style={{ backgroundColor: group.color }}>{getLogo(group.name)}</div>
                            <div className="group-name">{group.name}</div>
                        </div>
                    ))

                    :

                    <div className="">No Groups Created</div>
            }






        </>
    )
}

export default Group

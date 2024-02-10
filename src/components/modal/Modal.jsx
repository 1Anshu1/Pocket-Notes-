import './style.css'
import { useContext, useRef, useState } from 'react'
import { Context } from '../../Context'

const Modal = () => {
    const errorRef = useRef()
    const { setShow } = useContext(Context)
    const [group, setGroup] = useState({ name: '', color: '', notes: [] })

    const handleColor = (e) => {
        const div = document.getElementById(e.target.id);
        const computedStyle = window.getComputedStyle(div);
        const bgColor = computedStyle.getPropertyValue('background-color');
        setGroup({ ...group, color: bgColor })
    }


    const handleSubmit = () => {
        if (group.name === '' || group.color === '') {
            errorRef.current.style.display = 'block'
        } else {
            if (localStorage.getItem('Group')) {
                let all = JSON.parse(localStorage.getItem('Group'))
                all = [...all, group]
                localStorage.setItem('Group', [JSON.stringify(all)])
            } else {
                let all = [group]
                localStorage.setItem('Group', [JSON.stringify(all)])
            }
            setShow(false)

        }
    }

    return (
        <div className="modal-background" onClick={() => setShow(false)}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <div className=''>Create New Group</div>
                <div className="name">
                    <label htmlFor='name'>Group Name</label>
                    <input
                        id='name'
                        type='text'
                        placeholder='Enter group name'
                        value={group.name}
                        onChange={(e) => setGroup({ ...group, name: e.target.value })} />
                </div>
                <div className="color-selector">
                    <label>Choose colour</label>
                    <div className='colors'>
                        <div id='color1' className='color' onClick={handleColor}></div>
                        <div id='color2' className='color' onClick={handleColor}></div>
                        <div id='color3' className='color' onClick={handleColor}></div>
                        <div id='color4' className='color' onClick={handleColor}></div>
                        <div id='color5' className='color' onClick={handleColor}></div>
                        <div id='color6' className='color' onClick={handleColor}></div>
                    </div>
                </div>
                <div ref={errorRef} className="error">All Fields are required</div>
                <button onClick={handleSubmit}>Create</button>
            </div>
        </div>
    )
}

export default Modal

import React from 'react'
import './style.css'
import banner from '../../assets/image1.png'
import lock from '../../assets/lock.png'


const NotesBanner = () => {
    return (
        <div className='notes-banner'>
            <div className="img">
                <img src={banner} alt="" />
            </div>
            <div className="text">
                <h1>Pocket Notes</h1>
                <p>Send and receive messages without keeping your phone online.</p>
                <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            </div>
            <div className="bottom">
                <img src={lock} alt="" />
                <span>end-to-end encrypted</span>
            </div>
        </div>
    )
}

export default NotesBanner

import { useState, useContext, useEffect, useRef } from 'react'
import dayjs from 'dayjs'
import './style.css'
import { IoSendSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { Context } from '../../Context';

const NotesSection = () => {

    const [text, setText] = useState('')
    const btnRef = useRef()

    const { currentGroup, setHideNotes } = useContext(Context)

    const getLogo = (name) => {
        const temp = name.split(' ')
        if (temp.length > 1) {
            return (temp[0][0] + temp[1][0]).toUpperCase()
        } else {
            return (temp[0][0]).toUpperCase()
        }
    }

    // Get current Group details
    const groups = JSON.parse(localStorage.getItem('Group'))
    let group = (groups.find((item) => item.name === currentGroup.name))

    const handleNotes = () => {
        const note = {
            text: text,
            date: dayjs().format('D MMM YYYY'),
            time: dayjs().format('hh:mm A')
        }
        group.notes = [...group.notes, note]
        localStorage.setItem('Group', JSON.stringify(groups))
        setText('')
    }

    useEffect(() => {
        if (text.length > 0) {
            btnRef.current.style.color = 'blue';
            btnRef.current.disabled = false;
        } else {
            btnRef.current.style.color = 'gray';
            btnRef.current.disabled = true;
        }
    }, [text])

    return (
        <div className='notes-section'>
            <div className="notes-header">
                <FaArrowLeft className='arrow' onClick={() => setHideNotes(true)} />
                <div className="avatar" style={{ backgroundColor: currentGroup.color }}>{getLogo(currentGroup.name)}</div>
                <div className="group-name">{currentGroup.name}</div>
            </div>
            <div className="notes-body">
                {
                    group.notes.map((item, idx) => (
                        <div key={idx} className="note-body">{item.text}
                            <div className="note-time">
                                <div className="">{item.date} </div>
                                <div className='dot'></div>
                                <div className="">{item.time}</div>
                            </div>
                        </div>))
                }
            </div>

            <div className="notes-input">
                <textarea
                    cols="30"
                    rows="10"
                    placeholder='Enter your text here'
                    value={text}
                    onChange={(e) => setText(e.target.value)}>
                </textarea>
                <button className='send' ref={btnRef}>
                    <IoSendSharp onClick={handleNotes} />
                </button>
            </div>
        </div>
    )
}

export default NotesSection

import { useState, useContext, useEffect, useRef } from 'react'
import dayjs from 'dayjs'
import './style.css'
import { IoSendSharp } from "react-icons/io5";
import { Context } from '../../Context';

const NotesSection = () => {

    const [text, setText] = useState('')
    const btnRef = useRef()

    const { currentGroup } = useContext(Context)

    const getLogo = (name) => {
        const temp = name.split(' ')
        if (temp.length > 1) {
            return (temp[0][0] + temp[1][0]).toUpperCase()
        } else {
            return (temp[0][0]).toUpperCase()
        }
    }

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
        (text.length > 0) ? btnRef.current.style.color = 'blue' : btnRef.current.style.color = 'gray'
    }, [text])

    return (
        <div className='notes-section'>
            <div className="notes-header">
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
                <span className='send' ref={btnRef}>
                    <IoSendSharp onClick={handleNotes} />
                </span>
            </div>
        </div>
    )
}

export default NotesSection

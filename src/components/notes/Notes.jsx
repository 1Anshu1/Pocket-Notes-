import React, { useContext } from 'react'
import NotesBanner from '../notesBanner/NotesBanner'
import NotesSection from '../notesSection/NotesSection'
import { Context } from '../../Context';


const Notes = () => {
    const { currentGroup } = useContext(Context)
    return (
        <>
            {currentGroup ? <NotesSection /> : <NotesBanner />}
        </>
    )
}

export default Notes

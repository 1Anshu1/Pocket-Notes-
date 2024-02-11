import './App.css'

import { useEffect, useState } from 'react'


import GroupsArea from './components/groupsArea/GroupsArea'
import Notes from './components/notes/Notes'
import Modal from './components/modal/Modal'
import { Context } from './Context'

const App = () => {
  const [show, setShow] = useState(false)
  const [currentGroup, setCurrentGroup] = useState()
  const [hideNotes, setHideNotes] = useState(false)

  return (
    <div className='main'>
      <Context.Provider value={{ setShow, currentGroup, setCurrentGroup, setHideNotes }}>
        <GroupsArea />
        {!hideNotes && <Notes />}
        {show && <Modal />}
      </Context.Provider>
    </div>
  )
}

export default App

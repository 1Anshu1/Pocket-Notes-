import './App.css'

import { useState } from 'react'

import GroupsArea from './components/groupsArea/GroupsArea'
import Notes from './components/notes/Notes'
import Modal from './components/modal/Modal'
import { Context } from './Context'

const App = () => {
  const [show, setShow] = useState(false)
  const [currentGroup, setCurrentGroup] = useState()

  return (
    <div className='main'>
      <Context.Provider value={{ setShow, currentGroup, setCurrentGroup }}>
        <GroupsArea />
        <Notes />
        {show && <Modal />}
      </Context.Provider>
    </div>
  )
}

export default App

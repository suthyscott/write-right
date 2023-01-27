import {useState} from 'react'
import AddSession from './AddSession'
import AddProject from './AddProject'

const ToggleAdd = () => {
  const [project, setProject] = useState(true)
  return (
    <div>
      {project ? <AddProject/> : <AddSession/>}

      <button onClick={() => setProject(!project)}>Do you want to add a {project ? 'session?' : 'project?'}</button>
    </div>
  )
}

export default ToggleAdd
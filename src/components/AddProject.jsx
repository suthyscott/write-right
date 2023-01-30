import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import authContext from '../store/authContext'

const AddProject = () => {
  const [projectTypes, setProjectTypes] = useState([])
  const [selectedProjectType, setSelectedProjectType] = useState(null)
  const [projectName, setProjectName] = useState('')
  const [projectDesc, setProjectDesc] = useState('')
  const authCtx = useContext(authContext)

  useEffect(() => {
    console.log('hit useEffect')
    axios.get('/api/types')
      .then(res => {
        console.log(res.data)
        setProjectTypes(res.data)
        setSelectedProjectType(res.data[0].id)
      })
      .catch(err => console.log(err))
  },[])

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('/api/projects', {projectName, projectDesc, selectedProjectType, userId: authCtx.userId})
      .then(res => {
        console.log(res.data)

        setProjectDesc('')
        setProjectName('')
        setSelectedProjectType(projectTypes[0].id)
      })
  }

  console.log(selectedProjectType)
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <select value={selectedProjectType} onChange={e => setSelectedProjectType(e.target.value)}>
        {projectTypes.map(type => {
          return <option value={type.id}>{type.projectTypeName}</option>
        })}
      </select>
      <input placeholder='Project Name' value={projectName} onChange={e => setProjectName(e.target.value)}/> 
      <textarea placeholder='Project Description' value={projectDesc} onChange={e => setProjectDesc(e.target.value)}/> 
      <button>submit</button>
    </form>
  )
}

export default AddProject
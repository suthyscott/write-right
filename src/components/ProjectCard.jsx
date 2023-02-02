import {useState} from 'react'
import axios from 'axios'

const ProjectCard = ({project, getAllUserProjects}) => {
  const [editing, setEditing] = useState(false)
  const [projectName, setProjectName] = useState(project.projectName)
  const [desc, setDesc] = useState(project.desc)

  const handleEditProject = e => {
    e.preventDefault()

    axios.put(`/api/projects`, {projectName, desc, id: project.id})
      .then(res => {
        setEditing(false)
        getAllUserProjects()
      })
      .catch(err => console.log(err))
  }
   
  return (
    editing ? 
    <form onSubmit={e => handleEditProject(e)}>
      <input value={projectName} onChange={e => setProjectName(e.target.value)}/>
      <textarea value={desc} onChange={e => setDesc(e.target.value)} />
      <button>Save Changes</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </form> 
    : 
    <div className='border border-green-500'>
        <h1>{project.projectName}</h1>
        <p>{project.desc}</p>
        <button onClick={() => setEditing(true)}>Edit</button>
    </div>
  )
}

export default ProjectCard
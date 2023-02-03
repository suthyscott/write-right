import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import AuthContext from "../store/authContext"

const SessionDisplay = () => {
    const { id } = useParams()
    const [sessionDetails, setSessionDetails] = useState({})
    const [editing, setEditing] = useState(false)
    const [notes, setNotes] = useState(null)
    const [length, setLength] = useState(null)
    const [date, setDate] = useState(null)
    const [projects, setProjects] = useState([])
    const [selectedProjectId, setSelectedProjectId] = useState(null)
    const { userId } = useContext(AuthContext)

    const getSessionDetails = () => {
        console.log(typeof id)
        axios.get(`/api/session/${+id}`).then(res => {
            console.log(res.data)
            setSessionDetails(res.data)
            setDate(res.data.date)
            setNotes(res.data.notes)
            setLength(res.data.length)
            setSelectedProjectId(res.data.projectId)
        })
    }

    const getUserProjects = () => {
        axios.get(`/api/projects/${userId}`).then(res => {
            console.log(res.data)
            setProjects(res.data)
        })
    }

    useEffect(() => {
        getSessionDetails()
        getUserProjects()
    }, [])

    const handleSubmitUpdate = e => {
      e.preventDefault()

      axios.put('/api/session', {notes,length, date, sessionId: id, projectId: selectedProjectId})
        .then(res => {
          console.log(res.data)
          setSessionDetails(res.data)
          setEditing(false)
          setSelectedProjectId(res.data.projectId)
        })
        .catch(err => console.log(err))
    }
    return editing ? (
        <form onSubmit={e => handleSubmitUpdate(e)}>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} />
            <input
                value={length}
                onChange={e => setLength(e.target.value)}
                type="number"
            />
            <input
                value={date}
                onChange={e => setDate(e.target.value)}
                type="date"
            />
            <select
                value={selectedProjectId}
                onChange={e => setSelectedProjectId(e.target.value)}
            >
                {projects.map(project => {
                    console.log("hit", project)
                    return (
                        <option value={project.id}>
                            {project.projectName}
                        </option>
                    )
                })}
            </select>
            <button onClick={() => setEditing(false)}>Cancel</button>
            <button>Submit</button>
        </form>
    ) : (
        <div>
            <p>Session length:{sessionDetails.length}</p>
            <p>Date of Session: {sessionDetails.date}</p>
            <p>{sessionDetails.notes}</p>
            <p>relevant project: {sessionDetails.project?.projectName}</p>
            <button onClick={() => setEditing(true)}>Edit</button>
        </div>
    )
}

export default SessionDisplay

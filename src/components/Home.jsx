import { useState, useEffect, useContext } from "react"
import axios from "axios"
import AuthContext from "../store/authContext"
import SessionCard from "./SessionCard"
import ProjectCard from "./ProjectCard"

const Home = () => {
    const [projects, setProjects] = useState([])
    const [sessions, setSessions] = useState([])
    const { userId } = useContext(AuthContext)

    const getAllUserProjects = () => {
        axios
            .get(`/api/projects/${userId}`)
            .then(res => {
                // console.log(res.data)
                setProjects(res.data)
            })
            .catch(err => console.log(err))
    }

    const getAllUserSessions = () => {
        axios
            .get(`/api/sessions/${userId}`)
            .then(res => {
                // console.log(res.data)
                setSessions(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllUserProjects()
        getAllUserSessions()
    }, [])

    const sessionDisplay = sessions.map(sesh => {
        return <SessionCard session={sesh} key={sesh.id}/>
    })

    const projectDisplay = projects.map(proj => {
        return <ProjectCard project={proj} getAllUserProjects={getAllUserProjects} key={proj.id}/>
    })
    return (
        <main className="flex w-full">
            <section className="border border-red-600 w-2/4">{projectDisplay}</section>
            <section className="border border-blue-600 w-2/4">{sessionDisplay}</section>
        </main>
    )
}

export default Home

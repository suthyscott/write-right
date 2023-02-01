import { useState, useEffect, useContext } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import AuthContext from "../store/authContext"
import axios from "axios"

const schema = yup.object({
  notes: yup.string().required(),
  length:  yup.number().positive().integer().required()
}).required()

const AddSession = () => {
    const [value, setValue] = useState(new Date())
    const [projects, setProjects] = useState([])
    const [selectedProjectId, setSelectedProjectId] = useState(null)

    const { register, handleSubmit } = useForm({
      resolver: yupResolver(schema)
    })

    const {userId} = useContext(AuthContext)

    const onSubmit = data => {
        data.date = value
        data.selectedProjectId = selectedProjectId
        data.userId = userId
        console.log(data)
        axios.post('/api/sessions', data)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        axios.get(`/api/projects/${userId}`)
            .then(res => {
                console.log(res.data)
                setProjects(res.data)
            })
    },[])

    console.log(selectedProjectId)
    return (
        <div>
            AddSession
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Length"
                    type="number"
                    {...register("length")}
                />
                <label>Minutes</label>
                <textarea placeholder="notes" {...register("notes")} />
                <select value={selectedProjectId} onChange={e => setSelectedProjectId(e.target.value)}>
                    {projects.map(project => {
                        console.log('hit', project)
                        return <option value={project.id}>{project.projectName}</option>
                    })}
                </select>
                <Calendar onChange={setValue} value={value} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default AddSession

import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  notes: yup.string().required(),
  length:  yup.number().positive().integer().required()
}).required()

const AddSession = () => {
    const [value, setValue] = useState(new Date())
    const { register, handleSubmit } = useForm({
      resolver: yupResolver(schema)
    })

    const onSubmit = data => {
        data.date = value
        console.log(data)
    }
    // console.log(value)
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
                <Calendar onChange={setValue} value={value} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default AddSession

import {useState, useEffect} from 'react'
import axios from 'axios'

const AddProject = () => {
  const [projectTypes, setProjectTypes] = useState('')

  useEffect(() => {
    console.log('hit useEffect')
    axios.get('/api/types')
      .then(res => {
        console.log(res.data)
        setProjectTypes(res.data)
      })
      .catch(err => console.log(err))
  },[])
  return (
    <form>
      <input placeholder='Project Name'/> 
      <input placeholder='Project Description'/> 
      <select>

      </select>
    </form>
  )
}

export default AddProject
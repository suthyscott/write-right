import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SessionDisplay = () => {
  const {id} = useParams()
  const [sessionDetails, setSessionDetails] = useState({})
  
  const getSessionDetails = () => {
    console.log(typeof id)
    axios.get(`/api/session/${+id}`)
      .then(res => {
        console.log(res.data)
        setSessionDetails(res.data)
      })
  }

  useEffect(()=> {
    getSessionDetails()
  },[])
  return (
    <div>SessionDisplay</div>
  )
}

export default SessionDisplay
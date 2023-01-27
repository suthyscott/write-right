import {useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import AuthContext from '../store/authContext'

const Auth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [penName, setPenName] = useState('')
  const [register, setRegister] = useState(false)
  const navigate = useNavigate()

  const authCtx = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault()

    const body = {
      username, 
      password,
      penName
    }

    axios.post(register ? '/api/register' : '/api/login', body)
      .then(res => {
        console.log('hit .then')
        authCtx.login(res.data.token, res.data.exp, res.data.userId)
        navigate('/home')
      })
      .catch(err => alert(err.response.data))
  }

  return (
    <div>
      {register ? (
        <form onSubmit={e => handleSubmit(e)}>
            <h2>Welcome to WriteRight! Please sign up below. </h2>
            <input placeholder='username' onChange={e => setUsername(e.target.value)}/>
            <input placeholder='password' onChange={e => setPassword(e.target.value)}/>
            <input placeholder='penName' onChange={e => setPenName(e.target.value)}/>
            <button>Submit</button>

        </form>
      ) : (
        <form onSubmit={e => handleSubmit(e)}>
           <h2>Welcome to WriteRight! Please login below. </h2>
            <input placeholder='username' onChange={e => setUsername(e.target.value)}/>
            <input placeholder='password' onChange={e => setPassword(e.target.value)}/>
            <button>Submit</button>
        </form>
      )}
      <button onClick={() => setRegister(!register)}>Need to {register ? 'login?' : 'register?'}</button>
    </div>
  )
}

export default Auth
import React from 'react'

const SessionCard = ({session}) => {
    const {notes, length, date} = session
  return (
    <div className='border border-yellow-300'>
        <p>{notes}</p>
        <h3>{length}</h3>
    <h3>{date}</h3>
    </div>
  )
}

export default SessionCard
import React from 'react'

const ProjectCard = ({project}) => {
    const {projecName, desc} = project
  return (
    <div>
        <h1>{projecName}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default ProjectCard
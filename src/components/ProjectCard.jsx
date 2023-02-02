import React from 'react'

const ProjectCard = ({project}) => {
    const {projectName, desc} = project
  return (
    <div className='border border-green-500'>
        <h1>{projectName}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default ProjectCard
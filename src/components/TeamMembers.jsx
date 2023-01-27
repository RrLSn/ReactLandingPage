import React from 'react'

const TeamMembers = ({img, name, role}) => {
  return (
    <div>
            <img className='img' src={img} alt="" />
            <h4>{name}</h4>
            <p>{role}</p>
            </div>
  )
}

export default TeamMembers
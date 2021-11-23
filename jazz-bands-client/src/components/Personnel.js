import React from 'react'

const Personnel = ({member}) => {
    return(
        <>
            <p>{member.name}</p>
            <p>{member.instrument}</p>
            <p>{member.bio}</p>
            <p>{member.picture}</p>
        </>
    )
}

export default Personnel
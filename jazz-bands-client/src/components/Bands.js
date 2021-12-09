import React from 'react'
import Band from './Band'

const Bands = ({bands}) => (
    <div>
        {bands.map(band => (
            <Band key={band.id} band={band}/>
        ))}
    </div>
)

export default Bands
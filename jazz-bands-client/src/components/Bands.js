import React from 'react'
import Band from './Band'

const Bands = ({bands, color}) => (
    <div>
        {bands.map(band => (
            <Band key={band.id} band={band} color={color}/>
        ))}
    </div>
)

export default Bands
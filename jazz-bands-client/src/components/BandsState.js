import React, {Component} from 'react'
import {bands} from '../data/bands'

class BandsState extends Component {

    constructor(){
        super();
        this.state = {
            bands: bands
        }
    }

    render(){
        return(
            <>
                <p>What do we have here??</p>
            </>
        )
    }

}

export default BandsState
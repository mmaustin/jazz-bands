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
            <div>
                <p>What do we have here??</p>
            </div>
        )
    }

}

export default BandsState
import React, {Component} from 'react'
import BandFile from './BandFile';
import Bands from './Bands';

class BandsState extends Component {

    constructor(){
        super();
        this.state = {
            bandName: "",
            playerOne: "",
            playerTwo: "",
            playerThree: "",
            playerFour: "",
            playerFive:  "",
            signatureSong: "",
            allBands: []
        }
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    render(){

        return(
            <div>
                <BandFile handleChange={this.handleChange} state={this.state}/>
                {this.state.allBands.map((band, index) => <Bands key={index} band={band}/>)}
                
            </div>
        )
    }

}

export default BandsState
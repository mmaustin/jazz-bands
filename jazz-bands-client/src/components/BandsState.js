import React, {Component} from 'react'
//import BandFile from './BandFile';
//import Bands from './Bands';

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
                <form onSubmit={this.handleSubmit}>
                    Band Name:
                    <input
                        type='text'
                        name='bandName'
                        onChange={this.props.handleChange}
                        value={this.props.state.bandName}
                    />
                    Name:
                    <input
                        type='text'
                        name='playerOne'
                        onChange={this.props.handleChange}
                        value={this.props.state.playerOne}
                    />
                    Name:
                    <input
                        type='text'
                        name='playerTwo'
                        onChange={this.props.handleChange}
                        value={this.props.state.playerTwo}
                    />
                    Name:
                    <input
                        type='text'
                        name='playerThree'
                        onChange={this.props.handleChange}
                        value={this.props.state.playerThree}
                    />
                    Name:
                    <input
                        type='text'
                        name='playerFour'
                        onChange={this.props.handleChange}
                        value={this.props.state.playerFour}
                    />
                    Name:
                    <input
                        type='text'
                        name='playerFive'
                        onChange={this.props.handleChange}
                        value={this.props.state.playerFive}
                    />
                    Signature Song:
                    <input
                        type='text'
                        name='signatureSong'
                        onChange={this.props.handleChange}
                        value={this.props.state.signatureSong}
                    />
                    <input type="submit"/>
                </form>            
            </div>
        )
    }

}

export default BandsState
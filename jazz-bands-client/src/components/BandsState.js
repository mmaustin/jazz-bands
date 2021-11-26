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

    handleSubmit = (e) => {
        e.preventDefault();
        let formData = {
            bandName: this.state.bandName,
            playerOne: this.state.playerOne,
            playerTwo: this.state.playerTwo,
            playerThree: this.state.playerThree,
            playerFour: this.state.playerFour,
            playerFive: this.state.playerFive,
            signatureSong: this.state.signatureSong
        };
        let data = this.state.allBands.concat(formData);
         this.setState({allBands: data})
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
                        onChange={this.handleChange}
                        value={this.props.state.bandName}
                    />
                    Name:
                    <input
                        type='text'
                        name='playerOne'
                        onChange={this.handleChange}
                        value={this.state.playerOne}
                    />
                    Name:
                    <input
                        type='text'
                        name='playerTwo'
                        onChange={this.handleChange}
                        value={this.state.playerTwo}
                    />
                    Name:
                    <input
                        type='text'
                        name='playerThree'
                        onChange={this.handleChange}
                        value={this.state.playerThree}
                    />
                    Name:
                    <input
                        type='text'
                        name='playerFour'
                        onChange={this.handleChange}
                        value={this.state.playerFour}
                    />
                    Name:
                    <input
                        type='text'
                        name='playerFive'
                        onChange={this.handleChange}
                        value={this.state.playerFive}
                    />
                    Signature Song:
                    <input
                        type='text'
                        name='signatureSong'
                        onChange={this.handleChange}
                        value={this.state.signatureSong}
                    />
                    <input type="submit"/>
                </form>            
            </div>
        )
    }

}

export default BandsState
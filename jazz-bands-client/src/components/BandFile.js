import React, {Component} from 'react'
//import Band from './Band'

class BandFile extends Component {
    /*this.handleSubmit = (event) => {
        event.preventDefault();
        let formData = {
          firstName: this.this.props.state.firstName,
          lastName: this.this.props.state.lastName,
        };
        let dataArray = this.this.props.state.submittedData.concat(formData);
        this.setState({ submittedData: dataArray });
      };*/

    
    handleSubmit = (e) => {
        e.preventDefault();
        let formData = {
            bandName: this.props.state.bandName,
            playerOne: {name: this.props.state.playerOne.name, instrument: this.props.state.playerOne.instrument},
            playerTwo: {name: this.props.state.playerTwo.name, instrument: this.props.state.playerTwo.instrument},
            playerThree: {name: this.props.state.playerThree.name, instrument: this.props.state.playerThree.instrument},
            playerFour: {name: this.props.state.playerFour.name, instrument: this.props.state.playerFour.instrument},
            playerFive: {name: this.props.state.playerFive.name, instrument: this.props.state.playerFive.instrument},
            signatureSong: this.props.state.signatureSong
        };
        let data = this.props.state.allBands.concat(formData);
        this.setState({allBands: data})
        console.log(data)
    }

    render() {
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

export default BandFile


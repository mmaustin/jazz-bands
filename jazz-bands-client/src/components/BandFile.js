import React from 'react'
//import Band from './Band'

const BandFile = ({handleChange, state}) => {
    /*this.handleSubmit = (event) => {
        event.preventDefault();
        let formData = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
        };
        let dataArray = this.state.submittedData.concat(formData);
        this.setState({ submittedData: dataArray });
      };*/

    
    this.handleSubmit =(e) => {
        e.preventDefault();
        let formData = {
            bandName: state.bandName,
            playerOne: {name: state.playerOne.name, instrument: state.playerOne.instrument},
            playerTwo: {name: state.playerTwo.name, instrument: state.playerTwo.instrument},
            playerThree: {name: state.playerThree.name, instrument: state.playerThree.instrument},
            playerFour: {name: state.playerFour.name, instrument: state.playerFour.instrument},
            playerFive: {name: state.playerFive.name, instrument: state.playerFive.instrument},
            signatureSong: state.signatureSong
        }
    }

    
    return(
        <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                Band Name:
                <input
                    type='text'
                    name='bandName'
                    onChange={handleChange}
                    value={state.bandName}
                />
                Name:
                <input
                    type='text'
                    name='playerOne'
                    onChange={handleChange}
                    value={state.playerOne.name}
                />
                Instrument:
                <input
                    type='text'
                    name='playerOne'
                    onChange={handleChange}
                    value={state.playerOne.instrument}
                />
                Name:
                <input
                    type='text'
                    name='playerTwo'
                    onChange={handleChange}
                    value={state.playerTwo.name}
                />
                Instrument:
                <input
                    type='text'
                    name='playerTwo'
                    onChange={handleChange}
                    value={state.playerTwo.instrument}
                />
                Name:
                <input
                    type='text'
                    name='playerThree'
                    onChange={handleChange}
                    value={state.playerThree.name}
                />
                Instrument:
                <input
                    type='text'
                    name='playerThree'
                    onChange={handleChange}
                    value={state.playerThree.instrument}
                />
                Name:
                <input
                    type='text'
                    name='playerFour'
                    onChange={handleChange}
                    value={state.playerFour.name}
                />
                Instrument:
                <input
                    type='text'
                    name='playerFour'
                    onChange={handleChange}
                    value={state.playerFour.instrument}
                />
                Name:
                <input
                    type='text'
                    name='playerFive'
                    onChange={handleChange}
                    value={state.playerFive.name}
                />
                Instrument:
                <input
                    type='text'
                    name='playerFive'
                    onChange={handleChange}
                    value={state.playerFive.instrument}
                />
                Signature Song:
                <input
                    type='text'
                    name='signatureSong'
                    onChange={handleChange}
                    value={state.signatureSong}
                />
            </form>
        </div>
    )
}

export default BandFile


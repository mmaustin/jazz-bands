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
            playerOne: this.props.state.playerOne,
            playerTwo: this.props.state.playerTwo,
            playerThree: this.props.state.playerThree,
            playerFour: this.props.state.playerFour,
            playerFive: this.props.state.playerFive,
            signatureSong: this.props.state.signatureSong
        };
        let data = this.props.state.allBands.concat(formData);
        //this.setState({props.state.allBands: data}, () => console.log(data))
       console.log(this.props.state.allBands = data);
        
    
    }

    render() {
        let a = this.props.state.allBands.map((b, i) => {
            return <li>{b.bandName}</li>
        })
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
            <p>{a}</p>
        </div>
    )
    }
}

export default BandFile


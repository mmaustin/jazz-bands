import React from 'react'
//import Band from './Band'

const BandFile = ({handleChange, state}) => {
    return(
        <div>
            <form>
                <input
                    type='text'
                    name='bandName'
                    onChange={handleChange}
                    value={state.bandName}
                />
            </form>
        </div>
    )
}

export default BandFile

/*
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            onChange={(event) => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            name="lastName"
            onChange={(event) => this.props.handleChange(event)}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
*/
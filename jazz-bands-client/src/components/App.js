import React, { Component } from 'react';
//import RouterComponent from './RouterComponent';
import {bands} from '../data/Bands'

class App extends Component {
    

  render() { 
    let a = bands.map(b => b.personnel.map(m => {
        return(
            <>
                <p>{m.name}</p>
                <p>{m.instrument}</p>
            </>
        )
    }))

    return (
      <div>
        <p>{a}</p>
      </div>
    );
  }
};

export default App;
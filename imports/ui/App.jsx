import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Pic from './Pic';

import { Pics } from '../api/pics';

class App extends Component {

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton
            label="Oh Yeah we did it"
            onTouchTap={() => {
              console.log('it works')
            }}
          />
        </MuiThemeProvider>

        <ul>
        {/*Display pics from instagram*/}
        <Pic/>
        </ul>

      </div>
    );
  }
}

export default createContainer(() => {
  // subscribe api after removing autopublish

  return {
    pics: Pics.find({}).fetch(),
  }
}, App);



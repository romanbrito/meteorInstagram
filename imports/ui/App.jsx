import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Pic from './Pic';

export default class App extends Component {

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

        {/*Display pics from instagram*/}
        <Pic/>

      </div>
    );
  }
}


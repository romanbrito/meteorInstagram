import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Pic from './Pic';

import { Pics } from '../api/pics';

class App extends Component {

  getPics() {
    return [
      { _id: 1, imageURL: 'This is task 1' },
      { _id: 2, imageURL: 'This is task 2' },
      { _id: 3, imageURL: 'This is task 3' },
    ];
  }

  renderPics() {
    console.log("api " + this.props.pics);

    return this.getPics().map((pic) => (
      <Pic key={pic._id} pic={pic}/>
    ));
  }

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
          {this.renderPics()}

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



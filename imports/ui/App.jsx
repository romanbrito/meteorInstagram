import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


import Pic from './Pic';

import { Pics } from '../api/pics';

class App extends Component {

  getPics() {
    console.log("getpics");
    Meteor.call('getInstagram', (error) => {
      if (error) {
        console.log("error " + error.reason);
      } else {
        console.log("Instagram api ok");
      }
    });
    // return [
    //   { _id: 1, imageURL: 'This is task 1' },
    //   { _id: 2, imageURL: 'This is task 2' },
    //   { _id: 3, imageURL: 'This is task 3' },
    // ];
  }

  renderPics() {
    console.log("api " + this.props.pics);

    return this.props.pics.map((pic) => (
      <Pic key={pic._id} pic={pic}/>
    ));
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton
            label="Oh Yeah we did it"
            onTouchTap={this.getPics}
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



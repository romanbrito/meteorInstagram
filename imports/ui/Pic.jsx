import React, {Component} from 'react';

export default class Pic extends Component {

  render() {
    {console.log(this.props.pic)}
    return(
      <li>image {this.props.pic.imageURL}</li>
    );
  }
}
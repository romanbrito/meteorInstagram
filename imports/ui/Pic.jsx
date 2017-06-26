import React, {Component} from 'react';

export default class Pic extends Component {

  render() {
    {
      console.log(this.props.pic)
    }
    return (
      <li>
        <img src={this.props.pic.imageURL} alt={this.props.pic.imageURL}/>
      </li>
    );
  }
}
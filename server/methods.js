import {Meteor} from 'meteor/meteor';
import {HTTP} from 'meteor/http';
import { Pics } from '../imports/api/pics'

Meteor.methods({


  getInstagram() {
    this.unblock();
    try {
      const access_token = '3959116306.6ae6b94.93ae2da0898848099338d9cde7ac0ad2';
      const result = HTTP.call('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + access_token,
        {});
      console.log(result.data.data[0].images.standard_resolution.url);

      Pics.insert({
        imageURL: result.data.data[0].images.standard_resolution.url
      });

      return true;
    } catch (e) {
      return false;
    }
  }

});

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

      //console.log(result.data.data[0].images.standard_resolution.url);
      // Pics.insert({
      //   imageURL: result.data.data[0].images.standard_resolution.url
      // });

      //Pics.findOne({picID: "1345705685769430046_3959116306"}, {picID:1});


      result.data.data.map(function (element) {
        //console.log( Pics.findOne({picID: element.id}, {picID:1}));
        if ( !Pics.findOne({picID: element.id}, {picID:1}) ) {

        //console.log("Find picID " + element.id);


          Pics.insert({
            imageURL: element.images.standard_resolution.url,
            picID: element.id
          });

        }
      });



      return true;
    } catch (e) {
      return false;
    }
  }

});

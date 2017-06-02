import { Mongo } from 'meteor/mongo';

export const Blogs = new Mongo.Collection('blogs');

if (Meteor.isServer) {
  Meteor.publish('blogs', function() {
   return Blogs.find({});
 });
}

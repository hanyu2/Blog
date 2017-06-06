import { Mongo } from 'meteor/mongo';

export const BlogTags = new Mongo.Collection('blog_tags');

if (Meteor.isServer) {
  Meteor.publish('blog_tags', function() {
   return BlogTags.find({});
  });
}

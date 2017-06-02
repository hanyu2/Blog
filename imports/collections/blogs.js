import { Mongo } from 'meteor/mongo';

export const Blogs = new Mongo.Collection('blogs');

if (Meteor.isServer) {
  Meteor.publish('blogs', function() {
     return Blogs.find({});
   });

   Meteor.publish("singleBlog", function(blog_id) {
    let blog = Apps.find({_id : blog_id});
    return blog;
  });
}

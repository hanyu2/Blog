import { Mongo } from 'meteor/mongo';

if (Meteor.isServer) {
  Meteor.publish('blog_tags', function() {
   return BlogTags.find({});
  });
}

Meteor.methods({
  'blog_tags.insert': function(newTag) {
    BlogTags.insert({
      name: newTag
    });
  }
});


export const BlogTags = new Mongo.Collection('blog_tags');

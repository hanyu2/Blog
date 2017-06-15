import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'blog_comments.insert': function(comment, blogId) {
    BlogComments.insert({
      comment: comment,
      blogId : blogId,
      date: new Date()
    })
  }
});

export const BlogComments = new Mongo.Collection('blog_comments');

import { Mongo } from 'meteor/mongo';

if (Meteor.isServer) {
  Meteor.publish('blog_comment', function(blogId) {
   return BlogComments.find({blogId: blogId});
  });
}

Meteor.methods({
  'blog_comments.insert': function(comment, blogId, userName) {
    BlogComments.insert({
      comment: comment,
      blogId : blogId,
      userName : userName,
      date: new Date()
    })
  }
});

export const BlogComments = new Mongo.Collection('blog_comments');

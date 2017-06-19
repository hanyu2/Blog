import { Mongo } from 'meteor/mongo';
import Blogs from './blogs.js';

if (Meteor.isServer) {
  Meteor.publish('blog_comment', function(blogId) {
   return blogComments = BlogComments.find({blogId: blogId}, {sort :{date : 1}});
  });
  Meteor.publish('comment_unread', function() {
   return BlogComments.find({read: false});
  });
}

Meteor.methods({
  'blog_comments.insert': function(comment, blogId, userName) {
    BlogComments.insert({
      comment: comment,
      blogId : blogId,
      userName : userName,
      date: new Date(),
      read: false
    });
    Meteor.call('blog_increment_comments', blogId);
  },
  'blog_comment.setRead': function(commentId){
    console.log(commentId);
    BlogComments.update({_id : commentId}, {$set:{read : true}})
  }
});

export const BlogComments = new Mongo.Collection('blog_comments');

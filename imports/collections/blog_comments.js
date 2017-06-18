import { Mongo } from 'meteor/mongo';

if (Meteor.isServer) {
  Meteor.publish('blog_comment', function(blogId) {
   return BlogComments.find({blogId: blogId});
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
    })
  },
  'blog_comment.setRead': function(commentId){
    console.log(commentId);
    BlogComments.update({_id : commentId}, {$set:{read : true}})
  }
});

export const BlogComments = new Mongo.Collection('blog_comments');

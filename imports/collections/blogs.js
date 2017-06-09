import { Mongo } from 'meteor/mongo';

if (Meteor.isServer) {
  Meteor.publish('blogs', function() {
     return Blogs.find({});
   });

   Meteor.publish("singleBlog", function(blog_id) {
    let blog = Apps.find({_id : blog_id});
    return blog;
  });
}

Meteor.methods({
  'blogs.insert': function(title, content, tags) {
    return Blogs.insert({
      createdAt: new Date(),
      title: title,
      tag: tags,
      author: this.userId,
      content: content,
      view: 0,
      comments: 0,
      likes: 0,
    });
  }
});

export const Blogs = new Mongo.Collection('blogs');

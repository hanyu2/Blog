import {
  Mongo
} from 'meteor/mongo';

if (Meteor.isServer) {
  Meteor.publish('blogs', function() {
    return Blogs.find({});
  });

  Meteor.publish("singleBlog", function(blog_id) {
    let blog = Apps.find({
      _id: blog_id
    });
    return blog;
  });
  Meteor.publish("tagBlog", function(blog_tag) {
    let blog = Apps.find({
      tag: blog_tag
    });
    return blog;
  });
}

Meteor.methods({
  'blogs.insert': function(title, content, tags, status) {
    return Blogs.insert({
      createdAt: new Date(),
      title: title,
      tag: tags,
      status: status,
      author: this.userId,
      content: content,
      view: 0,
      comments: 0,
      likes: 0,
    });
  },
  'blogs.delete': function(blog) {
    Blogs.remove(blog);
  }
});

export const Blogs = new Mongo.Collection('blogs');

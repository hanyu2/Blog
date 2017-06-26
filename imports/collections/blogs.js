import {Mongo} from 'meteor/mongo';

if (Meteor.isServer) {
  Meteor.publish('blogs', function() {
    return Blogs.find({});
  });

  Meteor.publish("singleBlog", function(blog_id) {
    let blog = Blogs.find({
      _id: blog_id
    });
    return blog;
  });
  Meteor.publish("tagBlog", function(blog_tag) {
    let blog = Blogs.find({
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
      views: 0,
      comments: 0,
      likes: 0,
    });
  },
  'blogs.delete': function(blog) {
    Blogs.remove(blog);
  },
  'blogs.update' : function(blogId, blogTitle, blogContent){
    Blogs.update({_id : blogId}, {$set:{title : blogTitle, content:blogContent}})
  },
  'blog_increment_views' : function(blogId){
    Blogs.update({_id : blogId}, {$inc: {views: 1}});
  },
  'blog_increment_comments' : function(blogId){
    Blogs.update({_id : blogId}, {$inc: {comments: 1}});
  }
});

export const Blogs = new Mongo.Collection('blogs');

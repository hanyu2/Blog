import {Posts} from '../imports/collections/posts.js';


if (Posts.find().count() === 0) {
  Posts.insert({
    postId: 12345,
    title: 'test blog',
    tag: 'test',
    author: 'Han',
    submitted: new Date().getTime(),
    content: 'Interesting project Sacha, can I get involved?',
    views: 0,
    comments: 0,
    likes: 0,
  });
  Posts.insert({
    postId: 12346,
    title: 'test blog 222',
    tag: 'test',
    author: 'Han',
    submitted: new Date().getTime(),
    content: 'test222',
    views: 0,
    comments: 0,
    likes: 0,
  });
  console.log("empty");
};

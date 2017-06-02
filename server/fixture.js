import {Blogs} from '../imports/collections/blogs.js';

if (Blogs.find().count() === 0) {
  Blogs.insert({
    blogId: 12345,
    title: 'test blog',
    tag: 'test',
    author: 'Han',
    submitted: new Date().getTime(),
    content: 'Interesting project Sacha, can I get involved?',
    views: 0,
    comments: 0,
    likes: 0,
  });
  Blogs.insert({
    blogId: 12346,
    title: 'test blog 222',
    tag: 'test',
    author: 'Han',
    submitted: new Date().getTime(),
    content: 'test222',
    views: 0,
    comments: 0,
    likes: 0,
  });
  Blogs.insert({
    blogId: 12347,
    title: 'test remote connection',
    tag: 'test',
    author: 'Han',
    submitted: new Date().getTime(),
    content: 'test remote connection',
    views: 0,
    comments: 0,
    likes: 0,
  });
};

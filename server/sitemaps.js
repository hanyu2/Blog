import {Blogs} from '../imports/collections/blogs.js';


sitemaps.add('/sitemap.xml', function() {
  // required: page
  // optional: lastmod, changefreq, priority, xhtmlLinks, images, videos
  return [
    { page: '/blog', lastmod: lastDate}
  ];
})

sitemaps.config('gzip', true);

sitemaps.add('/sitemap.xml', function(req) {
  // NOTE: req is the Node request object, use it when you need to retrieve information (host, port, protocol ...)
  // check out more in ./example/example.js

  var out = [], blogs = Blogs.find().fetch();
  _.each(blogs, function(blog) {
    out.push({
      page: 'blog/' + blog._id,
      lastmod: blog.createdAt
    });
  });
  return out;
});

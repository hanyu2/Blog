import {Blogs} from '../imports/collections/blogs.js';
import {BlogTags} from '../imports/collections/blog_tags.js';
import {BlogComment} from '../imports/collections/blog_comments.js';

Meteor.startup(() => {

    const prerenderio = Npm.require('prerender-node');
    const settings = Meteor.settings.PrerenderIO;

    if (settings && settings.token && settings.host) {
        prerenderio.set('prerenderToken', settings.token);
        prerenderio.set('host', settings.host);
        prerenderio.set('protocol', 'https');
        WebApp.rawConnectHandlers.use(prerenderio);
    }

});

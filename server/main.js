import { Meteor } from 'meteor/meteor';
import { Blogs } from '../imports/collections/blogs';

Meteor.startup(() => {
  Meteor.publish('blog', function() {
   return Blogs.find({});
 });
});

import {combineReducers} from 'redux';
import ContentReducer from './contentReducer.js';
import TagReducer from './tagReducer.js';

const BlogReducer = combineReducers({
    content: ContentReducer,
    tag : TagReducer
});

export default BlogReducer;

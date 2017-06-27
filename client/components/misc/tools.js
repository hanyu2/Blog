import React, {Component} from 'react';
import BlogHeader from '../blogs/blogHeader.js';

class Tools extends Component{
  replace(){
    const originText = $("textarea#origin").val();
    var res = originText.replace(/\[/g, "{").replace(/]/g, "}");
    $("textarea#new").val(res);
  }

  render(){
    return(
      <div>
        <BlogHeader />
        <div className="form-group margin-around">
          <label>Replace &#91;&#93; with &#123;&#125;</label>
          <textarea className="form-control" rows="5" id="origin"></textarea>
          <button type="button" className="btn btn-primary margin-top" onClick={this.replace.bind(this)}>Replace</button>
          <textarea className="form-control margin-top" rows="5" id="new"></textarea>
        </div>
        <script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=n&d=ZjgODejSXYciluSG2DZy-SNHRBdQ2PBUL8BhVVJBoY8'></script>
      </div>
    )
  }
}

export default Tools;

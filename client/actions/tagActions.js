export function selectTag(tagName){
  console.log(tagName);
  return{
    type:"SELECT_TAG",
    tag: tagName
  }
}

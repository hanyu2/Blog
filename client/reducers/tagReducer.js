export default function (state = null, action) {
    switch (action.type) {
        case 'SELECT_TAG':
          console.log(action);
          return action.tag;
          break;
    }
    return state;
}

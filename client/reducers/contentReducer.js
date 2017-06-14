export default function (state = {
  content:''
}, action) {
    switch (action.type) {
        case 'SET_CONTENT':
            return action.payload;
            break;
    }
    return state;
}

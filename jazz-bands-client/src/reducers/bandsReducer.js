export default function bandsReducer(
    state = {bands: []},
    action
) {
   switch (action.type){
    case "FETCH_BANDS":
        return {bands: action.payload}
    default:
        return state;
   } 
}
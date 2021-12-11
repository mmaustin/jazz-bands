export default function bandsReducer(
    state = {bands: []},
    action
) {
   switch (action.type){
    case "FETCH_BANDS":
        return {bands: action.payload};
    case "CAP_BANDS":
        return {bands: state.bands.map(b => b.band_name.toUpperCase())}
    default:
        return state;
   } 
}
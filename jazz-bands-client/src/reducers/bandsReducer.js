export default function bandsReducer(
    state = {bands: []},
    action
) {
   switch (action.type){
    case "FETCH_BANDS":
        return {bands: action.payload};
    case "CAP_BANDS":
        return {bands: state.bands.map(band => {return {...band, band_name: band.band_name
            .split( ' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ')}})}
    default:
        return state;
   } 
}
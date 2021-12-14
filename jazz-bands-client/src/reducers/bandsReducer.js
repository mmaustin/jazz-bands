export default function bandsReducer(
    state = {bands: []},
    action
) {
   switch (action.type){
    case "FETCH_BANDS":
        return {bands: action.payload};
    case "ADD_BAND":
        return {
            ...state,
            bands: [...state.bands, action.payload]
        };
    case "DELETE_BAND":
        return {
            ...state,
            bands: [...state.bands.filter(band => band.id !== action.payload)]
        }
    case "CAP_BANDS":
        return {bands: state.bands.map(band => {return {...band, band_name: band.band_name
            .split( ' ').map(word => word.toLowerCase()).join(' ')}})}
    default:
        return state;
   } 
}
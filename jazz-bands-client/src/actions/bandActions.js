export const fetchBands = () => {
    return (dispatch) => {
      fetch("http://localhost:3000/bands")
        .then((response) => response.json())
        .then((bands) => dispatch({ type: "FETCH_BANDS", payload: bands }));
    };
  }

  export const addBand = (band) => {
    return (dispatch) => {
      fetch("http://localhost:3000/bands", {
        method: 'POST',
        body: JSON.stringify(band),
        headers: {'Content-Type': 'application/json'}
      })
        .then((response) => response.json())
        .then((band) => dispatch({ type: "ADD_BAND", payload: band }));
    };
  }

export const capBands = () => {
  return {
    type: 'CAP_BANDS'
  }
}
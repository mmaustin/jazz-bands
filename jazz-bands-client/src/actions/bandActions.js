export const fetchBands = () => {
    return (dispatch) => {
      fetch("http://localhost:3000/bands")
        .then((response) => response.json())
        .then((bands) => dispatch({ type: "FETCH_BANDS", payload: bands }));
    };
  }

  export const capBands = id => {
    return {
      type: 'CAP_BANDS'
    }
  }
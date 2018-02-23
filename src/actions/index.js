
import axios from 'axios';
export const SAY_HELLO = 'SAY_HELLO';
export const FETCHING_LUKE = 'FETCHING_LUKE';
export const FETCHED_LUKE = 'FETCHED_LUKE';

export const sayHello = () => {
  return {
    type: SAY_HELLO,
    payload: 'Hello Luke!'
  }
};

export const fetchLuke = () => {
  // * using axios * to make api request
  const request = axios.get('https://swapi.co/api/people/1');
  // * redux thunk * can return a function for async fetching
  return dispatch => {
    // before the data is fetched, dispatch action to turn loading to true
    dispatch({ type: FETCHING_LUKE });
    // after the data is fetched
    // set time out to simulates a longer delay on api request
    setTimeout(()=>{
       request
      .then((res) => {
        // dispatch action
        dispatch({ type: FETCHED_LUKE, payload: res.data });
      })
      .catch((err) => {
        console.log('ERROR!', err);
      });
    }, 2000); 
  };
};
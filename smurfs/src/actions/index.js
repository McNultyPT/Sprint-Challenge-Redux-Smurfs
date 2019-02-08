import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR';
export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_ERROR = 'POST_SMURF_ERROR';
export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_ERROR = 'DELETE_SMURF_ERROR';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_SMURF_ERROR, payload: err }));
};

export const postSmurf = smurf => dispatch => {
  dispatch({ type: POST_SMURF_START });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({ type: POST_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: POST_SMURF_ERROR, payload: err }));
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_SMURF_ERROR, payload: err }));
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

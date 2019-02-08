import { 
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_ERROR,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_ERROR 
} from '../actions';
/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  postingSmurf: false,
  error: null
}

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case FETCH_SMURF_ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case POST_SMURF_START:
      return {
        ...state,
        postingSmurf: true  
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        postingSmurf: false
      };
    case POST_SMURF_ERROR:
      return {
        ...state,
        error: action.payload,
        postingSmurf: false
      }
    default:
      return state;
  }
}

export default reducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

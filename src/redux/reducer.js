import * as actionTypes from './actionTypes';

const initialState = {
  issues: {
    isFetched: false,
    entries: false,
    error: false
  },
  search: '',
};

//Thunk
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_ISSUES:
      return { ...state, search: action.payload};

    case actionTypes.FETCH_ISSUES_REQUEST:
      return { ...state, issues: { isFetched: false }};

    case actionTypes.FETCH_ISSUES_FAILURE:
      return { ...state, issues: { isFetched: true, error: action.payload }};
    
    case actionTypes.FETCH_ISSUES_SUCCESS:
      return { ...state, issues: { isFetched: true, entries: action.payload }};
  
    default:
      return state;
  }
}
import * as actionTypes from './actionTypes';
import api from '../api/api';

export const fetchIssues = () => async dispatch => {
  dispatch({
    type: actionTypes.FETCH_ISSUES_REQUEST
  });
  try{
    const issues = await api.get.issues();
    dispatch({
      type: actionTypes.FETCH_ISSUES_SUCCESS,
      payload: issues
    });
  } catch (e){
    dispatch({
      type: actionTypes.FETCH_ISSUES_FAILURE,
      payload: e
    })
  }
}
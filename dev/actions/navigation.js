import $ from 'jquery';
import { browserHistory } from 'react-router';
import store from '../store/store';

// User Pages
export let INDEX_PAGE_LOAD = 'INDEX_PAGE_LOAD';

// User Sign In Redirect
export function indexRedirect() {
  return (dispatch) => {
    browserHistory.push('/');
  }
}

export function loadIndexPage(){
  return {
    type: INDEX_PAGE_LOAD,
  }
}

// User Pages
export let USER_SIGN_IN_PAGE_LOAD = 'USER_SIGN_IN_PAGE_LOAD';
export let USER_SIGN_UP_PAGE_LOAD = 'USER_SIGN_UP_PAGE_LOAD';

// User Sign In Redirect
export function userSignInRedirect() {
  return (dispatch) => {
    browserHistory.push('/user/signin');
  }
}

export function loadUserSignInPage(){
  return {
    type: USER_SIGN_IN_PAGE_LOAD,
  }
}

// User Sign Up Redirect
export function userSignUpRedirect(id) {
  return(dispatch)  =>  {
    browserHistory.push('/user/signup');
  }
}

export function loadUserSignUpPage() {
  return {
    type: USER_SIGN_UP_PAGE_LOAD
  }
}


// Cattle Pages
export let CATTLE_INDEX_PAGE_LOAD = 'CATTLE_INDEX_PAGE_LOAD';
export let CATTLE_SHOW_PAGE_LOAD = 'CATTLE_SHOW_PAGE_LOAD';


// Cattle Index Redirect
export function cattleIndexRedirect() {
  return (dispatch) => {
    browserHistory.push('/cattle');
  }
}

export function loadCattleIndexPage(){
  return {
    type: CATTLE_INDEX_PAGE_LOAD,
  }
}

// Cattle Show Redirect
export function cattleShowRedirect(id) {
  return(dispatch)  =>  {
    browserHistory.push(`/cattle/${id}`);
  }
}

export function loadCattleShowPage(id) {
  return {
    type: CATTLE_SHOW_PAGE_LOAD,
    cattle_id: id
  }
}

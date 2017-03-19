import {createConstants} from '../utils/reduxHelper';

export default createConstants(
  'CALCULATE_FUEL_SAVINGS',
  'SAVE_FUEL_SAVINGS',

  // 登陆
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAILURE',

  // 媒体表单
  'MEDIA_FORM_SUBMIT_REQUEST',
  'MEDIA_FORM_SUBMIT_SUCCESS',
  'MEDIA_FORM_SUBMIT_FAILURE',

  // demo
  'USER_FETCH_REQUEST',
  'USER_FETCH_SUCCESS',
  'USER_FETCH_FAILURE',

  'PROGRESSBAR_START',
  'PROGRESSBAR_STOP',
  'PROGRESSBAR_SET_VALUE',

  'SIGN_IN_REQUEST',
  'SIGN_IN_SUCCESS',
  'SIGN_IN_FAILURE',

  'SIGN_UP_REQUEST',
  'SIGN_UP_SUCCESS',
  'SIGN_UP_FAILURE',

  'SIGN_OUT_REQUEST',
  'SIGN_OUT_SUCCESS',
  'SIGN_OUT_FAILURE',

  'NOTIFICATIONS_CREATE',
  'NOTIFICATIONS_CREATE_WITH_ID',
  'NOTIFICATIONS_REMOVE',

  'MODAL_SHOW',
  'MODAL_HIDE',

  'SEARCH_REQUEST',
  'SEARCH_SUCCESS',
  'SEARCH_FAILURE',

  'SEARCH_RESET',

  'SCROLL_BOTTOM'
);

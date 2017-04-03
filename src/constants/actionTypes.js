import {createConstants} from '../utils/reduxHelper';

export default {

  CLEAR_ALL: 'CLEAR_ALL',
  DELETE_ITEM: 'DELETE_ITEM',
  // 登陆
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  // 注册
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',

  // 登陆
  FORGET_REQUEST: 'FORGET_REQUEST',
  FORGET_SUCCESS: 'FORGET_SUCCESS',
  FORGET_FAILURE: 'FORGET_FAILURE',

  // 注册发送验证码
  SEND_CODE_SUCCESS: 'SEND_CODE_SUCCESS',


  // 媒体列表
  MEDIA_LIST_FETCH_REQUEST: 'MEDIA_LIST_FETCH_REQUEST',
  MEDIA_LIST_FETCH_SUCCESS: 'MEDIA_LIST_FETCH_SUCCESS',
  MEDIA_LIST_FETCH_FAILURE: 'MEDIA_LIST_FETCH_FAILURE',

  // 媒体表单获取
  MEDIA_FORM_FETCH_REQUEST: 'MEDIA_FORM_FETCH_REQUEST',
  MEDIA_FORM_FETCH_SUCCESS: 'MEDIA_FORM_FETCH_REQUEST',
  MEDIA_FORM_FETCH_FAILURE: 'MEDIA_FORM_FETCH_REQUEST',

  // 媒体表单提交
  MEDIA_FORM_SUBMIT_REQUEST: 'MEDIA_FORM_SUBMIT_REQUEST',
  MEDIA_FORM_SUBMIT_SUCCESS: 'MEDIA_FORM_SUBMIT_REQUEST',
  MEDIA_FORM_SUBMIT_FAILURE: 'MEDIA_FORM_SUBMIT_REQUEST',

  // 媒体表单更新
  MEDIA_FORM_UPDATE_REQUEST: 'MEDIA_FORM_UPDATE_REQUEST',
  MEDIA_FORM_UPDATE_SUCCESS: 'MEDIA_FORM_UPDATE_REQUEST',
  MEDIA_FORM_UPDATE_FAILURE: 'MEDIA_FORM_UPDATE_REQUEST',

  MEDIA_FORM_SET: 'MEDIA_FORM_SET',
  MEDIA_LIST_SET: 'MEDIA_LIST_SET',

  DELETE_MEDIA_ITEM: 'DELETE_MEDIA_ITEM',

  // 广告位列表
  AD_LIST_FETCH_REQUEST: 'AD_LIST_FETCH_REQUEST',
  AD_LIST_FETCH_SUCCESS: 'AD_LIST_FETCH_SUCCESS',
  AD_LIST_FETCH_FAILURE: 'AD_LIST_FETCH_FAILURE',

  // 广告位表单获取
  AD_FORM_FETCH_REQUEST: 'AD_FORM_FETCH_REQUEST',
  AD_FORM_FETCH_SUCCESS: 'AD_FORM_FETCH_REQUEST',
  AD_FORM_FETCH_FAILURE: 'AD_FORM_FETCH_REQUEST',

  // 媒体表单提交
  AD_FORM_SUBMIT_REQUEST: 'AD_FORM_SUBMIT_REQUEST',
  AD_FORM_SUBMIT_SUCCESS: 'AD_FORM_SUBMIT_REQUEST',
  AD_FORM_SUBMIT_FAILURE: 'AD_FORM_SUBMIT_REQUEST',

  // 媒体表单更新
  AD_FORM_UPDATE_REQUEST: 'AD_FORM_UPDATE_REQUEST',
  AD_FORM_UPDATE_SUCCESS: 'AD_FORM_UPDATE_REQUEST',
  AD_FORM_UPDATE_FAILURE: 'AD_FORM_UPDATE_REQUEST',

  SPEC_LIST_FETCH_SUCCESS: 'SPEC_LIST_FETCH_SUCCESS',

  AD_FORM_SET: 'AD_FORM_SET',
  AD_LIST_SET: 'AD_LIST_SET',

  DELETE_AD_ITEM: 'DELETE_AD_ITEM',


  // 屏蔽策略
  SHIELD_LIST_FETCH: 'SHIELD_LIST_FETCH',

  // 屏蔽策略详情
  SHIELD_FORM_FETCH_REQUEST: 'SHIELD_FORM_FETCH_REQUEST',
  SHIELD_FORM_FETCH_SUCCESS: 'SHIELD_FORM_FETCH_SUCCESS',
  SHIELD_FORM_FETCH_FAILURE: 'SHIELD_FORM_FETCH_FAILURE',

  // 屏蔽策略更新
  SHIELD_FORM_UPDATE_REQUEST: 'SHIELD_FORM_UPDATE_REQUEST',
  SHIELD_FORM_UPDATE_SUCCESS: 'SHIELD_FORM_UPDATE_SUCCESS',
  SHIELD_FORM_UPDATE_FAILURE: 'SHIELD_FORM_UPDATE_FAILURE',

  // 屏蔽策略新建
  SHIELD_FORM_SUBMIT_REQUEST: 'SHIELD_FORM_SUBMIT_REQUEST',
  SHIELD_FORM_SUBMIT_SUCCESS: 'SHIELD_FORM_SUBMIT_SUCCESS',
  SHIELD_FORM_SUBMIT_FAILURE: 'SHIELD_FORM_SUBMIT_FAILURE',

  DELETE_SHIELD_ITEM: 'DELETE_SHIELD_ITEM',

  SHIELD_FORM_SET: 'SHIELD_FORM_SET',
  CLEAR_SHIELD_FORM: 'CLEAR_SHIELD_FORM',


  INDUSTRY_LIST_FETCH_SUCCESS: 'INDUSTRY_LIST_FETCH_SUCCESS',

  // 用户
  USER_BASIC_INFO_FETCH_SUCCESS: 'USER_BASIC_INFO_FETCH_SUCCESS',

  USER_FINANCE_FETCH_SUCCESS: 'USER_FINANCE_FETCH_SUCCESS',

  USER_FORM_SET: 'USER_FORM_SET',
  FINANCE_FORM_SET: 'FINANCE_FORM_SET',


  // 数据分析
  CHART_APP_FETCH_SUCCESS: 'CHART_APP_FETCH_SUCCESS',
  CHART_PIT_FETCH_SUCCESS: 'CHART_PIT_FETCH_SUCCESS',

}

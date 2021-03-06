import types from '../constants/actionTypes';

const initialFormState = {
  isFetching: false,
  error: false
};

export function adForm(state = initialFormState, action) {
  switch (action.type) {
    case types.AD_FORM_FETCH_REQUEST:
      return Object.assign({}, state, action.payload, {
        isFetching: true,
        error: false
      });
    case types.AD_FORM_FETCH_SUCCESS:
    case types.AD_FORM_UPDATE_SUCCESS:
      return Object.assign({}, state, action.payload, {
        isFetching: false,
        error: false
      });
    case types.AD_FORM_FETCH_FAILURE:
      return Object.assign({}, state, action.payload, {
        isFetching: false,
        error: true
      });
    case types.AD_FORM_SET:
      return Object.assign({}, state, action.payload);
    case types.CLEAR_ALL:
      return {}
    default:
      return state;
  }
}

const initialListState = {
  list: [],
  isFetching: false,
  error: false
}

export function adList(state = initialListState, action) {
  switch (action.type) {
    case types.AD_LIST_FETCH_REQUEST:
      return Object.assign({}, state, action.payload, {
        isFetching: true,
        error: false
      });
    case types.AD_LIST_FETCH_SUCCESS:
      return Object.assign({}, state, action.payload, {
        isFetching: true,
        error: false
      });
    case types.AD_LIST_FETCH_FAILURE:
      return Object.assign({}, state, action.payload, {
        isFetching: false,
        error: true
      });
    case types.DELETE_AD_ITEM:
      return Object.assign({}, state, {
        list: state.list.filter(item => item.id !== action.payload.id)
      });
    case types.AD_LIST_SET:
      return Object.assign({}, state, {
        list: state.list.map((value) => {
          if (value.id === action.payload.id) {
            return Object.assign({}, value, {status: action.payload.status})
          } else {
            return value
          }
        })
      })
    default:
      return state;
  }
}

const initialSpecListState = {}

export function specList(state = initialSpecListState, action) {
  switch (action.type) {
    case types.SPEC_LIST_FETCH_SUCCESS:
      return Object.assign({}, state, action.payload, {
        isFetching: true,
        error: false
      });
    default:
      return state;
  }
}


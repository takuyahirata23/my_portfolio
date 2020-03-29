import { SET_IS_LOADING, FETCH_DATA_SUCCESS, SET_FILTER } from './actionType'

export default function(state, action) {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        projects: action.projects
      }

    case SET_FILTER:
      return {
        ...state,
        filter: action.value
      }

    default:
      return state
  }
}

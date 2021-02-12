import { SET_IS_LOADING, FETCH_DATA_SUCCESS, SET_FILTER } from './actionType'

type Action = {type: typeof SET_IS_LOADING,  isLoading: boolean } | { type: typeof FETCH_DATA_SUCCESS, projects: any[] } | { type: typeof SET_FILTER, value: any } 

interface State {
  isLoading: boolean,
  projects: any[],
  filteredProjects: any[],
  filter: string
}


export default function(state: State, action: Action) {
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
        projects: action.projects,
        filteredProjects: action.projects
      }

    case SET_FILTER:
      return {
        ...state,
        filteredProjects:
          action.value === 'all'
            ? state.projects
            : state.projects.filter(project =>
                project.tools
                  .map(tool => tool.toLowerCase())
                  .includes(action.value)
              ),
        filter: action.value
      }

    default:
      return state
  }
}

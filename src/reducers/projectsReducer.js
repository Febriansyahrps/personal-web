const initState = {
  projects: [],
  sources: {},
  loading: true,
};

const projectsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        loading: false,
        projects: action.payload.projects,
        sources: action.payload.sources,
      };
    case "LOADING_DATA": {
      return { ...state, loading: true };
    }
    default:
      return { ...state };
  }
};
export default projectsReducer;

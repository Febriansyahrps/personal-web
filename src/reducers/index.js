import { combineReducers } from "redux";
import projectsReducer from "./projectsReducer";

const rootReducer = combineReducers({
  projectData: projectsReducer,
});

export default rootReducer;

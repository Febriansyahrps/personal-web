import axios from "axios";
const projectsUrl = "https://febriansyahrizqi.github.io/projects.json";
const profileLinkUrl = "https://febriansyahrizqi.github.io/profile-link.json";

export const getProjectsData = () => async (dispatch) => {
  dispatch({
    type: "LOADING_DATA",
  });
  const getData = await axios.get(projectsUrl);
  const getLinkData = await axios.get(profileLinkUrl);
  dispatch({
    type: "FETCH_DATA",
    payload: {
      sources: getLinkData.data,
      projects: getData.data,
    },
  });
};

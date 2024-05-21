const serverURL = import.meta.env.VITE_APP_ROOTSERVER;
const userEP = serverURL + "/api/v1/users";

import { apiProcessor } from "../../helpers/axiosHelper";

//=============user api request
//login user

export const logInUser = async (obj) => {
  const axiosObj = {
    method: "post",
    url: userEP + "/login",
    data: obj,
  };
  return await apiProcessor(axiosObj);
};

//post new user
export const postNewUser = async (obj) => {
  const axiosObj = {
    method: "post",
    url: userEP,
    data: obj,
  };
  return apiProcessor(axiosObj);
};

//fertch user info
export const fetchUserInfo = () => {
  const axiosObj = {
    method: "get",
    url: userEP,
    isPrivate: true,
  };
  return apiProcessor(axiosObj);
};

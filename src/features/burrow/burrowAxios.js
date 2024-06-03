import { apiProcesser } from "../../helpers/axiosHelper";

const burrowEP = import.meta.env.VITE_APP_ROOTSERVER + "/api/v1/burrows";

export const postNewBurrow = async (obj) => {
  const axiosObj = {
    method: "post",
    url: burrowEP,
    data: obj,
    isPrivate: true,
  };
  return await apiProcesser(axiosObj);
};

export const fetchBurrows = async (isPrivate) => {
  const axiosObj = {
    method: "get",
    url: isPrivate ? burrowEP + "/all" : burrowEP,
    isPrivate: true,
  };
  return await apiProcesser(axiosObj);
};

export const fetchSingleBurrow = async (_id) => {
  const axiosObj = {
    method: "get",
    url: burrowEP + "/" + _id,
  };
  return await apiProcesser(axiosObj);
};
export const editSingleBurrow = async (obj) => {
  const axiosObj = {
    method: "put",
    url: burrowEP,
    isPrivate: true,
    data: obj,
  };
  return await apiProcesser(axiosObj);
};

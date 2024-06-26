import { apiProcesser } from "../../helpers/axiosHelper";

const bookEP = import.meta.env.VITE_APP_ROOTSERVER + "/api/v1/books";

export const postNewBook = async (obj) => {
  const axiosObj = {
    method: "post",
    url: bookEP,
    data: obj,
    isPrivate: true,
  };
  return await apiProcesser(axiosObj);
};

export const fetchBooks = async (isPrivate) => {
  const axiosObj = {
    method: "get",
    url: isPrivate ? bookEP + "/all" : bookEP,
    isPrivate: true,
  };
  return await apiProcesser(axiosObj);
};

export const fetchSingleBook = async (_id) => {
  const axiosObj = {
    method: "get",
    url: bookEP + "/" + _id,
  };
  return await apiProcesser(axiosObj);
};
export const editSingleBook = async (obj) => {
  const axiosObj = {
    method: "put",
    url: bookEP,
    isPrivate: true,
    data: obj,
  };
  return await apiProcesser(axiosObj);
};

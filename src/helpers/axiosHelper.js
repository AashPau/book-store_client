import axios from "axios";

const userEP = import.meta.env.VITE_APP_ROOTSERVER;

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

export const apiProcesser = async ({
  method,
  url,
  data,
  isPrivate,
  isRefresh,
}) => {
  const headers = {
    Authorization: isPrivate
      ? isRefresh
        ? getRefreshJWT()
        : getAccessJWT()
      : null,
  };
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    const message = error?.response?.data?.message ?? error.message;
    if (message === "jwt expired") {
      //now use refresh JWT to access new accessJWT
      const token = await renewAccessJWT();
      //recall back same api processor
      if (token) {
        return apiProcesser({ method, url, data, isPrivate });
      }
      //   clear the tokemn
      localStorage.removeItem("refreshJWT");
      sessionStorage.removeItem("accessJWT");
    }
    return {
      status: "error",
      message,
    };
  }
};

const renewAccessJWT = async () => {
  const { status, accessJWT } = await apiProcesser({
    method: "get",
    url: userEP,
    isPrivate: true,
    isRefreshJWT: true,
  });
  sessionStorage.setItem("accessJWT", accessJWT);
  return accessJWT;
};

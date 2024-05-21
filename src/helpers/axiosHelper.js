import axios from "axios";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJwt");
};

export const apiProcessor = async ({ method, url, data, isPrivate }) => {
  const headers = { Authorization: isPrivate ? getAccessJWT() : null };
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

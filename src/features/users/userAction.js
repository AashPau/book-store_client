import { setUser } from "./userSlice";
import { fetchUserInfo } from "./userAxios";
import { loginUser } from "../../features/users/userAxios";
import { toast } from "react-toastify";
import { renewAccessJWT } from "../../helpers/axiosHelper";

export const getUserObj = () => async (dispatch) => {
  const { status, user } = await fetchUserInfo();
  console.log(status, user);

  //update store
  dispatch(setUser(user));
};

export const userSignInAction = (obj) => async (dispatch) => {
  const pending = loginUser(obj);
  loginUser(obj);
  toast.promise(pending, {
    pending: "Please wait ...",
  });

  const { status, message, tokens } = await pending;
  toast[status](message);
  //store tokens in the sessions
  sessionStorage.setItem("accessJWT", tokens.accessJWT);
  localStorage.setItem("refreshJWT", tokens.refreshJWT);

  if (status === "success") {
    const { status, user } = await fetchUserInfo();
    console.log(status, user);
    dispatch(getUserObj());
  }
};

//auto login user
export const autoLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");
  //when acess jwt exists
  if (accessJWT) {
    dispatch(getUserObj());
    return;
  }

  //when accessJwt exists do not exists but refresh exists
  if (refreshJWT) {
    const token = await renewAccessJWT();
    token && dispatch(getUserObj());
  }
};

import { setUser } from "./userSlice";
import { fetchUserInfo } from "./userAxios";

export const getUserObj = () => async (dispatch) => {
  const { status, user } = await fetchUserInfo();
  console.log(status, user);

  //update store
  dispatch(setUser(user));
};

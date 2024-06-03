import { postNewBurrow } from "./burrowAxios";

export const addNewBurrowAction = (obj) => async (dispatch) => {
  const pending = postNewBurrow(obj);

  toast.promise(pending, {
    pending: "please wait ...",
  });
};

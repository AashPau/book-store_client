import { fetchStudents } from "./studentsAxios";
import { setStudents } from "./studentsSlice";

export const getStudents = () => async (dispatch) => {
  const { status, students } = await fetchStudents();
  console.log({ students });
  if (status) {
    dispatch(setStudents(students));
  }
};

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
};
const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload || [];
    },
  },
});

const { reducer, actions } = studentsSlice;

export const { setStudents } = actions;
export default reducer;

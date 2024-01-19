import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.value = action.payload;
    },
  },
});

const fetchUsers = () => {
  return (dispatch, getState) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(setUsers(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
export { fetchUsers };

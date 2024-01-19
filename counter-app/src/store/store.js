import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
});

export { store };

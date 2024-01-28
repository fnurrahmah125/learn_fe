import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    todo: null,
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export const { setTodos, setTodo } = todoSlice.actions;

export function fetchTodosAsync() {
  return (dispatch) => {
    fetch("http://localhost:3000/todos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch Todos API");
        return res.json();
      })
      .then((data) => {
        dispatch(setTodos(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function fetchTodoAsync(id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/todos/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch Todo");
        return res.json();
      })
      .then((data) => {
        dispatch(setTodo(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function createTodoAsync(payload) {
  return () => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add data");
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
}

export function updateTodoAsync(id, payload) {
  return () => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("failed to update data");
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
}

export function deleteTodoAsync(id) {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("failed to delete data");
        return res.json();
      })
      .then(() => {
        // cara 1
        // dispatch(fetchTodosAsync())

        // cara 2
        const todos = getState().todoReducer.todos;
        const filterTodos = todos.filter((todo) => todo.id !== id);
        dispatch(setTodos(filterTodos));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export default todoSlice.reducer;

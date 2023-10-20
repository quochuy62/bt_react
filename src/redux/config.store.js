import { combineReducers, createStore } from "redux";



const listStudentReducer = (state = [], action) => {
  switch (action.type) {
    // Xử lý các action liên quan đến listStudent
    default:
    return state;
  }
};

// Kết hợp các reducer trong rootReducer
const rootReducer = combineReducers({
  listStudent: listStudentReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
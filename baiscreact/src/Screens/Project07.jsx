import React from "react";
import AddTodo from "../Components/Project07/AddTodo";
import Todo from "../Components/Project07/Todo";
import { Provider } from "react-redux";
import { Store } from "../app/project07/Store";
const Project07 = () => {
  return (
    <div className="bg-gray-500 w-full p-20">
      <Provider store={Store}>
        <AddTodo />
        <Todo />
      </Provider>
    </div>
  );
};

export default Project07;

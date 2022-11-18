import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Display from "./Display";
import { MdDelete } from "react-icons/md";
import { list, todo } from "./models";

function Todo() {
  const storage = localStorage.getItem("List") || "[]";
  const td: list = JSON.parse(storage);
  const [list, setList] = useState(td);
  const [show, setShow] = useState(false);

  const todos = list.filter((todo) => todo.status == false);
  const done = list.filter((todo) => todo.status == true);

  const onAddFromTodo = (id: number) => {
    const newList = list.filter((todo: todo) => {
      if (todo.id == id) {
        todo.status = true;
        return todo;
      } else {
        return todo;
      }
    });
    updateList(newList);
  };

  const updateList = (data: list) => {
    setList(data);
    const todoString = JSON.stringify(data);
    localStorage.setItem("List", todoString);
  };

  const addTodo = (data: string) => {
    const idStorage = localStorage.getItem("id") || "1";
    const id: number = JSON.parse(idStorage);
    const newTodo = { title: data, id: id, status: false };
    const newList = [...list, newTodo];
    localStorage.setItem("id", JSON.stringify(id + 1));
    updateList(newList);
  };

  const onAddFromDone = (id: number) => {
    const newList = list.filter((todo: todo) => {
      if (todo.id == id) {
        todo.status = false;
        return todo;
      } else {
        return todo;
      }
    });
    updateList(newList);
  };

  const handleRemoveClick = (id: number) => {
    const newList = list.filter((todo) => todo.id != id);
    updateList(newList);
  };

  let color = "text-blue-700";
  if (show) {
    color = "text-green-700";
  }

  return (
    <div className="bg-red-500 p-6 sm:p-10 h-screen overflow-y-scroll">
      <div className="flex items-center justify-between">
        <h1 className="text-blue-700 font-bold mb-10 text-3xl">My Todo's</h1>
        <div>
          {list.length > 0 && (
            <MdDelete
              className={"text-3xl mb-9 " + color}
              onClick={() => setShow(!show)}
            />
          )}
        </div>
      </div>
      <h2 className="my-4">Things to be done</h2>
      <div className="my-4">
        {todos &&
          todos.map((item) => (
            <Display
              id={item.id}
              show={show}
              key={item.id}
              data={item.title}
              onAdd={onAddFromTodo}
              handleRemoveClick={handleRemoveClick}
            />
          ))}
      </div>
      <AddTodo addTodo={addTodo} />
      <h2 className="my-4">Things done</h2>
      <div className="my-4">
        {done &&
          done.map((done: todo) => (
            <Display
              show={show}
              id={done.id}
              handleRemoveClick={handleRemoveClick}
              key={done.id}
              data={done.title}
              onAdd={onAddFromDone}
              checked={true}
            />
          ))}
      </div>
    </div>
  );
}

export default Todo;

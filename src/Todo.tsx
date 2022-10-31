import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Display from "./Display";

function Todo() {
  const todoStorage = localStorage.getItem("Todo") || "[]";
  const doneStorage = localStorage.getItem("Done") || "[]";
  const td: string[] = JSON.parse(todoStorage);
  const dd: string[] = JSON.parse(doneStorage);
  const [todo, setTodo] = useState(td);
  const [done, setDone] = useState(dd);

  const onAddFromTodo = (data: string) => {
    updatedDoneObject(data);
    const newTodo = [...todo];
    const newTodoo = newTodo.filter((item: string) => item != data);
    updateTodo(newTodoo);
  };

  const updatedTodoObject = (data: string) => updateTodo([...todo, data]);

  const updateTodo = (data: string[]) => {
    setTodo(data);
    const todoString = JSON.stringify(data);
    localStorage.setItem("Todo", todoString);
  };

  const addTodo = (data: string) => {
    const newTodo = [...todo, data];
    updateTodo(newTodo);
  };

  const updatedDoneObject = (data: string) => updateDone([...done, data]);

  const onAddFromDone = (data: string) => {
    updatedTodoObject(data);
    const newDone = [...done];
    const newDonee = newDone.filter((item) => item != data);
    updateDone(newDonee);
  };

  const updateDone = (data: string[]) => {
    setDone(data);
    const doneString = JSON.stringify(data);
    localStorage.setItem("Done", doneString);
  };

  const handleRemoveClick = (data: string) => removeDone(data);

  const removeDone = (data: string) => {
    const newDone = [...done];
    const newDonee = newDone.filter((item) => item != data);
    updateDone(newDonee);
  };

  return (
    <div className="bg-red-500 p-10">
      <h1 className="text-blue-700 font-bold mb-10 text-3xl">My Todo App</h1>
      <h2 className="my-4">Things to be done</h2>
      <div className="my-4">
        {todo &&
          todo.map((item: string) => (
            <Display
              key={item}
              data={item}
              onAdd={onAddFromTodo}
              handleRemoveClick={handleRemoveClick}
            />
          ))}
      </div>
      <AddTodo addTodo={addTodo} />
      <h2 className="my-4">Things done</h2>
      <div className="my-4">
        {done &&
          done.map((item: string) => (
            <Display
              handleRemoveClick={handleRemoveClick}
              key={item}
              data={item}
              onAdd={onAddFromDone}
              checked={true}
            />
          ))}
      </div>
    </div>
  );
}

export default Todo;

import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [selectedTodos, setSelectedTodos] = useState(new Set());
  const [newTodoText, setNewTodoText] = useState("");
  const [newTodoDate, setNewTodoDate] = useState("");
  const [newTodoTime, setNewTodoTime] = useState("");

  const statusOptions = ["Pending", "In Progress", "Completed"];

  function addTodo() {
    if (newTodoText.trim()) {
      const newTodo = {
        text: newTodoText.trim(),
        completed: false,
        date: newTodoDate,
        time: newTodoTime,
        status: "Pending", // Default status
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setNewTodoText("");
      setNewTodoDate("");
      setNewTodoTime("");
      document.getElementById("my_modal_5").close();
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
  }

  function deleteSelectedTodos() {
    const updatedTodos = todos.filter((_, index) => !selectedTodos.has(index));
    setTodos(updatedTodos);
    setSelectedTodos(new Set());
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function toggleComplete(index) {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function updateStatus(index, newStatus) {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, status: newStatus } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function loadTodos() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }

  function handleCheckboxChange(index) {
    const updatedSelection = new Set(selectedTodos);
    if (updatedSelection.has(index)) {
      updatedSelection.delete(index);
    } else {
      updatedSelection.add(index);
    }
    setSelectedTodos(updatedSelection);
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <div align="center">
        <div className="card bg-base-100 w-10/12 shadow-xl">
          <div className="card-body">
            <center>
              <h2 className="card-title">To Do List</h2>
            </center>

            <button
              className="btn btn-info btn-wide"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Add To do
            </button>
            <button
              className="btn btn-error btn-wide mt-4"
              onClick={deleteSelectedTodos}
              disabled={selectedTodos.size === 0}
            >
              Delete Selected
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Add New Todo</h3>
                <br />
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Todo"
                  value={newTodoText}
                  onChange={(e) => setNewTodoText(e.target.value)}
                />
                <br />
                <input
                  type="date"
                  className="input input-bordered w-full mt-2"
                  value={newTodoDate}
                  onChange={(e) => setNewTodoDate(e.target.value)}
                />
                <br />
                <input
                  type="time"
                  className="input input-bordered w-full mt-2"
                  value={newTodoTime}
                  onChange={(e) => setNewTodoTime(e.target.value)}
                />
                <br />
                <br />
                <button
                  className="btn btn-success btn-wide w-full"
                  onClick={addTodo}
                >
                  Add
                </button>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-error">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            <div id="result">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      Select
                    </th>
                    <th className="border border-gray-300 px-4 py-2">#</th>
                    <th className="border border-gray-300 px-4 py-2">Todo</th>
                    <th className="border border-gray-300 px-4 py-2">Date</th>
                    <th className="border border-gray-300 px-4 py-2">Time</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Status
                    </th>{" "}
                    {/* New column for status */}
                  </tr>
                </thead>
                <tbody>
                  {todos.map((todo, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={selectedTodos.has(index)}
                          onChange={() => handleCheckboxChange(index)}
                          className="mr-2 checkbox checkbox-success"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <span className={todo.completed ? "line-through" : ""}>
                          {todo.text}
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          <span
                            className={`badge ${
                              todo.status === "Pending"
                                ? "bg-red-500"
                                : todo.status === "In Progress"
                                ? "bg-yellow-500"
                                : todo.status === "Completed"
                                ? "bg-green-500"
                                : "bg-gray-500"
                            }`}
                          >
                            {" "}
                            {todo.status}{" "}
                          </span>
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {todo.date || "N/A"}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {todo.time || "N/A"}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <select
                          value={todo.status}
                          onChange={(e) => updateStatus(index, e.target.value)}
                          className="select select-bordered w-full"
                        >
                          {statusOptions.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

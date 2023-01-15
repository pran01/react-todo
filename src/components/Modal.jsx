import { useState } from "react";

const Modal = ({
  status,
  setStatus,
  changeStatus,
  setTaskBeingEdited,
  setEdit,
  saveTask,
  taskName,
  setTaskName,
}) => {
  return (
    <div
      id="modal"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/5 min-w-min h-1/3 
            bg-bgclr-dark z-20 rounded-lg shadow-xl flex flex-col p-4 text-gray-400">
      <div className="flex justify-center items-center mb-2">
        <label htmlFor="name" className="w-16 text-end">
          Task
        </label>
        <input
          type="text"
          id="name"
          className="rounded-full ml-3 bg-bgclr-light px-2 w-32 focus:outline-none"
          value={taskName}
          onChange={(event) => {
            setTaskName(event.target.value);
          }}
        />
      </div>
      <div className="flex justify-center mt-8">
        <label className="font-bold text-end w-16"> Status: </label>
        <div className="flex flex-col w-36">
          <div className="px-3 flex align-center justify-end">
            <label htmlFor="todo-status" className="">
              ToDo
            </label>
            <input
              type="radio"
              id="todo-status"
              name="status"
              value="Todo"
              className="ml-3"
              checked={status === "Todo"}
              onChange={changeStatus}
            />
          </div>
          <div className="px-3 flex align-center justify-end">
            <label htmlFor="inprogress-status">In Progress</label>
            <input
              type="radio"
              id="inprogress-status"
              name="status"
              value="In Progress"
              className="ml-3"
              checked={status === "In Progress"}
              onChange={changeStatus}
            />
          </div>
          <div className="px-3 flex align-center justify-end">
            <label htmlFor="done-status">Done</label>
            <input
              type="radio"
              id="done-status"
              name="status"
              value="Done"
              className="ml-3"
              checked={status === "Done"}
              onChange={changeStatus}
            />
          </div>
        </div>
      </div>
      <div className="self-end mt-4">
        <button
          className="bg-green-700 text-white w-16 rounded-lg"
          id="savebtn"
          onClick={saveTask}>
          Save
        </button>
        <button
          className="bg-red-600 text-white w-16 rounded-lg ml-2"
          id="cancelbtn"
          onClick={() => {
            setTaskBeingEdited(-1);
            setStatus("Todo");
            setTaskName("");
            setEdit(false);
          }}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;

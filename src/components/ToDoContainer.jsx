import { useEffect } from "react";

const ToDoContainer = ({
  todos,
  openEditModal,
  deleteTodo,
  setEdit,
  taskBeingEdited,
  setTaskBeingEdited,
  lastAdded,
  setStatus,
}) => {
  useEffect(() => console.log(todos), []);
  return (
    <div className="w-2/5 min-w-fit bg-bgclr-light mx-auto mt-4 rounded-lg shadow-lg p-4 pb-16 relative">
      <table className="border-separate border-spacing-x-2 md:border-spacing-x-5 table-auto w-full text-sm md:text-lg text-gray-400">
        <thead className="h-12">
          <tr>
            <th className="">Task Name</th>
            <th className="">Status</th>
            <th className="">Edit</th>
            <th className="">Remove</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {[]
            .concat(todos)
            .sort((a, b) => {
              let sta = a.status.toLowerCase(),
                stb = b.status.toLowerCase();

              if (sta < stb) {
                return 1;
              }
              if (sta > stb) {
                return -1;
              }
              return 0;
            })
            .map((todo, i) => (
              <tr className="text-center h-12 md:h-8" key={todo.id}>
                <td className="w-min">{todo.name}</td>
                <td>{todo.status}</td>
                <td>
                  <button onClick={() => openEditModal(todo)}>
                    <i className="fa fa-pencil"></i>
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteTodo(todo.id)}>
                    <i className="fa fa-remove"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button
        onClick={() => {
          setTaskBeingEdited(lastAdded + 1);
          setStatus("Todo");
          setEdit(true);
        }}
        className="absolute bottom-4 right-4 border border-gray-400 w-20 rounded-lg flex justify-center items-center bg-bgclr-dark text-gray-400">
        Add Task
      </button>
    </div>
  );
};

export default ToDoContainer;

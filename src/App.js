import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";
import BlurScreen from "./components/BlurScreen";
import ToDoContainer from "./components/ToDoContainer";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState("Todo");
  const [taskBeingEdited, setTaskBeingEdited] = useState(-1);
  const [lastAdded, setLastAdded] = useState(0);
  const [taskName, setTaskName] = useState("");

  function deleteTodo(id) {
    let copyTodos = [].concat(todos);
    copyTodos = copyTodos.filter(function (ele) {
      return ele.id != id;
    });
    setTodos(copyTodos);
    localStorage.setItem("todos", JSON.stringify(copyTodos));
  }

  const changeStatus = (event) => {
    setStatus(event.target.value);
  };

  const saveTask = () => {
    let copyTodos = [].concat(todos);
    for (let task of copyTodos) {
      if (task.id == taskBeingEdited) {
        task.name = taskName;
        task.status = status;
        setTodos(copyTodos);
        setTaskBeingEdited(-1);
        setStatus("Todo");
        setTaskName("");
        setEdit(false);
        localStorage.setItem("todos", JSON.stringify(copyTodos));
        return;
      }
    }
    setLastAdded(taskBeingEdited);
    let todo = {
      id: taskBeingEdited,
      name: taskName,
      status: status,
    };
    copyTodos = [...todos, todo];
    setTodos(copyTodos);
    setTaskBeingEdited(-1);
    localStorage.setItem("todos", JSON.stringify(copyTodos));
    setTaskBeingEdited(-1);
    setStatus("Todo");
    setTaskName("");
    setEdit(false);
    return;
  };

  const openEditModal = (element) => {
    setTaskName(element.name);
    setStatus(element.status);
    setTaskBeingEdited(element.id);
    setEdit(true);
  };

  useEffect(() => {
    setTodos(
      localStorage.getItem("todos")
        ? Array.from(JSON.parse(localStorage.getItem("todos")))
        : []
    );
  }, []);
  return (
    <div className="bg-bgclr-dark flex flex-col text-white align-center pt-5 w-screen h-screen font-josefin-sans">
      {edit && (
        <Modal
          status={status}
          setStatus={setStatus}
          changeStatus={changeStatus}
          setTaskBeingEdited={setTaskBeingEdited}
          setEdit={setEdit}
          saveTask={saveTask}
          taskName={taskName}
          setTaskName={setTaskName}
        />
      )}
      {edit && <BlurScreen />}
      <h1 className="text-5xl font-passion-conflict text-center">ToDo App</h1>
      <ToDoContainer
        todos={todos}
        openEditModal={openEditModal}
        deleteTodo={deleteTodo}
        setEdit={setEdit}
        taskBeingEdited={taskBeingEdited}
        setTaskBeingEdited={setTaskBeingEdited}
        lastAdded={lastAdded}
        setStatus={setStatus}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAllContext } from "../../../../Context/AllContext";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [taskList,setTaskList] = useState([])
  const { setAllTask } = useAllContext();

  const onChangeTask = (val) => {
    setTask(val);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      // Make sure the task is not empty
      setTaskList([...taskList, task]); // Add the new task to the existing tasks
      setTask(""); // Clear the input field after adding the task
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks.splice(index, 1);
    setTaskList(updatedTasks);
  };

  const handleSaveTask = () => {
    setAllTask(taskList); // Update the allTask array with the taskList data
    setTaskList([]); // Clear the taskList array
  };
  
  console.log(taskList);
  return (
    <>
      <div className="mx-20 mt-16 mb-52 ">
        <h1 className="text-3xl font-bold text-center mb-10">TASK LIST</h1>
        <div className="grid grid-cols-2 shadow-2xl border-2 border-black ">
          <div className="border-r-8 ps-10 py-5 ">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-bold">Title</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-bold">Task</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => onChangeTask(e.target.value)}
              />
            </label>
            <div className="flex justify-center items-center gap-3 mt-5">
              <button
                className="btn btn-primary text-white font-semibold"
                onClick={handleAddTask}
              >
                Add Task +
              </button>
              <button className="btn btn-success text-white font-semibold" onClick={handleSaveTask}>
                Save Task +
              </button>
              <Link to="/Notes/viewNote">
                <button className="btn btn-warning text-white font-semibold">
                  Return
                </button>
              </Link>
            </div>
          </div>
          <div className="ps-10 py-5">
            <h1 className="text-3xl font-bold text-center mb-3 italic">
              All Task
            </h1>
            <ul className="mx-5">
              {taskList.map((task, index) => (
                <li key={index}>
                  <div className="flex justify-between items-center space-y-2">
                    <h1 className="text-xl font-semibold">{task}</h1>
                    <button
                      className="btn btn-square btn-outline btn-error"
                      onClick={() => handleRemoveTask(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;

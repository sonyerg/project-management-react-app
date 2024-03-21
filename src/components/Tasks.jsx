import React, { useContext } from "react";
import NewTask from "./NewTask.jsx";
import { ProjectContext } from "../store/project-context.jsx";

export default function Tasks() {
  const { selectedProjectId, tasks, addTask, deleteTask } =
    useContext(ProjectContext);

  const projectTasks = tasks.filter(
    (task) => task.projectId === selectedProjectId
  );

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
      <NewTask onAdd={addTask} />
      {projectTasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {projectTasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {projectTasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => deleteTask(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

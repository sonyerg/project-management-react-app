import { useContext } from "react";
import Tasks from "./Tasks";
import { ProjectContext } from "../store/project-context";

export default function SelectedProject() {
  const { deleteProject, projects, selectedProjectId } =
    useContext(ProjectContext);

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  // find(), like map(), is a method built into Vanilla JavaScript that takes a function as an argument,
  // a function that will be executed for every element in the given array (projectState.projects).
  // And that function then should return true if it founds the element it was looking for.

  const formattedDate = new Date(selectedProject.dueDate).toLocaleDateString(
    "en-NZ",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {selectedProject.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={deleteProject}
          >
            Delete
          </button>
        </div>
        <p className="mb-4  text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {selectedProject.description}
        </p>
      </header>
      <Tasks />
    </div>
  );
}

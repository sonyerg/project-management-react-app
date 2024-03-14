import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // neither adding new project nor selecting a project
    projects: [], // add projects created by the user
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState, // spread the old state with the projects created by the user
        selectedProjectId: null, // null: adding a new project
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData, // contains title, description, and duedate
        id: Math.random(),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar onStartAddProject={handleStartAddProject} />
        {content}
      </main>
    </>
  );
}

export default App;

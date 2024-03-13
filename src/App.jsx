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
        ...prevState, // spread the old state
        selectedProjectId: null, // null: adding a new project
      };
    });
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar />
        {/* TODO: conditional new project or selected existing project */}
        {projectsState === null ? <NewProject /> : <NoProjectSelected />}
      </main>
    </>
  );
}

export default App;

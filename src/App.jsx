import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // neither adding new project nor selecting a project
    projects: [], // add projects created by the user
  });

  //TODO: handle add project click
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
        <NewProject />
      </main>
    </>
  );
}

export default App;

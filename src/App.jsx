import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
  });

  //TODO: handle add project click

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

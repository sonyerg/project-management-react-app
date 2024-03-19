import { useContext, useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import ProjectContextProvider, {
  ProjectContext,
} from "./store/project-context";

function App() {
  const { selectedProjectId } = useContext(ProjectContext);
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // neither adding new project nor selecting a project
    projects: [], // add projects created by the user
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState, // spread the old state with the projects created by the user
        selectedProjectId: null, // null: adding a new project
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData, // contains title, description, and dueDate
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
        // true to keep an item, false to remove.
        // filtering out the selected project, on Delete
      };
    });
  }

  const ctxValue = {
    selectedProjectId: projectsState.selectedProjectId,
    projects: projectsState.projects,
    tasks: projectsState.tasks,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
    addProject: handleAddProject,
    cancelAddProject: handleCancelAddProject,
    startAddProject: handleStartAddProject,
    selectProject: handleSelectProject,
    deleteProject: handleDeleteProject,
  };

  let content = <SelectedProject />;

  if (projectsState.selectedProjectId === null) {
    console.log("Rendering NewProject");
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  }

  return (
    <ProjectContext.Provider value={ctxValue}>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar />
        {content}
      </main>
    </ProjectContext.Provider>
  );
}

export default App;

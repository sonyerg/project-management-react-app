import { createContext, useState } from "react";

export const ProjectContext = createContext({
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  addProject: () => {},
  cancelAddProject: () => {},
  startAddProject: () => {},
  selectProject: () => {},
  deleteProject: () => {},
});

// export default function ProjectContextProvider({ children }) {

//   return (
//     <ProjectContext.Provider value={ctxValue}>
//       {children}
//     </ProjectContext.Provider>
//   );
// }

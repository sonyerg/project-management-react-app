export default function SelectedProject({ project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-NZ", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      <header>
        <h1>{project.title}</h1>
        <p>{formattedDate}</p>
      </header>
      <p>{project.description}</p>
    </div>
  );
}

const Projects: any = (
  project: {
    project_name: string;
    img: string;
    desc: string;
    tags: string[];
    created_at: string;
  }[] = [
    {
      project_name: "",
      img: "",
      desc: "",
      tags: [""],
      created_at: "",
    },
  ],
  action: { type: string; payload: {}[] }
) => {
  switch (action.type) {
    case "SOMEPROJECTS":
      return;
    case "ALLPROJECTS":
      return;
    default:
      return project;
  }
};

export default Projects;

import React from "react";
import ProjectItem from "./ProjectItem";
import Banner from "../components/Banner";

const Projects = async () => {
  const projects = await getData();
  return (
    <div className="text-center">
      <Banner textSize={"text-3xl"}>Projects</Banner>
      <div className="m-3 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {projects.results.map((aProject: any, index: number) => (
          // eslint-disable-next-line react/jsx-key
          <ProjectItem key={aProject.id} data={aProject} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

// post notion API
async function getData() {
  const options = {
    method: "POST",
    headers: {
      "accept": "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      "Authorization": `Bearer ${process.env.NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Period",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    options
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const projects = await res.json();
  return projects;
}

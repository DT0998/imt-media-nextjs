import thumb1 from "../../assets/img/activities/hoat-dong-1.jpg";
import thumb2 from "../../assets/img/activities/hoat-dong-2.jpg";
import thumb3 from "../../assets/img/activities/hoat-dong-3.jpg";
import thumb4 from "../../assets/img/activities/hoat-dong-4.jpg";
import thumb5 from "../../assets/img/activities/hoat-dong-5.jpg";
import thumb6 from "../../assets/img/activities/hoat-dong-6.jpg";
export const projects = [
  {
    thumbnail: thumb1,
    urlYoutube: "snjS-EaFnIc",
  },
  {
    thumbnail: thumb2,
    urlYoutube: "rIXhXaQ8tiM",
  },
  {
    thumbnail: thumb3,
    urlYoutube: "8B9MvyoPrHw",
  },
  {
    thumbnail: thumb4,
    urlYoutube: "Rrr-5-4wcEs",
  },
  {
    thumbnail: thumb5,
    urlYoutube: "72yLciLbhs4",
  },
  {
    thumbnail: thumb6,
    urlYoutube: "jKcvnNezndc",
  },
];

const getProjects = () => projects;

const getProjectCount = (count) => {
  const max = projects.length - count;
  const min = 0;
  const random = Math.floor(Math.random() * (max - min)) + min;
  return projects.slice(random, random + count);
};

const ProjectData = { getProjects, getProjectCount };

export default ProjectData;

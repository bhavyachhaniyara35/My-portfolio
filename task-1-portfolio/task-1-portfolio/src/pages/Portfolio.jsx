import { Github, ExternalLink, Code2, Brain } from "lucide-react"
import LeetCodeProgress from "../components/LeetCodeProgress"
import { CIcon } from '@coreui/icons-react';
import { cilTerminal } from '@coreui/icons';
import apniRikshaImg from "../assets/apni-riksha.png";

const projects = [
  {
    id: 1,
    title: "Apni Riksha",
    description: "Apni Riksha is a ride-booking platform inspired by Uber, designed to simplify transportation through real-time booking, tracking, and a seamless user experience.",
    image: apniRikshaImg,
    github: "https://github.com/kaustav3071/SGP-Apni-Riksha.git",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"]
  }
];

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 min-h-screen">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 drop-shadow-lg">
        <Code2 className="inline-block w-10 h-10 md:w-12 md:h-12 text-blue-500 mr-3 align-middle" />
        My Projects
      </h1>
      <p className="text-xl text-gray-700 mb-16 text-center font-medium">
        Here are some of my recent projects that showcase my skills and experience.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-pink-200 transition-all duration-300 border-2 border-blue-100 hover:border-pink-300">
            <div className="relative overflow-hidden flex items-center justify-center bg-gradient-to-tr from-blue-100 via-yellow-100 to-pink-100 h-56">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-contain rounded-xl drop-shadow-md bg-white p-2"
              />
            </div>
            <div className="p-8 flex flex-col gap-4">
              <h3 className="text-2xl font-bold mb-1 text-blue-600 group-hover:text-pink-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-2 text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full border border-blue-200 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <a href={project.github} target="_blank" className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 text-white font-bold shadow hover:scale-105 transition-transform">GitHub</a>
                {project.link && (
                  <a href={project.link} target="_blank" className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-bold shadow hover:scale-105 transition-transform">Live Demo</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
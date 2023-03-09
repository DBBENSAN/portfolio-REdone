import React, { useState } from "react";

const projects = [
   {
      title: 'Project 1',
      description: 'This is project 1',
      image: 'url-to-image-1',
      github: 'url-to-github-repo-1'
   },
   {
      title: 'Project 2',
      description: 'This is project 2',
      image: 'url-to-image-2',
      github: 'url-to-github-repo-2'
   },
   {
      title: 'Project 3',
      description: 'This is project 3',
      image: 'url-to-image-3',
      github: 'url-to-github-repo-3'
   }
];

function ProjectCard ({ title, description, image, github }) {
   return (
      <div className="project-card">
         <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
         <div className="content">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={github} target="_blank" rel="noreferrer">
               <i className="fab fa-github"></i>
            </a>
         </div>
      </div>
   );
};

function ProjectList () {
   return (
      <div className="project-list">
         {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
         ))}
      </div>
   );
};


export default function Viewport() {
   return (
      <h1>'hello'</h1>
   )
}
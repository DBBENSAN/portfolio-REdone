import React from "react";
import './Works.css'
import { FaGithub } from 'react-icons/fa';

export default function Works() {
   const projects = [
      {
         title: 'Social Networks',
         url: 'https://www.youtube.com/watch?v=XI8d1yl2Cug',
         description: 'Node.js application that provides API endpoints for creating users, adding friends, creating thoughts, and reacting to thoughts. The app uses Express.js as the web framework, Mongoose as the ODM (Object Document Mapper) for MongoDB, and MongoDB as the database.',
         github: 'https://github.com/DBBENSAN/social-networks',
         image: ''
      },
      {
         title: 'Note Taker',
         url: 'https://lit-bayou-42687.herokuapp.com/',
         description: 'Node.js application created using the express and uuid packages. This app allows users to create and store notes, as well as delete existing notes. The notes are saved in a JSON file using the file system module of Node.js.',
         github: 'https://github.com/DBBENSAN/notepad-app',
         image: ''
      },
      {
         title: 'Howler',
         url: 'https://howler.herokuapp.com/',
         description: 'Convenient way to connect with likeminded owners in their area. Users will be able to search for other users by location and filter other users to find playmates who meet their dogs specific needs.',
         github: 'https://github.com/DBBENSAN/dog-friends',
         image: ''
      },
      {
         title: 'Text Editor',
         url: 'https://pure-crag-79082.herokuapp.com/',
         description: 'This is just another text editor, with no fancy features or gimmicks.',
         github: 'https://github.com/DBBENSAN/text-editor',
         image: ''
      },
      {
         title: 'Expense Tracker',
         url: 'https://secure-anchorage-04407.herokuapp.com/',
         description: ' This is a fun and engaging platform that helps you keep track of your expenses and manage your finances. A gamified version of a finance app, making budgeting and financial management enjoyable and easy.',
         github: 'https://github.com/DBBENSAN/Expense-Tracker',
         image: ''
      },
   ]

   return (
      <div className="card-container">
      {projects.map((project, index) => (
         <div className="card" key={index}>
            {/* <img src={placeholderImage} alt="project placeholder" /> */}
            <div className="card-content">
               <h2>{project.title}</h2>
               <p>{project.description}</p>
               <a href={project.github} target="_blank" rel="noreferrer">
               <FaGithub /> GitHub
            </a>
               <a href={project.url} target="_blank" rel="noreferrer">Demo</a>
            </div>
         </div>
      ))}
   </div>
   )
}
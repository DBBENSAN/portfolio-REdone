import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiInsomnia, SiNodedotjs, SiExpress } from 'react-icons/si';
import './Skills.css'

function Skills() {
   return (
      <div className="skills-container">
         <div className="skill">
            <FaHtml5 />
            <p>HTML</p>
         </div>
         <div className="skill">
            <FaCss3 />
            <p>CSS</p>
         </div>
         <div className="skill">
            <FaJs />
            <p>JavaScript</p>
         </div>
         <div className="skill">
            <SiMongodb />
            <p>MongoDB</p>
         </div>
         <div className="skill">
            <SiInsomnia />
            <p>Insomnia</p>
         </div>
         <div className="skill">
            <SiNodedotjs />
            <p>Node.js</p>
         </div>
         <div className="skill">
            <SiExpress />
            <p>Express</p>
         </div>
         <div className="skill">
            <FaReact />
            <p>React</p>
         </div>
      </div>
   );
}

export default Skills;

import React, { useState } from "react";
import QuickView from './QuickView'
import { projectImages } from "../../assets";
import './Home.css'

export default function Home() {
   return (
      <div>
         <article>
            <div className="intro">
               <p>Nice to meet you -</p>
               <p><span className="name">I'm Dan</span></p>
            </div>
            <div className="job">
               <p><span className="highlight">Aspiring Web Developer</span></p>
            </div>
            <div className="hobby">
               <p><span className="highlight">Part Time Photographer</span></p>
            </div>
            <div className="cta">
               <p>See my work,</p>
               <p>follow my journey</p>
            </div>
         </article>


         <QuickView images={projectImages}/>

      </div>
   )
}
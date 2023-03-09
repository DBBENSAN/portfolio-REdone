import React, { useState } from "react";
import Carousel from './Carousel'

export default function Home() {
   return (
      <div class="hero">
         <article>
            <div class="sentence">
               <p>Nice to meet you -</p><p><span id="f-name">I'm Dan</span></p>
            </div>
            <div class="sentence">
               <p id="f-title">Asipiring Web Developer</p>
            </div>
            <div class="sentence">
               <p>Part Time Photographer</p>
            </div>
            <div class="sentence">
               <p>See my work,</p><p id="f-words">follow my journey</p>
            </div>
         </article>

         <Carousel />

      </div>
   )
}
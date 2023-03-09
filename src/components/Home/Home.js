import React, { useState } from "react";
import Carousel from './Carousel'

export default function Home() {
   return (
      <div class="hero">
         <article>
            <div class="sentence">
               <p>Hi--</p><p><span id="f-name">I'm Dan</span>iele Bensan</p>
            </div>
            <div class="sentence">
               <p id="f-title">Full Stack Developer</p>
            </div>
            <div class="sentence">
               <p>Aspiring Photographer</p>
            </div>
            <div class="sentence">
               <p>See my work,</p><p id="f-words">follow my journey</p>
            </div>
         </article>
         <Carousel />
      </div>
   )
}
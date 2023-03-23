import React, { useState } from "react";

import Blog from "./Blogs";
import Work from "./Works";
import Camera from "./Camera";



export default function Viewport( {activeTab} ) {
   let content;

   if (activeTab === 'works') {
     content = <Work>On the Web</Work>;
   } else if (activeTab === 'photos') {
     content = <Camera>Behind the Lens</Camera>;
   } else if (activeTab === 'blogs') {
     content = <Blog>Blogs</Blog>;
   } else {
     content = <h1>Unknown Tab</h1>;
   }
 
   return <div>{content}</div>;
}
import React, { useState } from 'react';

import Header from './components/Header';
import Navigation from './components/Nav';
import Footer from './components/Footer';


import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';

export default function App() {
   const [currPage, setPage] = useState('Home');

   const renderPage = () => {
      if (currPage === 'Home') {
         return <Home />;
      }
      if (currPage === 'About Me') {
         return <About />;
      }
      if (currPage === 'Contact') {
         return <Contact />;
      }
      if (currPage === 'Projects') {
         return <Projects />;
      }
      if (currPage === 'Resume') {
         return <Resume />;
      }
   }

   const pageChange = (x) => {
      setPage(x)
   }

   return (
      <div>
         <Header />
         <Navigation currPage={currPage} pageChange={pageChange} />
         <h2>{currPage}</h2>
         {renderPage()}
         <Footer />
      </div>
   );

}


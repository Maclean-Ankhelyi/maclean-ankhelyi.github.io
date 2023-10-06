import './App.css';
import Projects from './components/projects';
import { useState } from 'react'
import { Link } from "react-router-dom";

function App() {
  return (
      <div className="relative isolate px-6 lg:px-8 sm:overflow-scroll">
        <div className="mx-auto max-w-[1440px] sm:pt-32 sm:pb-8 pt-40 pb-0">
          <div className="text-center">
            <span className="dot"></span>
            <h1 className="title sm:text-6xl text-[2rem] font-bold text-white underline underline-offset-8 decoration-2">
              MACLEAN ANKHELYI
            </h1>

{/*             <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p> */}
            <div className="relative bottom-20 grid grid-cols-1 sm:grid-cols-2 sm:m-auto m-16">
            <div className="mt-10 flex items-center text-left text-white justify-start sm:justify-center gap-x-6 underline underline-offset-[3px] decoration-[1.5px]">
                <ul>
                  <li><a href="https://Maclean-Ankhelyi.github.io/resume.pdf" className="links text-2xl font-semibold leading-6">work experience</a></li>
                  <li><Link to="/projects" className="links text-2xl font-semibold leading-6">view projects</Link></li>
                </ul>
            </div>
            <div className="mt-10 flex items-center text-left text-white justify-start sm:justify-center gap-x-6 underline underline-offset-[3px] decoration-[1.5px]">
                <ul>
                  <li><a href="https://www.instagram.com/syphax_industries/" className="links text-2xl font-semibold leading-6">instagram</a></li>
                  <li><a href="https://www.linkedin.com/in/macleanankhelyi/" className="links text-2xl font-semibold leading-6">linkedin</a></li>
                  <li><a href="https://open.spotify.com/artist/0T0hZyGDStrkWMmySOVFZB?si=1Dhjb_V9T0af0MiHIAV4fQ" className="links text-2xl font-semibold leading-6">spotify</a></li>
                  <li><a href="https://soundcloud.com/syphax_sounds" className="links text-2xl font-semibold leading-6">soundcloud</a></li>
                </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

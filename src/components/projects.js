//import '../';
import { LinkIcon } from '@heroicons/react/20/solid'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { ArrowSmallRightIcon } from '@heroicons/react/20/solid'
import projects from '../data/staticData';
import { Link } from "react-router-dom";

function Projects() {
    return (
        <div id="projects" >
            <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4 p-12">
                    <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                        <div className="group flex h-6 ml-1 mt-2">
                            <ArrowLeftIcon style={{marginTop: "0.5rem"}} className="mainFontColor translate-x-1 -translate-y-1 group-hover:delay-75 h-5 w-5 flex-none" aria-hidden="true" />
                            <Link to="/" className="ml-1 mainFontColor font-medium text-black underline decoration-stone-100 decoration-2 hover:decoration-[#4F76D9]" href="" >Go Back</Link>
                        </div>
                        <h2 className="mainFontColor pt-6 sm:text-6xl text-4xl font-bold underline underline-offset-[6px] decoration-[3px]">PROJECTS</h2>
                        <ul role="list" className="">
                            {projects.map((project) => (
                                <li className="flex justify-between py-5 rounded-md">
                                    <div className="flex gap-x-4 p-2">
                                        <div className="min-w-0 flex-auto">
                                            <div className="group flex transition ease-in-out delay-150 hover:scale-100 duration-300">
                                                <a href={project.projectLink} target="_blank" className="mainFontColor group-hover:bg-blue-500 group-hover:text-white projectLink text-md font-semibold leading-6 text-gray-900 underline underline-offset-[3px] decoration-[2px]">{project.projectName}</a>
                                            </div>
                                            <p className="mainFontColor my-2 text-sm leading-5 text-blue-300 opacity-75">{project.projectDescription}</p>
                                            {project.techUsed.map((e) => (
                                                <span className="inline-flex m-1 items-center rounded-xl bg-orange-100 px-2 py-1 text-xs font-medium text-orange-500 ring-1 ring-inset ring-gray-500/10">{e}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="nu rw uj axk"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="group flex h-6 ml-1 mt-2">
                            <a className="font-medium mainFontColor underline decoration-stone-100 decoration-2 hover:decoration-[#4F76D9]" href="https://steady-sidewalk-8c5.notion.site/Project-Archives-edbb3866c86f44a392b8bb4fb15fbc42" type="application/pdf" target="_blank">View Project Archive</a>
                            <ArrowSmallRightIcon style={{marginTop: "0.5rem"}} className="translate-x-1 -translate-y-1 group-hover:translate-x-2 group-hover:delay-75 h-5 w-5 flex-none mainFontColor" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;

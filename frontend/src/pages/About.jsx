// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHexagonNodes, faCubesStacked, faListUl, faTimeline,faBullseye } from "@fortawesome/free-solid-svg-icons";

// export default function CardLayout() {
//     return (
//         <div className="flex justify-center items-center h-screen text-black bg-gray-100 w-full  box-border bg-transparent">
//             <div className=" w-full min-h-screen h-full shadow-lg box-border bg-transparent">
//                 <div className="w-full h-full flex-grow grid grid-cols-12 gap-2">
//                     <div className="col-start-1 col-span-1 row-start-5 row-span-6 p-4 border-[0.8px] border-gray-500/70 border-s-0 rounded-tr-lg rounded-br-lg  bg-white/5 bg-gradient-to-l from-white/10 to-transparent backdrop-blur-sm ">
//                     </div>

//                     <div className="col-start-2 col-span-3 row-start-1 row-span-3 p-4  border-[0.8px] border-gray-500/70 border-t-0 rounded-bl-lg rounded-br-lg shadow-md bg-white/5 bg-gradient-to-t from-white/10 to-transparent backdrop-blur-sm">

//                     </div>
//                     <div className="col-start-2 col-span-3 row-start-4 row-span-8 p-6 bg-white/10 backdrop-blur-lg shadow-md border-[0.8px] border-gray-500 rounded-lg text-white">
//                         <div className="flex flex-col h-full">
//                             <div className="flex items-center gap-4 text-2xl font-sans mb-4">
//                                 <FontAwesomeIcon icon={faListUl} />
//                                 <span>Key Features</span>
//                             </div>

//                             <div className="px-4">
//                                 <ul className="list-disc text-xl text-gray-400 flex flex-col gap-4">
//                                     <li>
//                                         <span className="font-semibold text-white">Responsive Design</span>
//                                         <p className="text-base mt-1">Websites that adapt perfectly to all devices and screen sizes.</p>
//                                     </li>
//                                     <li>
//                                         <span className="font-semibold text-white">Exportable Code</span>
//                                         <p className="text-base mt-1">Download full source code for custom hosting and further development.</p>
//                                     </li>
//                                     <li>
//                                         <span className="font-semibold text-white">One-Click Deploy</span>
//                                         <p className="text-base mt-1">Instantly launch websites with a simple deployment process.</p>
//                                     </li>
//                                     <li>
//                                         <span className="font-semibold text-white">Seamless Collaboration</span>
//                                         <p className="text-base mt-1">Real-time team collaboration on website projects.</p>
//                                     </li>
//                                     <li>
//                                         <span className="font-semibold text-white">Drag & Drop Customization</span>
//                                         <p className="text-base mt-1">Intuitive interface for easy website layout and design modifications.</p>
//                                     </li>
//                                     <li>
//                                         <span className="font-semibold text-white">Color Palette Selection</span>
//                                         <p className="text-base mt-1">Custom color schemes to match your brand identity.</p>
//                                     </li>

//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-start-2 col-span-3 row-start-12 row-span-3 p-4  border-[0.8px] border-gray-500/70 border-b-0 rounded-tr-lg rounded-tl-lg shadow-md bg-white/5 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm">

//                     </div>

//                     <div className="col-start-5 col-span-4 row-start-1 row-span-1 p-4  border-[0.8px] border-gray-500/70 border-t-0 rounded-bl-lg rounded-br-lg shadow-md bg-white/5 bg-gradient-to-t from-white/10 to-transparent backdrop-blur-sm">

//                     </div>
//                     <div className="col-start-5 col-span-4 row-start-2 row-span-4 p-4 bg-white/10 backdrop-blur-lg shadow-md border-[0.8px] border-gray-500 rounded-lg text-white">
//                         <div className="h-full max-h-8xl">
//                             <div className="flex items-center gap-4 text-2xl font-sans mb-4">
//                                 <FontAwesomeIcon icon={faCubesStacked} />
//                                 <span>TechStacks</span>
//                             </div>
//                             <div className="flex gap-8 items-start">
//                                 <div className="flex-1">
//                                     <h3 className="text-xl font-normal mb-2">FrontEnd</h3>
//                                     <div className="px-5">
//                                         <ul className="list-disc text-lg text-gray-400 flex flex-col gap-1">
//                                             <li>React</li>
//                                             <li>Tailwind CSS</li>
//                                             <li>SweetAlert2</li>
//                                             <li>Framer Motion</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="flex-1">
//                                     <h3 className="text-xl font-normal mb-2">BackEnd</h3>
//                                     <div className="px-5">
//                                         <ul className="list-disc text-lg text-gray-400 flex flex-col gap-1">
//                                             <li>NodeJS</li>
//                                             <li>MongoDB</li>
//                                             <li>ExpressJS</li>
//                                             <li>Anthropic Claude API</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex flex-col justify-center items-center text-center col-start-5 col-span-4 row-start-6 row-span-4 p-4 rounded-lg text-white bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] backdrop-blur-lg border border-indigo-400/60 shadow-2xl shadow-black/40">
//                         <div className="font-semibold flex items-center" >
//                             <FontAwesomeIcon icon={faHexagonNodes} className="mr-2 hidden md:w-20 md:h-20 md:inline text-indigo-500" />
//                             <span className="text-white font-normal text-5xl">HexCode</span>
//                         </div>
//                         <div className="text-gray-300 font-light">
//                             <p>Revolutionize your development workflow with AI-powered website generation. Create stunning, responsive designs with unprecedented speed and precision.</p>
//                         </div>
//                     </div>
//                     <div className="col-start-5 col-span-4 row-start-10 row-span-4 p-4 bg-white/10 backdrop-blur-lg shadow-md border-[0.8px] border-gray-500 rounded-lg text-white">
//                         <div className="flex items-center gap-4 text-2xl font-sans mb-4">
//                             <FontAwesomeIcon icon={faBullseye} />
//                             <span>Future Targets</span>
//                         </div>

//                         <div className="text-gray-400   ">
//                             <p>
//                                 Our vision is to build cutting-edge React applications that prioritize performance, scalability, and intuitive user experiences. We'll leverage advanced technologies to create faster, more adaptive web solutions that push the boundaries of modern development through continuous innovation and technical excellence.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="col-start-5 col-span-4 row-start-14 row-span-1 p-4  border-[0.8px] border-gray-500/70 border-b-0 rounded-tr-lg rounded-tl-lg shadow-md bg-white/5 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm">

//                     </div>

//                     <div className="col-start-9 col-span-3 row-start-1 row-span-3 p-4  border-[0.8px] border-gray-500/70 border-t-0 rounded-bl-lg rounded-br-lg shadow-md bg-white/5 bg-gradient-to-t from-white/10 to-transparent backdrop-blur-sm">

//                     </div>
//                     <div className="col-start-9 col-span-3 row-start-4 row-span-8 p-6 bg-white/10 backdrop-blur-lg shadow-md border-[0.8px] border-gray-500 rounded-lg text-white">
//                         <div className="flex flex-col h-full">
//                             <div className="flex items-center gap-4 text-2xl font-sans mb-4">
//                                 <FontAwesomeIcon icon={faTimeline} />
//                                 <span>How It Works?</span>
//                             </div>

//                             <div className="px-4">
//                                 <ul className="list-disc text-xl text-gray-400 flex flex-col gap-4">
//                                     <li>
//                                         <span className="font-semibold text-white">Describe Your Website</span>
//                                         <p className="text-base mt-1">Explain your website concept in plain text, creating a clear blueprint for your project.</p>
//                                     </li>
//                                     <li>
//                                         <span className="font-semibold text-white">AI Generation</span>
//                                         <p className="text-base mt-1">Our AI analyzes your description and automatically builds website structure, responsive layout, core components, and design elements.</p>
//                                     </li>
//                                     <li>
//                                         <span className="font-semibold text-white">Customize</span>
//                                         <p className="text-base mt-1">Fine-tune your site using a drag-and-drop editor, color palette customization, real-time preview, and a comprehensive component library.</p>
//                                     </li>
//                                     <li>
//                                         <span className="font-semibold text-white">Collaborate & Deploy</span>
//                                         <p className="text-base mt-1">Work with your team, preview across devices, deploy with one click, and download source code as needed.</p>
//                                     </li>
//                                     <li>
//                                         <span className="font-semibold text-white">Explore & Innovate</span>
//                                         <p className="text-base mt-1">Discover public projects, copy and customize existing ideas, and collaborate to build something unique.</p>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-start-9 col-span-3 row-start-12 row-span-3 p-4  border-[0.8px] border-gray-500/70 border-b-0 rounded-tr-lg rounded-tl-lg shadow-md bg-white/5 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm">

//                     </div>

//                     <div className="col-start-14 col-span-1 row-start-5 row-span-6 p-4 border-[0.8px] border-gray-500/70 border-e-0 rounded-tl-lg rounded-bl-lg bg-white/5 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm">
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHexagonNodes,
  faCubesStacked,
  faListUl,
  faTimeline,
  faBullseye
} from "@fortawesome/free-solid-svg-icons";

export default function CardLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100  text-black box-border bg-transparent">
      
      <main className="flex-grow overflow-auto p-4">
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-12 gap-2">
          
          {/* Spacer Left */}
          <div className="col-start-1 col-span-1 row-start-5 row-span-6 p-4
                          border-[0.8px] border-gray-500/70 border-s-0
                          rounded-tr-lg rounded-br-lg bg-white/5
                          bg-gradient-to-l from-white/10 to-transparent
                          backdrop-blur-sm" />

          {/* Empty Top‑Left */}
          <div className="col-start-2 col-span-3 row-start-1 row-span-3 p-4
                          border-[0.8px] border-gray-500/70 border-t-0
                          rounded-bl-lg rounded-br-lg shadow-md
                          bg-white/5 bg-gradient-to-t from-white/10 to-transparent
                          backdrop-blur-sm" />

          {/* Key Features */}
          <div className="col-start-2 col-span-3 row-start-4 row-span-8 p-6
                          bg-white/10 backdrop-blur-lg shadow-md
                          border-[0.8px] border-gray-500 rounded-lg text-white">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 text-2xl mb-4">
                <FontAwesomeIcon icon={faListUl} />
                <span>Key Features</span>
              </div>
              <ul className="list-disc text-xl text-gray-400 flex flex-col gap-4 px-4">
                <li>
                  <span className="font-semibold text-white">🎨 Intelligent Portfolio Design</span>
                  <p className="mt-1">Transforms your text prompts into a cohesive, responsive layout.</p>
                </li>
                <li>
                  <span className="font-semibold text-white">🔐 Secure Authentication</span>
                  <p className="mt-1">Google OAuth 2.0 sign‑in & secure session management.</p>
                </li>
                <li>
                  <span className="font-semibold text-white">👥 Collaborative Editing</span>
                  <p className="mt-1">Real‑time, multi‑user collaboration on your portfolio.</p>
                </li>
                <li>
                  <span className="font-semibold text-white">🎯 Intuitive Interface</span>
                  <p className="mt-1">Multiple text areas, drag‑and‑drop controls & live preview.</p>
                </li>
                <li>
                  <span className="font-semibold text-white">🎨 Color Palette Customization</span>
                  <p className="mt-1">Personalize themes to match your brand identity.</p>
                </li>
                <li>
                  <span className="font-semibold text-white">⚡ One‑Click Deployment</span>
                  <p className="mt-1">Deploy instantly or export full source code for custom hosting.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Spacer Below Key Features */}
          <div className="col-start-2 col-span-3 row-start-12 row-span-3 p-4
                          border-[0.8px] border-gray-500/70 border-b-0
                          rounded-tr-lg rounded-tl-lg shadow-md
                          bg-white/5 bg-gradient-to-b from-white/10 to-transparent
                          backdrop-blur-sm" />

          {/* Empty Top‑Center */}
          <div className="col-start-5 col-span-4 row-start-1 row-span-1 p-4
                          border-[0.8px] border-gray-500/70 border-t-0
                          rounded-bl-lg rounded-br-lg shadow-md
                          bg-white/5 bg-gradient-to-t from-white/10 to-transparent
                          backdrop-blur-sm" />

          {/* TechStacks */}
          <div className="col-start-5 col-span-4 row-start-2 row-span-4 p-4
                          bg-white/10 backdrop-blur-lg shadow-md
                          border-[0.8px] border-gray-500 rounded-lg text-white">
            <div>
              <div className="flex items-center gap-4 text-2xl mb-4">
                <FontAwesomeIcon icon={faCubesStacked} />
                <span>TechStacks</span>
              </div>
              <div className="flex gap-8">
                <div>
                  <h3 className="text-xl mb-2">FrontEnd</h3>
                  <ul className="list-disc text-lg text-gray-400 flex flex-col gap-1 px-5">
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>SweetAlert2</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl mb-2">BackEnd</h3>
                  <ul className="list-disc text-lg text-gray-400 flex flex-col gap-1 px-5">
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>ExpressJS</li>
                    <li>Anthropic Claude API</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* HexCode Hero */}
          <div className="col-start-5 col-span-4 row-start-6 row-span-4 p-4
                          flex flex-col justify-center items-center text-center
                          rounded-lg text-white bg-gradient-to-br from-[#1A1A2E] to-[#0F3460]
                          backdrop-blur-lg border border-indigo-400/60 shadow-2xl shadow-black/40">
            <div className="flex items-center font-semibold mb-2">
              <FontAwesomeIcon icon={faHexagonNodes}
                className="mr-2 hidden md:inline text-indigo-500 md:w-20 md:h-20"/>
              <span className="text-5xl font-normal">HexCode</span>
            </div>
            <p className="text-gray-300 font-light">
              AI‑powered portfolio builder: fill prompts for About, Skills, Projects & Contact, and instantly generate a deployable personal website.
            </p>
          </div>

          {/* Perfect For */}
          <div className="col-start-5 col-span-4 row-start-10 row-span-4 p-4
                          bg-white/10 backdrop-blur-lg shadow-md
                          border-[0.8px] border-gray-500 rounded-lg text-white">
            <div className="flex items-center gap-4 text-2xl mb-4">
              <FontAwesomeIcon icon={faBullseye} />
              <span>Perfect For</span>
            </div>
            <ul className="list-disc text-lg text-gray-400 flex flex-col gap-2 px-4">
              <li>
                <span className="font-semibold text-white">Students & Job Seekers</span> showcasing work and achievements
              </li>
              <li>
                <span className="font-semibold text-white">Professionals</span> needing a quick personal site
              </li>
              <li>
                <span className="font-semibold text-white">Anyone</span> who wants a deployable portfolio without coding
              </li>
            </ul>
          </div>

          {/* Spacer Below Perfect For */}
          <div className="col-start-5 col-span-4 row-start-14 row-span-1 p-4
                          border-[0.8px] border-gray-500/70 border-b-0
                          rounded-tr-lg rounded-tl-lg shadow-md
                          bg-white/5 bg-gradient-to-b from-white/10 to-transparent
                          backdrop-blur-sm" />

          {/* Empty Top‑Right */}
          <div className="col-start-9 col-span-3 row-start-1 row-span-3 p-4
                          border-[0.8px] border-gray-500/70 border-t-0
                          rounded-bl-lg rounded-br-lg shadow-md
                          bg-white/5 bg-gradient-to-t from-white/10 to-transparent
                          backdrop-blur-sm" />

          {/* How It Works */}
          <div className="col-start-9 col-span-3 row-start-4 row-span-8 p-6
                          bg-white/10 backdrop-blur-lg shadow-md
                          border-[0.8px] border-gray-500 rounded-lg text-white">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 text-2xl mb-4">
                <FontAwesomeIcon icon={faTimeline} />
                <span>How It Works?</span>
              </div>
              <ul className="list-disc text-xl text-gray-400 flex flex-col gap-4 px-4">
                <li>
                  <span className="font-semibold text-white">1️⃣ Log In & Get Started</span>
                  <p className="mt-1">Sign in via Google OAuth and click Get Started.</p>
                </li>
                <li>
                  <span className="font-semibold text-white">2️⃣ Fill in Your Details</span>
                  <p className="mt-1">Enter Name, Profile Picture, About, Skills, Projects & Extracurriculars.</p>
                </li>
                <li>
                  <span className="font-semibold text-white">3️⃣ AI Prompt Generation</span>
                  <p className="mt-1">HexCode synthesizes inputs into a blueprint prompt.</p>
                </li>
                <li>
                  <span className="font-semibold text-white">4️⃣ Portfolio Generation</span>
                  <p className="mt-1">AI builds a fully responsive, deployable site.</p>
                </li>
                <li>
                  <span className="font-semibold text-white">5️⃣ Customize</span>
                  <p className="mt-1">Use drag‑and‑drop, color palettes, live preview & component library.</p>
                </li>
                <li>
                  <span className="font-semibold text-white">6️⃣ Collaborate & Deploy</span>
                  <p className="mt-1">Work with teammates, preview across devices, deploy or export code.</p>
                </li>
                <li>
                  <span className="font-semibold text-white">7️⃣ Explore & Innovate</span>
                  <p className="mt-1">Discover public portfolios, copy templates, and build upon community ideas.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Spacer Right */}
          <div className="col-start-14 col-span-1 row-start-5 row-span-6 p-4
                          border-[0.8px] border-gray-500/70 border-e-0
                          rounded-tl-lg rounded-bl-lg bg-white/5
                          bg-gradient-to-r from-white/10 to-transparent
                          backdrop-blur-sm" />

        </div>
      </main>

     
    </div>
  );
}

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { 
//     faRobot, 
//     faListCheck, 
//     faFilePen, 
//     faSuitcase, 
//     faUsers, 
//     faArrowUp,
// } from "@fortawesome/free-solid-svg-icons";
// import { useEffect, useState } from "react";
// import Swal from 'sweetalert2';
// import { useUser } from "../hooks/userContext";
// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/";

// const Prompt = () => {

//     const HardPrompts = [
//         // "Generate a modern, responsive portfolio website to showcase projects, skills, and experience. Include a Home page (bio, photo), Projects page (demos, descriptions), Skills page, About page, and Contact page (form, social links). Features: sticky header, downloadable resume, testimonials, dark mode, and SEO optimization.",
//         // "Create a clean, responsive multi-page blog website with a Home page (recent posts), Blog Listing (pagination, filters), Single Post (title, author, comments), About, Contact, and an Admin Dashboard (create/edit/delete posts). Features: Markdown support, API/JSON data, category sidebar, SEO optimization, and dark mode.",
//         // "Build a modern, fully responsive e-commerce website with a Home page (featured products), Product Listing (filters), Single Product (details, reviews, cart), Cart, Checkout, and Order Confirmation. Features: user authentication, admin dashboard, secure payments, wishlist, and fast loading times.",
//         // "Develop a responsive task management web app with a Dashboard (To-Do, In Progress, Completed), Task List (filters), Single Task View (details, subtasks), Add/Edit Task, and Settings. Features: drag-and-drop, reminders, user authentication, dark mode, and API/local storage integration."
      
//         `"Generate a professional, modern, and fully responsive CV Generator Web Application using React.js. The project should follow clean architecture with proper component structure and modern React practices (functional components, hooks, routing, error boundaries). The app must have the following structure and features:
//       Do not insert images.
//       Pages:
//       1. Form Page -> Allows the user to input their details via a structured form, including:
//          - Personal Information: Name, Course, Department, Roll No, College, Email, Phone
//          - Online Profiles: GitHub, Website, LeetCode, Codeforces
//          - Section Entries (TextArea or Rich Text): Education, Projects, Skills, Achievements, Key Courses Taken, Positions of Responsibility
      
//       2. CV Preview Page -> Renders a CV based on the form input data using a well-structured layout that emulates a LaTeX-style academic resume. Supports live preview, hardcoded picture using <img src=\"profile.jpg\" alt=\"Profile Picture of Candidate\"> for the logo of college, and sections must be displayed using reusable Card components.
      
//       Features:
//       - Sticky Header Navigation with links to Form and CV Preview pages
//       - Single Page Layout for CV with a professional academic format (like LaTeX template)
//       - Draggable Layout Support: All DOM elements must include either a draggable, vertical, or horizontal class 
//       - Image Tag Requirement: Use an <img> tag for profile picture with hardcoded src and alt
//       - Responsive Design: Layout must adapt seamlessly for desktop and mobile devices using pure CSS
//       - Error Boundary: Gracefully catch and handle render errors in any route/component
//       - Dark Mode Toggle: Optional toggle switch to switch between light and dark modes
//       - SEO Optimization: Include meta tags and structured content for better indexing
//       - Performance Optimization: Lazy loading, efficient rendering, minimized CSS/JS
//       - Reusable Components: Use a reusable Card.js component for all CV sections
//       - Persistent Data: Store user input in localStorage so it persists across page refresh
//       - No External Drag Script: Do not implement drag logic; just add the required classnames
//       - Download Resume Feature (optional): Add a button to download the rendered CV in PDF (future extension)
      
//       Technical Constraints:
//       - Use only React Router for navigation
//       - Do not use third-party UI libraries (e.g., Material UI or Bootstrap)
//       - Code should be clean, modular, and production-ready
//       - No component files inside /src — All JS files (App.js, routes, components) should be in root
//       - CSS for each page should go into a separate file inside /css folder and imported accordingly
      
//       Output:
//       - Return a complete project in JSON format with:
//         - Keys as full file paths (e.g., /App.js, /css/FormPage.css)
//         - Values as full file content
//         - entryFilePath pointing to App.js
//         - Array of generated file paths in generatedFiles

//         Sample CV Format:
//         Vibha Gupta
//         B.Tech- Data Science and Artificial Intelligence
//         Roll No.: 230150029
//         Indian Institute of Technology, Guwahati
//         Education
//         g.vibha@iitg.ac.in
//         9216195181
//         GitHub | Website
//         LeetCode| Codeforces
//         Degree/Certificate
//         Institute/Board
//         CGPA/Percentage
//         B.Tech. Major
//         Indian Institute of Technology, Guwahati
//         Year
//         7.5 (Current)
//         Senior Secondary
//         RBSE Board
//         2024-Present
//         94.8%
//         Secondary
//         RBSE Board
//         2023
//         Projects
//         100%
//         2021
//          • Techniche’24 Website
//         Techniche, the annual techno-management fest, IIT Guwahati
//          July 2024- Aug. 2024
//         Website– Designed the official website for Techniche’24, offering event details and a registration platform for participants.– Implemented React.js for user interface and integrated 3D product models using R3F, enhancing user interaction.– Attracted over 50,000 users, significantly boosting visibility and participation in Techniche events.
//         • Fraud Detection Model
//         Consulting & Analytics Club, IIT Guwahati
//         September 2024
//         GitHub– Developed a machine learning model tailored to identifying fraudulent transactions on major digital payment platforms.– Utilized Principal Component Analysis (PCA) for effective dimensionality reduction, applied Decision Tree algorithms
//         for highly accurate classification, and conducted comprehensive Exploratory Data Analysis (EDA) using Scikit-learn.– Delivered a highly reliable solution that enhance financial security by mitigating risks in digital payment platforms.
//         • AI Chat Bot
//         Inter IIT Tech Camp
//         October 2024
//         GitHub– Designed an AI-driven conversational chatbot modeled enhance user productivity in technical problem-solving .– Integrated Google Gemini API for context-aware conversational intelligence, enabling accurate code snippet highlight
//         ing and extraction, while leveraging MongoDB for efficient multi-user chat history storage and retrieval.– Ensured user security with JWT authentication, enabling a secure and efficient cross-platform experience.
//         Skills
//         • Programming Languages:C, C++, Python, SQL, R*
//         • Web Development:HTML, CSS, JavaScript, React, Bootstrap; Node.js, MongoDB, Express.js; RESTful APIs, PHP
//         • Data Science and Analytics:Data Analysis: Pandas, NumPy, SciPy; Data Visualization: Matplotlib, Seaborn;
//         Machine Learning: Scikit-Learn (Supervised and Unsupervised Machine Learning Algorithms)
//         • Tools & Technologies:Git, GitHub, Visual Studio Code, MinGW, Shiny App, Postman
//         • Operating Systems:Windows, Linux (Ubuntu)
//         Achievements
//         •HacktoberFest 2024:Rank 3 in Institutional Leaderboard for open-source contributions. Oct 2024
//         •CodeForce:Rating- 1210.
//         •Smart India Hackathon:Cleared Round 1, enhancing lunar PSR images using GANs and U-Net models. Sep 2024
//         •JEE Advanced:Achieved AIR 2106, 99.2 percentile in JEE Mains. June 2024
//         •Rajasthan Topper:Secured 100% in Class 10, honored with Indra Priyadarshini Award by Rajasthan Govt. July 2021
//         Key courses taken
//         • Computers:Data Structure and Algorithm, Introduction to Computing , DBMS*
//         • Data Science and AI:Introduction to Data Science , Statistical Foundation of Data Science*
//         Positions of Responsibility
//         • Web Developer,Student’s Web Community (SWC)
//         Sep 2024- ongoing
//         •Contributed to developing apps and platforms that enhanced IIT Guwahati’s digital ecosystem for students and faculty,
//         creating projects under SWC to simplify campus life and deliver solutions widely used by the campus community.
//         • Technical Secretary,Dhansiri Hostel
//         May 2024- April 2025
//         •Spearheaded technical initiatives and guided Kriti participants towards innovative achievements and mentor them.
//         • Core-Team Member,Dev-ops, Techniche
//         Feb 2024- ongoing
//         •Actively contributed in maintaining and enhancing website and developing the app and website for Techniche’25,
//         integrating real-time event tracking, designing event details, and building a seamless registration platform.
      
//       Target Output Format:
//       {
//         \"projectTitle\": \"\",
//         \"explanation\": \"\",
//         \"files\": {
//           \"/App.js\": { \"code\": \"...\" },
//           ...
//         },
//         \"entryFilePath\": \"/App.js\",
//         \"generatedFiles\": [\"/App.js\", \"/CVPage.js\", ...]
//       }"`
//       ];
    
//     const { user, setUser } = useUser();
    
//     const [prompt, setPrompt] = useState("");

//     const [callCreatePrject, setCallCreateProject] = useState(false);

//     useEffect(()=>{
//         if(callCreatePrject)handleCreateProject();
//         setCallCreateProject(false);
//     },[callCreatePrject])

    const handleCreateProject = async () => {
        if(!user){
            window.location.href = `${BACKEND_URL}auth/google`;
            return;
        }
        if(!prompt.trim()) return;
        // const { value: formValues } = await Swal.fire({
        //     title: 'Create Project',
        //     html: `
        //         <div class="w-full max-w-xs md:max-w-md mx-auto space-y-4">
        //             <div class="flex flex-col space-y-2">
        //                 <label class="text-left tracking-wide text-sm font-medium text-slate-200" for="projectName">
        //                     Project Name:
        //                 </label>
        //                 <input
        //                     id="projectName"
        //                     class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        //                     placeholder="Enter project name"
        //                 />
        //             </div>
                    
        //             <div class="flex flex-col space-y-2">
        //                 <label class="text-left tracking-wide text-sm font-medium text-slate-200" for="visibility">
        //                     Visibility:
        //                 </label>
        //                 <select
        //                     id="visibility"
        //                     class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        //                 >
        //                     <option value="private">Private</option>
        //                     <option value="public">Public</option>
        //                 </select>
        //             </div>
                    
        //             <div class="flex flex-col space-y-2">
        //                 <label class="text-left tracking-wide text-sm font-medium text-slate-200" for="projectType">
        //                     Project Type:
        //                 </label>
        //                 <select
        //                     id="projectType"
        //                     class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        //                 >
        //                     <option value="html-css-js">HTML CSS JS</option>
        //                     <option value="react">React</option>
        //                 </select>
        //             </div>
        //             <div class="flex flex-col space-y-2">
        //                 <label class="text-left tracking-wide text-sm font-medium text-slate-200" for="projectName">
        //                     Project Description:
        //                 </label>
        //                 <textarea
        //                     id="projectDescription"
        //                     class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        //                     placeholder="Enter project description"
        //                     rows="4"
        //                 ></textarea>
        //             </div>
        //         </div>
        //     `,
        //     showCancelButton: true,
        //     cancelButtonText: 'Cancel',
        //     confirmButtonText: 'Create',
        //     customClass: {
        //         container: 'swal2-container-custom',
        //         popup: 'rounded-lg max-w-xs md:max-w-md mx-auto bg-slate-800 text-indigo-500',
        //         confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md',
        //         cancelButton: 'bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md'
        //     },
        //     backdrop: 'backdrop-filter: blur(10px);',
        //     focusConfirm: false,
        //     preConfirm: () => {
        //         const name = document.getElementById('projectName').value.trim();
        //         const visibility = document.getElementById('visibility').value;
        //         const projectType = document.getElementById('projectType').value;
        //         const description = document.getElementById('projectDescription').value;

        //         if (!name) {
        //             Swal.showValidationMessage('Project Name is required!');
        //             return false;
        //         }

        //         return { name, visibility, projectType, description };
        //     }
        // });

        const { value: formValues } = await Swal.fire({
            title: 'Create Project',
            html: `
                <div class="w-full max-w-xl mx-auto space-y-6">
                <!-- Project/Section Title -->
                <div class="flex flex-col space-y-2">
                    <label for="sectionTitle" class="text-left tracking-wide text-sm font-semibold text-slate-200">
                    CV Section Title:
                    </label>
                    <input
                    id="sectionTitle"
                    class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Projects, Education, Experience"
                    />
                </div>

                <!-- Entry Title -->
                <div class="flex flex-col space-y-2">
                    <label for="entryTitle" class="text-left tracking-wide text-sm font-semibold text-slate-200">
                    Entry Title:
                    </label>
                    <input
                    id="entryTitle"
                    class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Personal Portfolio Website"
                    />
                </div>

                <!-- Date / Duration -->
                <div class="flex flex-col space-y-2">
                    <label for="entryDate" class="text-left tracking-wide text-sm font-semibold text-slate-200">
                    Duration or Date:
                    </label>
                    <input
                    id="entryDate"
                    class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Jan 2024 – Mar 2024"
                    />
                </div>

                <!-- Description / Bullets -->
                <div class="flex flex-col space-y-2">
                    <label for="entryDetails" class="text-left tracking-wide text-sm font-semibold text-slate-200">
                    Bullet Points (separate by semicolon):
                    </label>
                    <textarea
                    id="entryDetails"
                    class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Developed responsive UI using React.js; Integrated backend with Node.js and Express.js; Deployed site using Netlify"
                    rows="4"
                    ></textarea>
                </div>

                <!-- Visibility -->
                <div class="flex flex-col space-y-2">
                    <label for="visibility" class="text-left tracking-wide text-sm font-semibold text-slate-200">
                    Visibility:
                    </label>
                    <select
                    id="visibility"
                    class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    </select>
                </div>
                </div>

            `,
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Create',
            customClass: {
                container: 'swal2-container-custom',
                popup: 'rounded-lg max-w-xs md:max-w-md mx-auto bg-slate-800 text-indigo-500',
                confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md',
                cancelButton: 'bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md'
            },
            backdrop: 'backdrop-filter: blur(10px);',
            focusConfirm: false,
            preConfirm: () => {
                const name = document.getElementById('projectName').value.trim();
                const visibility = document.getElementById('visibility').value;
                const projectType = document.getElementById('projectType').value;
                const description = document.getElementById('projectDescription').value;

                if (!name) {
                    Swal.showValidationMessage('Project Name is required!');
                    return false;
                }

                return { name, visibility, projectType, description };
            }
        });

        if (formValues) {
            try {
                const response = await fetch(`${BACKEND_URL}project/add`, { 
                    method: "POST", 
                    headers: { 
                        "Content-Type": "application/json", 
                    },
                    body: JSON.stringify({
                        userId: user._id,
                        name: formValues.name,
                        description: formValues.description,
                        visibility: formValues.visibility,
                        projectType: formValues.projectType,
                        prompt: prompt
                    }),
                    credentials: "include", 
                });
                const data = await response.json();
                localStorage.setItem('firstprompt',JSON.stringify(data));
                if (response.status === 201){
                    
                    await Swal.fire({
                        icon: 'success',
                        title: 'Project Created!',
                        html: `
                            <div class="text-center">
                                <p>Your project <strong>${formValues.name}</strong> has been successfully created.</p>
                                <p>Redirecting to Project Window</p>
                            </div>
                        `,
                        customClass: {
                            container: 'swal2-container-custom',
                            popup: 'rounded-lg max-w-xs md:max-w-md mx-auto text-gray-200 p-6 shadow-xl',
                            title: 'text-xl font-semibold text-green-400 mb-4',
                            confirmButton: 'bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md',
                            htmlContainer: 'text-sm font-normal text-gray-500',
                            iconColor: 'text-green-400'
                        },
                        backdrop: 'backdrop-filter: blur(12px);',
                    });
                    
                    setPrompt("");
                    
                    window.location.href = `/main/${(formValues.projectType==='react')?'react':'plain'}/${data.PID}`;
                }
            } catch (err) {
                console.log(err);

                await Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Something went wrong. Please try again later.',
                    customClass: {
                        container: 'swal2-container-custom',
                        popup: 'rounded-lg max-w-xs md:max-w-md mx-auto text-gray-200 p-6 shadow-xl',
                        title: 'text-xl font-semibold text-red-400 mb-4',
                        confirmButton: 'bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2 rounded-md',
                        htmlContainer: 'text-sm font-normal text-gray-500',
                        iconColor: 'text-red-400'
                    },
                    backdrop: 'backdrop-filter: blur(12px);'
                });
            }
        }
    };

    return ( 
        <div className="relative w-[90vw] mb-28 md:w-[50vw] mt-20 min-h-[50vh] bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] backdrop-blur-lg rounded-2xl border border-indigo-400/60 shadow-2xl shadow-black/40 p-6 mx-auto flex flex-col my-10">

            <div className="text-center relative z-10 flex flex-col items-center mt-16">
                <h3 className="text-[18px] md:text-[25px] font-light text-white mb-4 tracking-wide">
                    <FontAwesomeIcon icon={faRobot} className="mr-2"/> AI Powered Development
                </h3>
            </div>

            <div className="relative z-10 flex justify-center mb-4 ">
                <div className="flex flex-wrap justify-center gap-3 px-2">
                    {[
                        { icon: faSuitcase, label: "Portfolio"},
                        { icon: faFilePen, label: "Blog"},
                        { icon: faUsers, label: "E-Commerce" },
                        { icon: faListCheck, label: "Tasks" }
                    ].map((item, index) => (
                        <button 
                            key={index} 
                            className="px-4 py-2 text-sm md:text-base text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl hover:scale-105 transition-transform hover:shadow-lg whitespace-nowrap"
                            onClick={()=>{
                                setPrompt(HardPrompts[index]);
                                setCallCreateProject(true);
                                
                            }}
                        >
                            <FontAwesomeIcon icon={item.icon} className="mr-2" />
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="relative z-10 flex justify-center mt-auto p-4">
                <div className="bg-zinc-900 flex items-end w-full md:w-[600px] px-4 py-3 rounded-xl border border-gray-700 shadow-inner">
                    <textarea 
                        placeholder="Type your prompt..."
                        className="flex-1 bg-transparent text-white outline-none border-none px-2 placeholder-gray-400 text-md resize-none max-h-100 h-20 overflow-y-scroll"
                        style={{ height: 'auto', minHeight: '32px', maxHeight: '10em' }}
                        rows="1"
                        value={prompt}
                        onInput={(e) => {
                            setPrompt(e.target.value);
                            e.target.style.height = 'auto';
                            e.target.style.height = `${e.target.scrollHeight}px`;
                        }} 
                    />

                    <style>
                        {`
                            textarea::-webkit-scrollbar {
                                width: 6px;
                            }
                            textarea::-webkit-scrollbar-thumb {
                                background-color: rgba(255, 255, 255, 0.6);
                                border-radius: 8px;
                            }
                            textarea::-webkit-scrollbar-thumb:hover {
                                background-color: rgba(255, 255, 255, 0.9);
                            }
                            textarea::-webkit-scrollbar-track {
                                background-color: rgb(24,24,27);
                                border-radius: 8px;
                            }
                        `}
                    </style>
                    <button 
                        className="ml-3 hover:text-gray-300 px-3 transform hover:scale-110 transition-transform" 
                        onClick={handleCreateProject}
                    >                         
                        <FontAwesomeIcon 
                            icon={faArrowUp} 
                            className="h-6 w-6"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Prompt;


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faRobot, 
    faListCheck, 
    faFilePen, 
    faSuitcase, 
    faUsers, 
    faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { useUser } from "../hooks/userContext";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/";


const [prompt, setPrompt] = useState("");

const CvInputForm = () => {
    // Personal information fields (all are required)
    const [personal, setPersonal] = useState({
      name: "",
      course: "",
      roll: "",
      college: "",
      email: "",
      phone: "",
      github: "",
      website: "",
      leetcode: "",
      codeforces: ""
    });
  
    // Education details: three rows as an example – each row contains degree/description, board/institute, percentage, and duration/year.
    const [education, setEducation] = useState([
      { degree: "", board: "", percentage: "", year: "" },
      { degree: "", board: "", percentage: "", year: "" },
      { degree: "", board: "", percentage: "", year: "" }
    ]);
  
    // Project details: one project example with bullet points separated by semicolon.
    const [project, setProject] = useState({
      projectName: "",
      organization: "",
      dates: "",
      website: "",
      bulletPoints: ""
    });
  
    // Other details for additional sections.
    const [skills, setSkills] = useState("");
    const [por, setPOR] = useState("");
    const [achievement, setAchievement] = useState("");
    const [courses, setCourses] = useState("");
  
    // Final combined prompt state
    const [finalPrompt, setFinalPrompt] = useState("");
  
    const handleGeneratePrompt = (e) => {
      e.preventDefault();
  
      // Build education rows for the prompt with a LaTeX table row style.
      const educationRows = education
        .map(
          (row) =>
            `${row.degree} & ${row.board} & ${row.percentage} & ${row.year} \\\\ \\hline`
        )
        .join("\n");
  
      // Build bullet points for the project section.
      const projectBullets = project.bulletPoints
        .split(";")
        .map(bp => bp.trim() && `\\item {${bp.trim()}}`)
        .filter(Boolean)
        .join("\n");
  
      // Assemble the final prompt text.
      const promptText = `
  \\newcommand{\\name}{${personal.name}} % Your Name
  \\newcommand{\\course}{${personal.course}} % Your Course
  \\newcommand{\\roll}{${personal.roll}} % Your Roll No.
  \\newcommand{\\college}{${personal.college}} % College Name
  \\newcommand{\\emaila}{${personal.email}} % Email 1
  \\newcommand{\\phone}{${personal.phone}} % Your Phone Number
  \\newcommand{\\github}{${personal.github}} % Github
  \\newcommand{\\website}{${personal.website}} % Website
  \\newcommand{\\leetcode}{${personal.leetcode}} % LeetCode
  \\newcommand{\\codeforces}{${personal.codeforces}} % Codeforces
  
  \\hline
  ${educationRows}
  
  \\resumeProject
    {${project.projectName}} % Project Name
    {${project.organization}} % Organization Name
    {${project.dates}} % Event Dates
    {${project.website}} % Website Link
    \\resumeItemListStart
      ${projectBullets}
    \\resumeItemListEnd
  
  % Additional Details
  Skills: ${skills}
  POR: ${por}
  Achievements: ${achievement}
  Key Courses: ${courses}
      `;
      setFinalPrompt(promptText);
      const combinedPrompt = `${HardPrompts[0]}\n\n${finalPrompt}`;

      // Use setPrompt to update the state variable "prompt"
      setPrompt(combinedPrompt);
    };

const Prompt = () => {

    const HardPrompts = [
        // "Generate a modern, responsive portfolio website to showcase projects, skills, and experience. Include a Home page (bio, photo), Projects page (demos, descriptions), Skills page, About page, and Contact page (form, social links). Features: sticky header, downloadable resume, testimonials, dark mode, and SEO optimization.",
        // "Create a clean, responsive multi-page blog website with a Home page (recent posts), Blog Listing (pagination, filters), Single Post (title, author, comments), About, Contact, and an Admin Dashboard (create/edit/delete posts). Features: Markdown support, API/JSON data, category sidebar, SEO optimization, and dark mode.",
        // "Build a modern, fully responsive e-commerce website with a Home page (featured products), Product Listing (filters), Single Product (details, reviews, cart), Cart, Checkout, and Order Confirmation. Features: user authentication, admin dashboard, secure payments, wishlist, and fast loading times.",
        // "Develop a responsive task management web app with a Dashboard (To-Do, In Progress, Completed), Task List (filters), Single Task View (details, subtasks), Add/Edit Task, and Settings. Features: drag-and-drop, reminders, user authentication, dark mode, and API/local storage integration."
      
        `"Generate a professional, modern, and fully responsive CV Generator Web Application using React.js. The project should follow clean architecture with proper component structure and modern React practices (functional components, hooks, routing, error boundaries). The app must have the following structure and features:
      Do not insert images.
      Pages:
      1. Form Page -> Allows the user to input their details via a structured form, including:
         - Personal Information: Name, Course, Department, Roll No, College, Email, Phone
         - Online Profiles: GitHub, Website, LeetCode, Codeforces
         - Section Entries (TextArea or Rich Text): Education, Projects, Skills, Achievements, Key Courses Taken, Positions of Responsibility
      
      2. CV Preview Page -> Renders a CV based on the form input data using a well-structured layout that emulates a LaTeX-style academic resume. Supports live preview, hardcoded picture using <img src=\"profile.jpg\" alt=\"Profile Picture of Candidate\"> for the logo of college, and sections must be displayed using reusable Card components.
      
      Features:
      - Sticky Header Navigation with links to Form and CV Preview pages
      - Single Page Layout for CV with a professional academic format (like LaTeX template)
      - Draggable Layout Support: All DOM elements must include either a draggable, vertical, or horizontal class 
      - Image Tag Requirement: Use an <img> tag for profile picture with hardcoded src and alt
      - Responsive Design: Layout must adapt seamlessly for desktop and mobile devices using pure CSS
      - Error Boundary: Gracefully catch and handle render errors in any route/component
      - Dark Mode Toggle: Optional toggle switch to switch between light and dark modes
      - SEO Optimization: Include meta tags and structured content for better indexing
      - Performance Optimization: Lazy loading, efficient rendering, minimized CSS/JS
      - Reusable Components: Use a reusable Card.js component for all CV sections
      - Persistent Data: Store user input in localStorage so it persists across page refresh
      - No External Drag Script: Do not implement drag logic; just add the required classnames
      - Download Resume Feature (optional): Add a button to download the rendered CV in PDF (future extension)
      
      Technical Constraints:
      - Use only React Router for navigation
      - Do not use third-party UI libraries (e.g., Material UI or Bootstrap)
      - Code should be clean, modular, and production-ready
      - No component files inside /src — All JS files (App.js, routes, components) should be in root
      - CSS for each page should go into a separate file inside /css folder and imported accordingly
      
      Output:
      - Return a complete project in JSON format with:
        - Keys as full file paths (e.g., /App.js, /css/FormPage.css)
        - Values as full file content
        - entryFilePath pointing to App.js
        - Array of generated file paths in generatedFiles

        Sample CV Format:
        Vibha Gupta
        B.Tech- Data Science and Artificial Intelligence
        Roll No.: 230150029
        Indian Institute of Technology, Guwahati
        Education
        g.vibha@iitg.ac.in
        9216195181
        GitHub | Website
        LeetCode| Codeforces
        Degree/Certificate
        Institute/Board
        CGPA/Percentage
        B.Tech. Major
        Indian Institute of Technology, Guwahati
        Year
        7.5 (Current)
        Senior Secondary
        RBSE Board
        2024-Present
        94.8%
        Secondary
        RBSE Board
        2023
        Projects
        100%
        2021
         • Techniche’24 Website
        Techniche, the annual techno-management fest, IIT Guwahati
         July 2024- Aug. 2024
        Website– Designed the official website for Techniche’24, offering event details and a registration platform for participants.– Implemented React.js for user interface and integrated 3D product models using R3F, enhancing user interaction.– Attracted over 50,000 users, significantly boosting visibility and participation in Techniche events.
        • Fraud Detection Model
        Consulting & Analytics Club, IIT Guwahati
        September 2024
        GitHub– Developed a machine learning model tailored to identifying fraudulent transactions on major digital payment platforms.– Utilized Principal Component Analysis (PCA) for effective dimensionality reduction, applied Decision Tree algorithms
        for highly accurate classification, and conducted comprehensive Exploratory Data Analysis (EDA) using Scikit-learn.– Delivered a highly reliable solution that enhance financial security by mitigating risks in digital payment platforms.
        • AI Chat Bot
        Inter IIT Tech Camp
        October 2024
        GitHub– Designed an AI-driven conversational chatbot modeled enhance user productivity in technical problem-solving .– Integrated Google Gemini API for context-aware conversational intelligence, enabling accurate code snippet highlight
        ing and extraction, while leveraging MongoDB for efficient multi-user chat history storage and retrieval.– Ensured user security with JWT authentication, enabling a secure and efficient cross-platform experience.
        Skills
        • Programming Languages:C, C++, Python, SQL, R*
        • Web Development:HTML, CSS, JavaScript, React, Bootstrap; Node.js, MongoDB, Express.js; RESTful APIs, PHP
        • Data Science and Analytics:Data Analysis: Pandas, NumPy, SciPy; Data Visualization: Matplotlib, Seaborn;
        Machine Learning: Scikit-Learn (Supervised and Unsupervised Machine Learning Algorithms)
        • Tools & Technologies:Git, GitHub, Visual Studio Code, MinGW, Shiny App, Postman
        • Operating Systems:Windows, Linux (Ubuntu)
        Achievements
        •HacktoberFest 2024:Rank 3 in Institutional Leaderboard for open-source contributions. Oct 2024
        •CodeForce:Rating- 1210.
        •Smart India Hackathon:Cleared Round 1, enhancing lunar PSR images using GANs and U-Net models. Sep 2024
        •JEE Advanced:Achieved AIR 2106, 99.2 percentile in JEE Mains. June 2024
        •Rajasthan Topper:Secured 100% in Class 10, honored with Indra Priyadarshini Award by Rajasthan Govt. July 2021
        Key courses taken
        • Computers:Data Structure and Algorithm, Introduction to Computing , DBMS*
        • Data Science and AI:Introduction to Data Science , Statistical Foundation of Data Science*
        Positions of Responsibility
        • Web Developer,Student’s Web Community (SWC)
        Sep 2024- ongoing
        •Contributed to developing apps and platforms that enhanced IIT Guwahati’s digital ecosystem for students and faculty,
        creating projects under SWC to simplify campus life and deliver solutions widely used by the campus community.
        • Technical Secretary,Dhansiri Hostel
        May 2024- April 2025
        •Spearheaded technical initiatives and guided Kriti participants towards innovative achievements and mentor them.
        • Core-Team Member,Dev-ops, Techniche
        Feb 2024- ongoing
        •Actively contributed in maintaining and enhancing website and developing the app and website for Techniche’25,
        integrating real-time event tracking, designing event details, and building a seamless registration platform.
      
      Target Output Format:
      {
        \"projectTitle\": \"\",
        \"explanation\": \"\",
        \"files\": {
          \"/App.js\": { \"code\": \"...\" },
          ...
        },
        \"entryFilePath\": \"/App.js\",
        \"generatedFiles\": [\"/App.js\", \"/CVPage.js\", ...]
      }"`
      ];
    
    const { user, setUser } = useUser();
    

    const [callCreatePrject, setCallCreateProject] = useState(false);

    useEffect(()=>{
        if(callCreatePrject)handleCreateProject();
        setCallCreateProject(false);
    },[callCreatePrject])

    const handleCreateProject = async () => {
        if(!user){
            window.location.href = `${BACKEND_URL}auth/google`;
            return;
        }
        if(!prompt.trim()) return;

        const { value: formValues } = await Swal.fire({
            title: 'Create Project',
            html: `
                <div class="w-full max-w-xl mx-auto space-y-6">
                <!-- Project/Section Title -->
                <div class="flex flex-col space-y-2">
                    <label for="sectionTitle" class="text-left tracking-wide text-sm font-semibold text-slate-200">
                    CV Section Title:
                    </label>
                    <input
                    id="sectionTitle"
                    class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Projects, Education, Experience"
                    />
                </div>

                <!-- Entry Title -->
                <div class="flex flex-col space-y-2">
                    <label for="entryTitle" class="text-left tracking-wide text-sm font-semibold text-slate-200">
                    Entry Title:
                    </label>
                    <input
                    id="entryTitle"
                    class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Personal Portfolio Website"
                    />
                </div>

                <!-- Date / Duration -->
                <div class="flex flex-col space-y-2">
                    <label for="entryDate" class="text-left tracking-wide text-sm font-semibold text-slate-200">
                    Duration or Date:
                    </label>
                    <input
                    id="entryDate"
                    class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Jan 2024 – Mar 2024"
                    />
                </div>

                <!-- Description / Bullets -->
                <div class="flex flex-col space-y-2">
                    <label for="entryDetails" class="text-left tracking-wide text-sm font-semibold text-slate-200">
                    Bullet Points (separate by semicolon):
                    </label>
                    <textarea
                    id="entryDetails"
                    class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Developed responsive UI using React.js; Integrated backend with Node.js and Express.js; Deployed site using Netlify"
                    rows="4"
                    ></textarea>
                </div>

                <!-- Visibility -->
                <div class="flex flex-col space-y-2">
                    <label for="visibility" class="text-left tracking-wide text-sm font-semibold text-slate-200">
                    Visibility:
                    </label>
                    <select
                    id="visibility"
                    class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    </select>
                </div>
                </div>

            `,
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Create',
            customClass: {
                container: 'swal2-container-custom',
                popup: 'rounded-lg max-w-xs md:max-w-md mx-auto bg-slate-800 text-indigo-500',
                confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md',
                cancelButton: 'bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md'
            },
            backdrop: 'backdrop-filter: blur(10px);',
            focusConfirm: false,
            preConfirm: () => {
                const name = document.getElementById('projectName').value.trim();
                const visibility = document.getElementById('visibility').value;
                const projectType = document.getElementById('projectType').value;
                const description = document.getElementById('projectDescription').value;

                if (!name) {
                    Swal.showValidationMessage('Project Name is required!');
                    return false;
                }

                return { name, visibility, projectType, description };
            }
        });

        if (formValues) {
            try {
                const response = await fetch(`${BACKEND_URL}project/add`, { 
                    method: "POST", 
                    headers: { 
                        "Content-Type": "application/json", 
                    },
                    body: JSON.stringify({
                        userId: user._id,
                        name: formValues.name,
                        description: formValues.description,
                        visibility: formValues.visibility,
                        projectType: formValues.projectType,
                        prompt: prompt
                    }),
                    credentials: "include", 
                });
                const data = await response.json();
                localStorage.setItem('firstprompt',JSON.stringify(data));
                if (response.status === 201){
                    
                    await Swal.fire({
                        icon: 'success',
                        title: 'Project Created!',
                        html: `
                            <div class="text-center">
                                <p>Your project <strong>${formValues.name}</strong> has been successfully created.</p>
                                <p>Redirecting to Project Window</p>
                            </div>
                        `,
                        customClass: {
                            container: 'swal2-container-custom',
                            popup: 'rounded-lg max-w-xs md:max-w-md mx-auto text-gray-200 p-6 shadow-xl',
                            title: 'text-xl font-semibold text-green-400 mb-4',
                            confirmButton: 'bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md',
                            htmlContainer: 'text-sm font-normal text-gray-500',
                            iconColor: 'text-green-400'
                        },
                        backdrop: 'backdrop-filter: blur(12px);',
                    });
                    
                    setPrompt("");
                    
                    window.location.href = `/main/${(formValues.projectType==='react')?'react':'plain'}/${data.PID}`;
                }
            } catch (err) {
                console.log(err);

                await Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Something went wrong. Please try again later.',
                    customClass: {
                        container: 'swal2-container-custom',
                        popup: 'rounded-lg max-w-xs md:max-w-md mx-auto text-gray-200 p-6 shadow-xl',
                        title: 'text-xl font-semibold text-red-400 mb-4',
                        confirmButton: 'bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2 rounded-md',
                        htmlContainer: 'text-sm font-normal text-gray-500',
                        iconColor: 'text-red-400'
                    },
                    backdrop: 'backdrop-filter: blur(12px);'
                });
            }
        }
    };

    return ( 
        <div className="relative w-[90vw] mb-28 md:w-[50vw] mt-20 min-h-[50vh] bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] backdrop-blur-lg rounded-2xl border border-indigo-400/60 shadow-2xl shadow-black/40 p-6 mx-auto flex flex-col my-10">

            <div className="text-center relative z-10 flex flex-col items-center mt-16">
                <h3 className="text-[18px] md:text-[25px] font-light text-white mb-4 tracking-wide">
                    <FontAwesomeIcon icon={faRobot} className="mr-2"/> AI Powered Development
                </h3>
            </div>

            <div className="relative z-10 flex justify-center mb-4 ">
                <div className="flex flex-wrap justify-center gap-3 px-2">
                    {[
                        { icon: faSuitcase, label: "Portfolio"},
                        { icon: faFilePen, label: "Blog"},
                        { icon: faUsers, label: "E-Commerce" },
                        { icon: faListCheck, label: "Tasks" }
                    ].map((item, index) => (
                        <button 
                            key={index} 
                            className="px-4 py-2 text-sm md:text-base text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl hover:scale-105 transition-transform hover:shadow-lg whitespace-nowrap"
                            onClick={()=>{
                                setPrompt(HardPrompts[index]);
                                setCallCreateProject(true);
                                
                            }}
                        >
                            <FontAwesomeIcon icon={item.icon} className="mr-2" />
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="relative z-10 flex justify-center mt-auto p-4">
                <div className="bg-zinc-900 flex items-end w-full md:w-[600px] px-4 py-3 rounded-xl border border-gray-700 shadow-inner">
                    
                <form onSubmit={handleGeneratePrompt} className="p-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-2 gap-8">
        {/* Column 1: Personal Information and Education */}
        <div>
          <h2 className="text-xl font-bold mb-4">Personal Information</h2>
          {Object.keys(personal).map((key) => (
            <div key={key} className="mb-3">
              <label className="block text-sm font-medium capitalize">{key}</label>
              <input
                type="text"
                placeholder={key}
                value={personal[key]}
                onChange={(e) =>
                  setPersonal({ ...personal, [key]: e.target.value })
                }
                className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <h2 className="text-xl font-bold mt-8 mb-4">Education</h2>
          {education.map((row, idx) => (
            <div key={idx} className="border p-3 rounded mb-3">
              <div className="mb-2">
                <label className="block text-sm font-medium">Degree/Certificate</label>
                <input
                  type="text"
                  placeholder="e.g., B.Tech. Major"
                  value={row.degree}
                  onChange={(e) => {
                    const newEdu = [...education];
                    newEdu[idx].degree = e.target.value;
                    setEducation(newEdu);
                  }}
                  className="w-full px-2 py-1 border rounded"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium">Institute/Board</label>
                <input
                  type="text"
                  placeholder="e.g., Indian Institute of Technology, Guwahati"
                  value={row.board}
                  onChange={(e) => {
                    const newEdu = [...education];
                    newEdu[idx].board = e.target.value;
                    setEducation(newEdu);
                  }}
                  className="w-full px-2 py-1 border rounded"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium">CGPA/Percentage</label>
                <input
                  type="text"
                  placeholder="e.g., 9 (Current)"
                  value={row.percentage}
                  onChange={(e) => {
                    const newEdu = [...education];
                    newEdu[idx].percentage = e.target.value;
                    setEducation(newEdu);
                  }}
                  className="w-full px-2 py-1 border rounded"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium">Year/Duration</label>
                <input
                  type="text"
                  placeholder="e.g., 2024-Present"
                  value={row.year}
                  onChange={(e) => {
                    const newEdu = [...education];
                    newEdu[idx].year = e.target.value;
                    setEducation(newEdu);
                  }}
                  className="w-full px-2 py-1 border rounded"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Column 2: Project Details and Other Sections */}
        <div>
          <h2 className="text-xl font-bold mb-4">Project Details</h2>
          <div className="mb-3">
            <label className="block text-sm font-medium">Project Name</label>
            <input
              type="text"
              placeholder="Project Name"
              value={project.projectName}
              onChange={(e) =>
                setProject({ ...project, projectName: e.target.value })
              }
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">Organization Name</label>
            <input
              type="text"
              placeholder="Organization Name"
              value={project.organization}
              onChange={(e) =>
                setProject({ ...project, organization: e.target.value })
              }
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">Event Dates</label>
            <input
              type="text"
              placeholder="e.g., July 2024 - Aug. 2024"
              value={project.dates}
              onChange={(e) =>
                setProject({ ...project, dates: e.target.value })
              }
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">Website Link</label>
            <input
              type="text"
              placeholder="Website Link"
              value={project.website}
              onChange={(e) =>
                setProject({ ...project, website: e.target.value })
              }
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">
              Project Bullet Points <span className="text-xs">(separated by semicolon)</span>
            </label>
            <textarea
              placeholder="Bullet point 1; Bullet point 2; ..."
              value={project.bulletPoints}
              onChange={(e) =>
                setProject({ ...project, bulletPoints: e.target.value })
              }
              className="w-full px-2 py-1 border rounded"
            ></textarea>
          </div>

          <h2 className="text-xl font-bold mt-8 mb-4">Other Details</h2>
          <div className="mb-3">
            <label className="block text-sm font-medium">Skills</label>
            <input
              type="text"
              placeholder="List skills separated by commas"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">Positions of Responsibility (POR)</label>
            <input
              type="text"
              placeholder="Enter POR details"
              value={por}
              onChange={(e) => setPOR(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">Achievements (with Year)</label>
            <input
              type="text"
              placeholder="Enter achievements"
              value={achievement}
              onChange={(e) => setAchievement(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">Key Courses Taken</label>
            <input
              type="text"
              placeholder="List key courses"
              value={courses}
              onChange={(e) => setCourses(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button 
          type="submit" 
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Generate Final Prompt
        </button>
      </div>

      {finalPrompt && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Final Prompt</h2>
          <pre className="bg-gray-900 text-white p-4 rounded whitespace-pre-wrap">
            {finalPrompt}
          </pre>
        </div>
      )}
    </form>
                    
                    <textarea 
                        placeholder="Type your prompt..."
                        className="flex-1 bg-transparent text-white outline-none border-none px-2 placeholder-gray-400 text-md resize-none max-h-100 h-20 overflow-y-scroll"
                        style={{ height: 'auto', minHeight: '32px', maxHeight: '10em' }}
                        rows="1"
                        value={prompt}
                        onInput={(e) => {
                            setPrompt(e.target.value);
                            e.target.style.height = 'auto';
                            e.target.style.height = `${e.target.scrollHeight}px`;
                        }} 
                    />

                    <style>
                        {`
                            textarea::-webkit-scrollbar {
                                width: 6px;
                            }
                            textarea::-webkit-scrollbar-thumb {
                                background-color: rgba(255, 255, 255, 0.6);
                                border-radius: 8px;
                            }
                            textarea::-webkit-scrollbar-thumb:hover {
                                background-color: rgba(255, 255, 255, 0.9);
                            }
                            textarea::-webkit-scrollbar-track {
                                background-color: rgb(24,24,27);
                                border-radius: 8px;
                            }
                        `}
                    </style>
                    <button 
                        className="ml-3 hover:text-gray-300 px-3 transform hover:scale-110 transition-transform" 
                        onClick={handleCreateProject}
                    >                         
                        <FontAwesomeIcon 
                            icon={faArrowUp} 
                            className="h-6 w-6"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Prompt;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faRobot, 
  faListCheck, 
  faFilePen, 
  faSuitcase, 
  faUsers, 
  faArrowUp 
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useUser } from "../hooks/userContext";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/";

// Hardcoded prompt(s) that will be concatenated with user-generated final prompt.
const HardPrompts = [
  `Generate a professional, modern, and fully responsive CV Generator Web Application using React.js. The project should follow clean architecture with proper component structure and modern React practices (functional components, hooks, routing, error boundaries). The app must have the following structure and features:
Do not insert images.
Pages:
1. Form Page -> Allows the user to input their details via a structured form, including:
   - Personal Information: Name, Course, Department, Roll No, College, Email, Phone
   - Online Profiles: GitHub, Website, LeetCode, Codeforces
   - Section Entries: Education, Projects, Skills, Achievements, Key Courses Taken, Positions of Responsibility

2. CV Preview Page -> Renders a CV based on the form input data using a layout that emulates a LaTeX-style academic resume. The preview must support live editing, include a hardcoded picture tag for the college logo (<img src="profile.jpg" alt="Profile Picture of Candidate">), and display sections using reusable components.

Features include:
- Sticky header navigation linking to Form and CV Preview pages.
- Professional single-page layout inspired by LaTeX templates.
- Draggable layout support (by adding specified class names, no drag logic required).
- Responsive design using pure CSS.
- Error boundaries, dark mode toggle (optional), SEO optimization, performance improvements, and persistent data storage using localStorage.
  
Output format:
Return a complete project in JSON format with:
  - Keys as file paths (e.g., /App.js, /css/FormPage.css)
  - Values containing the full file content
  - The entryFilePath set to /App.js and an array listing generated file paths.`,
];

const Prompt = () => {
  // Get user context.
  const { user } = useUser();

  // State to hold the overall prompt (combination of HardPrompts and the user input final prompt).
  const [prompt, setPrompt] = useState("");

  // Flag that triggers project creation.
  const [callCreateProject, setCallCreateProject] = useState(false);

  // ========= State for the multi-section CV input ========= //
  // Personal information fields (all mandatory).
  const [personal, setPersonal] = useState({
    name: "",
    course: "",
    roll: "",
    college: "",
    email: "",
    phone: "",
    github: "",
    website: "",
    leetcode: "",
    codeforces: ""
  });

  // Education information: three example rows.
  const [education, setEducation] = useState([
    { degree: "", board: "", percentage: "", year: "" },
    { degree: "", board: "", percentage: "", year: "" },
    { degree: "", board: "", percentage: "", year: "" }
  ]);

  // Project details: one project example.
  const [project, setProject] = useState({
    projectName: "",
    organization: "",
    dates: "",
    website: "",
    bulletPoints: ""
  });

  // Other details: skills, positions of responsibility, achievements, and key courses.
  const [skills, setSkills] = useState("");
  const [por, setPOR] = useState("");
  const [achievement, setAchievement] = useState("");
  const [courses, setCourses] = useState("");
  const [finalPrompt, setFinalPrompt] = useState("");

  // ========= Functions ========= //

  // Helper function to combine the hardcoded prompt and final prompt text.
  const combinePrompts = (finalText) => {
    return `${HardPrompts[0]}\n\n${finalText}`;
  };

  // Generates the final prompt string from the multi-section CV form and updates the prompt state.
  const handleGeneratePrompt = (e) => {
    e.preventDefault();

    // Build education rows in a LaTeX table row style.
    const educationRows = education
      .map(
        (row) =>
          `${row.degree} & ${row.board} & ${row.percentage} & ${row.year} \\\\ \\hline`
      )
      .join("\n");

    // Format project bullet points (split by semicolon into list items).
    const projectBullets = project.bulletPoints
      .split(";")
      .map(bp => bp.trim() && `\\item {${bp.trim()}}`)
      .filter(Boolean)
      .join("\n");

    // Assemble the final prompt using LaTeX-like commands.
    const generatedFinalPrompt = `
\\newcommand{\\name}{${personal.name}} % Your Name
\\newcommand{\\course}{${personal.course}} % Your Course
\\newcommand{\\roll}{${personal.roll}} % Your Roll No.
\\newcommand{\\college}{${personal.college}} % College Name
\\newcommand{\\emaila}{${personal.email}} % Email 1
\\newcommand{\\phone}{${personal.phone}} % Your Phone Number
\\newcommand{\\github}{${personal.github}} % Github
\\newcommand{\\website}{${personal.website}} % Website
\\newcommand{\\leetcode}{${personal.leetcode}} % LeetCode
\\newcommand{\\codeforces}{${personal.codeforces}} % Codeforces

\\hline
${educationRows}

\\resumeProject
  {${project.projectName}} % Project Name
  {${project.organization}} % Organization Name
  {${project.dates}} % Event Dates
  {${project.website}} % Website Link
  \\resumeItemListStart
    ${projectBullets}
  \\resumeItemListEnd

% Additional Details:
Skills: ${skills}
POR: ${por}
Achievements: ${achievement}
Key Courses: ${courses}
    `;
    setFinalPrompt(generatedFinalPrompt);

    // Combine with the hardcoded prompt and update the overall prompt state.
    const combined = combinePrompts(generatedFinalPrompt);
    setPrompt(combined);
  };

  // Effect hook to trigger project creation if needed.
  useEffect(() => {
    if (callCreateProject) {
      handleCreateProject();
      setCallCreateProject(false);
    }
  }, [callCreateProject]);

  // Function to handle project creation (sends data to backend using fetch and shows alerts).
  const handleCreateProject = async () => {
    if (!user) {
      window.location.href = `${BACKEND_URL}auth/google`;
      return;
    }
    if (!prompt.trim()) return;

    const { value: formValues } = await Swal.fire({
      title: "Create Project",
      html: `
        <div class="w-full max-w-xl mx-auto space-y-6">
          <div class="flex flex-col space-y-2">
            <label for="sectionTitle" class="text-left tracking-wide text-sm font-semibold text-slate-200">
              CV Section Title:
            </label>
            <input
              id="sectionTitle"
              class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Projects, Education, Experience"
            />
          </div>
          <div class="flex flex-col space-y-2">
            <label for="entryTitle" class="text-left tracking-wide text-sm font-semibold text-slate-200">
              Entry Title:
            </label>
            <input
              id="entryTitle"
              class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Personal Portfolio Website"
            />
          </div>
          <div class="flex flex-col space-y-2">
            <label for="entryDate" class="text-left tracking-wide text-sm font-semibold text-slate-200">
              Duration or Date:
            </label>
            <input
              id="entryDate"
              class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Jan 2024 – Mar 2024"
            />
          </div>
          <div class="flex flex-col space-y-2">
            <label for="entryDetails" class="text-left tracking-wide text-sm font-semibold text-slate-200">
              Bullet Points (separate by semicolon):
            </label>
            <textarea
              id="entryDetails"
              class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Developed responsive UI using React.js; Integrated backend with Node.js and Express.js; Deployed site using Netlify"
              rows="4"
            ></textarea>
          </div>
          <div class="flex flex-col space-y-2">
            <label for="visibility" class="text-left tracking-wide text-sm font-semibold text-slate-200">
              Visibility:
            </label>
            <select
              id="visibility"
              class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>
      `,
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Create",
      customClass: {
        container: "swal2-container-custom",
        popup: "rounded-lg max-w-xs md:max-w-md mx-auto bg-slate-800 text-indigo-500",
        confirmButton: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md",
        cancelButton: "bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
      },
      backdrop: "backdrop-filter: blur(10px);",
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById("projectName").value.trim();
        const visibility = document.getElementById("visibility").value;
        const projectType = document.getElementById("projectType") ? document.getElementById("projectType").value : "";
        const description = document.getElementById("projectDescription") ? document.getElementById("projectDescription").value : "";
        if (!name) {
          Swal.showValidationMessage("Project Name is required!");
          return false;
        }
        return { name, visibility, projectType, description };
      }
    });

    if (formValues) {
      try {
        const response = await fetch(`${BACKEND_URL}project/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: user._id,
            name: formValues.name,
            description: formValues.description,
            visibility: formValues.visibility,
            projectType: formValues.projectType,
            prompt: prompt
          }),
          credentials: "include"
        });
        const data = await response.json();
        localStorage.setItem("firstprompt", JSON.stringify(data));
        if (response.status === 201) {
          await Swal.fire({
            icon: "success",
            title: "Project Created!",
            html: `
              <div class="text-center">
                <p>Your project <strong>${formValues.name}</strong> has been successfully created.</p>
                <p>Redirecting to Project Window</p>
              </div>
            `,
            customClass: {
              container: "swal2-container-custom",
              popup: "rounded-lg max-w-xs md:max-w-md mx-auto text-gray-200 p-6 shadow-xl",
              title: "text-xl font-semibold text-green-400 mb-4",
              confirmButton: "bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md",
              htmlContainer: "text-sm font-normal text-gray-500",
              iconColor: "text-green-400"
            },
            backdrop: "backdrop-filter: blur(12px);"
          });
          setPrompt("");
          window.location.href = `/main/${formValues.projectType === "react" ? "react" : "plain"}/${data.PID}`;
        }
      } catch (err) {
        console.log(err);
        await Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          customClass: {
            container: "swal2-container-custom",
            popup: "rounded-lg max-w-xs md:max-w-md mx-auto text-gray-200 p-6 shadow-xl",
            title: "text-xl font-semibold text-red-400 mb-4",
            confirmButton: "bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2 rounded-md",
            htmlContainer: "text-sm font-normal text-gray-500",
            iconColor: "text-red-400"
          },
          backdrop: "backdrop-filter: blur(12px);"
        });
      }
    }
  };

  return (
    <div className="relative w-[90vw] mb-28 md:w-[50vw] mt-20 min-h-[50vh] bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] backdrop-blur-lg rounded-2xl border border-indigo-400/60 shadow-2xl shadow-black/40 p-6 mx-auto flex flex-col my-10">
      <div className="text-center relative z-10 flex flex-col items-center mt-16">
        <h3 className="text-[18px] md:text-[25px] font-light text-white mb-4 tracking-wide">
          <FontAwesomeIcon icon={faRobot} className="mr-2" /> AI Powered Development
        </h3>
      </div>
      <div className="relative z-10 flex justify-center mb-4">
        <div className="flex flex-wrap justify-center gap-3 px-2">
          {[
            { icon: faSuitcase, label: "Portfolio" },
            { icon: faFilePen, label: "Blog" },
            { icon: faUsers, label: "E-Commerce" },
            { icon: faListCheck, label: "Tasks" }
          ].map((item, index) => (
            <button
              key={index}
              className="px-4 py-2 text-sm md:text-base text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl hover:scale-105 transition-transform hover:shadow-lg whitespace-nowrap"
              onClick={() => {
                setPrompt(HardPrompts[index]);
                setCallCreateProject(true);
              }}
            >
              <FontAwesomeIcon icon={item.icon} className="mr-2" />
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="relative z-10 flex justify-center mt-auto p-4">
        <div className="bg-zinc-900 flex items-end w-full md:w-[600px] px-4 py-3 rounded-xl border border-gray-700 shadow-inner">
          {/* Multi-section CV input form */}
          <form onSubmit={handleGeneratePrompt} className="p-4 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 gap-8">
              {/* Column 1: Personal Information and Education */}
              <div>
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                {Object.keys(personal).map((key) => (
                  <div key={key} className="mb-3">
                    <label className="block text-sm font-medium capitalize">{key}</label>
                    <input
                      type="text"
                      placeholder={key}
                      value={personal[key]}
                      onChange={(e) => setPersonal({ ...personal, [key]: e.target.value })}
                      className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
                <h2 className="text-xl font-bold mt-8 mb-4">Education</h2>
                {education.map((row, idx) => (
                  <div key={idx} className="border p-3 rounded mb-3">
                    <div className="mb-2">
                      <label className="block text-sm font-medium">Degree/Certificate</label>
                      <input
                        type="text"
                        placeholder="e.g., B.Tech. Major"
                        value={row.degree}
                        onChange={(e) => {
                          const newEdu = [...education];
                          newEdu[idx].degree = e.target.value;
                          setEducation(newEdu);
                        }}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">Institute/Board</label>
                      <input
                        type="text"
                        placeholder="e.g., Indian Institute of Technology, Guwahati"
                        value={row.board}
                        onChange={(e) => {
                          const newEdu = [...education];
                          newEdu[idx].board = e.target.value;
                          setEducation(newEdu);
                        }}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">CGPA/Percentage</label>
                      <input
                        type="text"
                        placeholder="e.g., 9 (Current)"
                        value={row.percentage}
                        onChange={(e) => {
                          const newEdu = [...education];
                          newEdu[idx].percentage = e.target.value;
                          setEducation(newEdu);
                        }}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">Year/Duration</label>
                      <input
                        type="text"
                        placeholder="e.g., 2024-Present"
                        value={row.year}
                        onChange={(e) => {
                          const newEdu = [...education];
                          newEdu[idx].year = e.target.value;
                          setEducation(newEdu);
                        }}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* Column 2: Project Details and Other Sections */}
              <div>
                <h2 className="text-xl font-bold mb-4">Project Details</h2>
                <div className="mb-3">
                  <label className="block text-sm font-medium">Project Name</label>
                  <input
                    type="text"
                    placeholder="Project Name"
                    value={project.projectName}
                    onChange={(e) => setProject({ ...project, projectName: e.target.value })}
                    className="w-full px-2 py-1 border rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium">Organization Name</label>
                  <input
                    type="text"
                    placeholder="Organization Name"
                    value={project.organization}
                    onChange={(e) => setProject({ ...project, organization: e.target.value })}
                    className="w-full px-2 py-1 border rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium">Event Dates</label>
                  <input
                    type="text"
                    placeholder="e.g., July 2024 - Aug. 2024"
                    value={project.dates}
                    onChange={(e) => setProject({ ...project, dates: e.target.value })}
                    className="w-full px-2 py-1 border rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium">Website Link</label>
                  <input
                    type="text"
                    placeholder="Website Link"
                    value={project.website}
                    onChange={(e) => setProject({ ...project, website: e.target.value })}
                    className="w-full px-2 py-1 border rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium">
                    Project Bullet Points <span className="text-xs">(separated by semicolon)</span>
                  </label>
                  <textarea
                    placeholder="Bullet point 1; Bullet point 2; ..."
                    value={project.bulletPoints}
                    onChange={(e) => setProject({ ...project, bulletPoints: e.target.value })}
                    className="w-full px-2 py-1 border rounded"
                  ></textarea>
                </div>
                <h2 className="text-xl font-bold mt-8 mb-4">Other Details</h2>
                <div className="mb-3">
                  <label className="block text-sm font-medium">Skills</label>
                  <input
                    type="text"
                    placeholder="List skills separated by commas"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="w-full px-2 py-1 border rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium">Positions of Responsibility (POR)</label>
                  <input
                    type="text"
                    placeholder="Enter POR details"
                    value={por}
                    onChange={(e) => setPOR(e.target.value)}
                    className="w-full px-2 py-1 border rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium">Achievements (with Year)</label>
                  <input
                    type="text"
                    placeholder="Enter achievements"
                    value={achievement}
                    onChange={(e) => setAchievement(e.target.value)}
                    className="w-full px-2 py-1 border rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium">Key Courses Taken</label>
                  <input
                    type="text"
                    placeholder="List key courses"
                    value={courses}
                    onChange={(e) => setCourses(e.target.value)}
                    className="w-full px-2 py-1 border rounded"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Generate Final Prompt
              </button>
            </div>
            {finalPrompt && (
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-2">Final Prompt</h2>
                <pre className="bg-gray-900 text-white p-4 rounded whitespace-pre-wrap">
                  {finalPrompt}
                </pre>
              </div>
            )}
          </form>
          {/* Single textarea that shows the overall prompt. */}
          <textarea
            placeholder="Type your prompt..."
            className="flex-1 bg-transparent text-white outline-none border-none px-2 placeholder-gray-400 text-md resize-none max-h-100 h-20 overflow-y-scroll"
            style={{ height: "auto", minHeight: "32px", maxHeight: "10em" }}
            rows="1"
            value={prompt}
            onInput={(e) => {
              setPrompt(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
          />
          <style>
            {`
              textarea::-webkit-scrollbar {
                width: 6px;
              }
              textarea::-webkit-scrollbar-thumb {
                background-color: rgba(255, 255, 255, 0.6);
                border-radius: 8px;
              }
              textarea::-webkit-scrollbar-thumb:hover {
                background-color: rgba(255, 255, 255, 0.9);
              }
              textarea::-webkit-scrollbar-track {
                background-color: rgb(24,24,27);
                border-radius: 8px;
              }
            `}
          </style>
          <button
            className="ml-3 hover:text-gray-300 px-3 transform hover:scale-110 transition-transform"
            onClick={handleCreateProject}
          >
            <FontAwesomeIcon icon={faArrowUp} className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prompt;


import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faListCheck,
  faFilePen,
  faSuitcase,
  faUsers,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useUser } from "../hooks/userContext";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/";

// Hardcoded prompt that will be concatenated with the generated final prompt.
const HardPrompts = [
  `Generate a professional, modern, and fully responsive CV Generator Web Application using React.js. The project should follow clean architecture with proper component structure and modern React practices (functional components, hooks, routing, error boundaries). The app must have the following structure and features:
Do not insert images.
Pages:
1. Form Page -> Allows the user to input their details via a structured form, including:
   - Personal Information: Name, Course, Department, Roll No, College, Email, Phone
   - Online Profiles: GitHub, Website, LeetCode, Codeforces
   - Section Entries: Education, Projects, Skills, Achievements, Key Courses Taken, Positions of Responsibility

2. CV Preview Page -> Renders a CV based on the form input data using a layout that emulates a LaTeX-style academic resume. The preview must support live editing, include a hardcoded picture tag for the college logo (<img src="profile.jpg" alt="Profile Picture of Candidate">), and display sections using reusable components.

Features include:
- Sticky header navigation linking to Form and CV Preview pages.
- Professional single-page layout inspired by LaTeX templates.
- Draggable layout support (by adding specified class names, no drag logic required).
- Responsive design using pure CSS.
- Error boundaries, dark mode toggle (optional), SEO optimization, performance improvements, and persistent data storage using localStorage.

Output format:
Return a complete project in JSON format with:
  - Keys as file paths (e.g., /App.js, /css/FormPage.css)
  - Values containing the full file content
  - The entryFilePath set to /App.js and an array listing generated file paths.`
];

const Prompt = () => {
  const { user } = useUser();

  // Overall prompt state (combination of HardPrompt and generated final prompt)
  const [prompt, setPrompt] = useState("");
  const [callCreateProject, setCallCreateProject] = useState(false);
  const [finalPrompt, setFinalPrompt] = useState(false);

  // ------------------- Multi-Section CV Input States ------------------- //

  // Personal Information
  const [personal, setPersonal] = useState({
    name: "Vibha Gupta",
    course: "B.Tech- Data Science and Artificial Intelligence",
    roll: "230150029",
    college: "Indian Institute of Technology, Guwahati",
    email: "g.vibha@iitg.ac.in",
    phone: "9216195181",
    github: "https://github.com/Vibha17",       
    website: "https://vibha17.github.io/vibha_gupta/",
    leetcode: "https://leetcode.com/u/vibhugupta908/",
    codeforces: "https://codeforces.com/profile/vibhugupta908"
  });
  

  // Two separate education objects: one for college and one for 12th standard.
  // College Education default (for example)
const [collegeEducation, setCollegeEducation] = useState({
    degree: "B.Tech. Major",
    board: "Indian Institute of Technology, Guwahati",
    percentage: "10 (Current)",
    year: "2024-Present"
  });
  
  // 12th Standard default
  const [twelfthEducation, setTwelfthEducation] = useState({
    degree: "Senior Secondary",
    board: "RBSE Board",
    percentage: "94.8%",
    year: "2023"
  });
  

  // Projects: use an array of project objects. Each project gets an extra field for API model details.
  const [projects, setProjects] = useState([
    {
      projectName: "Techniche’24 Website",
      organization: "Techniche, the annual techno-management fest, IIT Guwahati",
      dates: "July 2024 - Aug. 2024",
      website: "Website",
      bulletPoints: "Designed the official website for Techniche’24; Implemented React.js for UI; Integrated 3D product models using R3F; Attracted over 50,000 users",
      apiModel: "API details here"  // Optionally provide default details for the API model
    },
    {
      projectName: "Fraud Detection Model",
      organization: "Consulting & Analytics Club, IIT Guwahati",
      dates: "September 2024",
      website: "GitHub",
      bulletPoints: "Developed a machine learning model for fraudulent transaction detection; Utilized PCA for dimensionality reduction; Applied Decision Tree algorithms; Conducted comprehensive EDA using Scikit-learn",
      apiModel: ""
    },
    {
      projectName: "AI Chat Bot",
      organization: "Inter IIT Tech Camp",
      dates: "October 2024",
      website: "GitHub",
      bulletPoints: "Designed an AI-driven conversational chatbot to enhance user productivity; Integrated Google Gemini API; Enabled secure multi-user chat through JWT authentication; Leveraged MongoDB for chat history",
      apiModel: ""
    }
  ]);
  

  // Other details: Skills, Positions of Responsibility, Achievements, Key Courses.
 const [skills, setSkills] = useState(
  "Programming Languages: C, C++, Python, SQL, R; Web Development: HTML, CSS, JavaScript, React, Bootstrap; Node.js, MongoDB, Express.js, RESTful APIs, PHP; Data Science: Pandas, NumPy, SciPy; Data Visualization: Matplotlib, Seaborn; Machine Learning: Scikit-Learn; Tools: Git, GitHub, Visual Studio Code, MinGW, Shiny App, Postman; Operating Systems: Windows, Linux (Ubuntu)"
);
const [por, setPOR] = useState(
  "Web Developer, Student’s Web Community (SWC); Technical Secretary, Dhansiri Hostel; Core-Team Member, Dev-ops, Techniche"
);
const [achievement, setAchievement] = useState(
  "HacktoberFest 2024: Rank 3 in Institutional Leaderboard; CodeForce: Rating - 1210; Smart India Hackathon: Cleared Round 1; JEE Advanced: AIR 2106, 99.2 percentile; Rajasthan Topper: 100% in Class 10, honored with Indra Priyadarshini Award"
);
const [courses, setCourses] = useState(
  "Computers: Data Structure and Algorithm, Introduction to Computing, DBMS; Data Science and AI: Introduction to Data Science, Statistical Foundation of Data Science"
);


  // ------------------- Prompt Generation Functions ------------------- //

  // Combines the hardcoded prompt with the generated final prompt.
  const combinePrompts = (finalText) => {
    return `${HardPrompts[0]}\n\n${finalText}`;
  };

  // Generates the final prompt from input states.
  const handleGeneratePrompt = (e) => {
    e.preventDefault();

    // Generate education rows for College Education and 12th Standard.
    const collegeRow = `${collegeEducation.degree} & ${collegeEducation.board} & ${collegeEducation.percentage} & ${collegeEducation.year} \\\\ \\hline`;
    const twelfthRow = `${twelfthEducation.degree} & ${twelfthEducation.board} & ${twelfthEducation.percentage} & ${twelfthEducation.year} \\\\ \\hline`;

    // Generate details for all projects.
    const projectsText = projects
      .map(project => {
        const bullets = project.bulletPoints
          .split(";")
          .map(bp => bp.trim() && `\\item {${bp.trim()}}`)
          .filter(Boolean)
          .join("\n");
        return `
\\resumeProject
  {${project.projectName}} % Project Name
  {${project.organization}} % Organization Name
  {${project.dates}} % Event Dates
  {${project.website}} % Website Link
  \\resumeItemListStart
    ${bullets}
    ${project.apiModel ? `\\item {API Model: ${project.apiModel}}` : ""}
  \\resumeItemListEnd
`;
      })
      .join("\n");

    // Assemble the final prompt string.
    finalPrompt = `
    \\newcommand{\\name}{${personal.name}} % Your Name
    \\newcommand{\\course}{${personal.course}} % Your Course
    \\newcommand{\\roll}{${personal.roll}} % Your Roll No.
    \\newcommand{\\college}{${personal.college}} % College Name
    \\newcommand{\\emaila}{${personal.email}} % Email 1
    \\newcommand{\\phone}{${personal.phone}} % Your Phone Number
    \\newcommand{\\github}{${personal.github}} % Github
    \\newcommand{\\website}{${personal.website}} % Website
    \\newcommand{\\leetcode}{${personal.leetcode}} % LeetCode
    \\newcommand{\\codeforces}{${personal.codeforces}} % Codeforces
    
    % Education:
    College Education:
    ${collegeEducation.degree} & ${collegeEducation.board} & ${collegeEducation.percentage} & ${collegeEducation.year} \\\\ \\hline
    
    12th Standard:
    ${twelfthEducation.degree} & ${twelfthEducation.board} & ${twelfthEducation.percentage} & ${twelfthEducation.year} \\\\ \\hline
    
    % Projects:
    ${projects.map(project => {
      const bullets = project.bulletPoints
        .split(";")
        .map(bp => bp.trim() && `\\item {${bp.trim()}}`)
        .filter(Boolean)
        .join("\n");
      return `
    \\resumeProject
      {${project.projectName}} % Project Name
      {${project.organization}} % Organization Name
      {${project.dates}} % Event Dates
      {${project.website}} % Website Link
      \\resumeItemListStart
        ${bullets}
        ${project.apiModel ? `\\item {API Model: ${project.apiModel}}` : ""}
      \\resumeItemListEnd
    `;
    }).join("\n")}
    
    % Additional Details:
    Skills: ${skills}
    POR: ${por}
    Achievements: ${achievement}
    Key Courses: ${courses}
    `;
    setFinalPrompt(finalPrompt);

    // Combine and update the overall prompt.
    // const combined = combinePrompts(generatedFinalPrompt);
    // setPrompt(combined);

    const combinedPrompt = `${HardPrompts[0]}\n\n${finalPrompt}`;

    setPrompt(combinedPrompt);
  };

  // ------------------- Project Creation Function ------------------- //

  useEffect(() => {
    if (callCreateProject) {
      handleCreateProject();
      setCallCreateProject(false);
    }
  }, [callCreateProject]);

  const handleCreateProject = async () => {
    if (!user) {
      window.location.href = `${BACKEND_URL}auth/google`;
      return;
    }
    if (!prompt.trim()) return;

    const { value: formValues } = await Swal.fire({
      title: "Create Project",
      html: `
        <div class="w-full max-w-xl mx-auto space-y-6">
          <div class="flex flex-col space-y-2">
            <label for="sectionTitle" class="text-left tracking-wide text-sm font-semibold text-slate-200">
              CV Section Title:
            </label>
            <input
              id="sectionTitle"
              class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Projects, Education, Experience"
            />
          </div>
          <div class="flex flex-col space-y-2">
            <label for="entryTitle" class="text-left tracking-wide text-sm font-semibold text-slate-200">
              Entry Title:
            </label>
            <input
              id="entryTitle"
              class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Personal Portfolio Website"
            />
          </div>
          <div class="flex flex-col space-y-2">
            <label for="entryDate" class="text-left tracking-wide text-sm font-semibold text-slate-200">
              Duration or Date:
            </label>
            <input
              id="entryDate"
              class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Jan 2024 – Mar 2024"
            />
          </div>
          <div class="flex flex-col space-y-2">
            <label for="entryDetails" class="text-left tracking-wide text-sm font-semibold text-slate-200">
              Bullet Points (separate by semicolon):
            </label>
            <textarea
              id="entryDetails"
              class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Developed responsive UI using React.js; Integrated backend with Node.js and Express.js; Deployed site using Netlify"
              rows="4"
            ></textarea>
          </div>
          <div class="flex flex-col space-y-2">
            <label for="visibility" class="text-left tracking-wide text-sm font-semibold text-slate-200">
              Visibility:
            </label>
            <select
              id="visibility"
              class="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>
      `,
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Create",
      customClass: {
        container: "swal2-container-custom",
        popup: "rounded-lg max-w-xs md:max-w-md mx-auto bg-slate-800 text-indigo-500",
        confirmButton: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md",
        cancelButton: "bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
      },
      backdrop: "backdrop-filter: blur(10px);",
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById("projectName") ? document.getElementById("projectName").value.trim() : "";
        const visibility = document.getElementById("visibility") ? document.getElementById("visibility").value : "";
        const projectType = document.getElementById("projectType") ? document.getElementById("projectType").value : "";
        const description = document.getElementById("projectDescription") ? document.getElementById("projectDescription").value : "";
        if (!name) {
          Swal.showValidationMessage("Project Name is required!");
          return false;
        }
        return { name, visibility, projectType, description };
      }
    });

    if (formValues) {
      try {
        const response = await fetch(`${BACKEND_URL}project/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: user._id,
            name: formValues.name,
            description: formValues.description,
            visibility: formValues.visibility,
            projectType: formValues.projectType,
            prompt: prompt
          }),
          credentials: "include"
        });
        const data = await response.json();
        localStorage.setItem("firstprompt", JSON.stringify(data));
        if (response.status === 201) {
          await Swal.fire({
            icon: "success",
            title: "Project Created!",
            html: `
              <div class="text-center">
                <p>Your project <strong>${formValues.name}</strong> has been successfully created.</p>
                <p>Redirecting to Project Window</p>
              </div>
            `,
            customClass: {
              container: "swal2-container-custom",
              popup: "rounded-lg max-w-xs md:max-w-md mx-auto text-gray-200 p-6 shadow-xl",
              title: "text-xl font-semibold text-green-400 mb-4",
              confirmButton: "bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md",
              htmlContainer: "text-sm font-normal text-gray-500",
              iconColor: "text-green-400"
            },
            backdrop: "backdrop-filter: blur(12px);"
          });
          setPrompt("");
          window.location.href = `/main/${formValues.projectType === "react" ? "react" : "plain"}/${data.PID}`;
        }
      } catch (err) {
        console.log(err);
        await Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          customClass: {
            container: "swal2-container-custom",
            popup: "rounded-lg max-w-xs md:max-w-md mx-auto text-gray-200 p-6 shadow-xl",
            title: "text-xl font-semibold text-red-400 mb-4",
            confirmButton: "bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2 rounded-md",
            htmlContainer: "text-sm font-normal text-gray-500",
            iconColor: "text-red-400"
          },
          backdrop: "backdrop-filter: blur(12px);"
        });
      }
    }
  };

  // Function to add a new project entry.
  const addProject = () => {
    setProjects([...projects, { projectName: "", organization: "", dates: "", website: "", bulletPoints: "", apiModel: "" }]);
  };

  return (
    <div className="relative w-[90vw] mb-28 md:w-[50vw] mt-20 min-h-[50vh] bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] backdrop-blur-lg rounded-2xl border border-indigo-400/60 shadow-2xl shadow-black/40 p-6 mx-auto flex flex-col my-10">
      <div className="text-center relative z-10 flex flex-col items-center mt-16">
        <h3 className="text-[18px] md:text-[25px] font-light text-white mb-4 tracking-wide">
          <FontAwesomeIcon icon={faRobot} className="mr-2" /> AI Powered Development
        </h3>
      </div>
      <div className="relative z-10 flex justify-center mb-4">
        <div className="flex flex-wrap justify-center gap-3 px-2">
          {[
            { icon: faSuitcase, label: "Portfolio" },
            { icon: faFilePen, label: "Blog" },
            { icon: faUsers, label: "E-Commerce" },
            { icon: faListCheck, label: "Tasks" }
          ].map((item, index) => (
            <button
              key={index}
              className="px-4 py-2 text-sm md:text-base text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl hover:scale-105 transition-transform hover:shadow-lg whitespace-nowrap"
              onClick={() => {
                setPrompt(HardPrompts[index]);
                setCallCreateProject(true);
              }}
            >
              <FontAwesomeIcon icon={item.icon} className="mr-2" />
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="text-purple-300 relative z-10 flex justify-center mt-auto p-4">
        <div className="bg-zinc-900 flex flex-col items-end w-full md:w-[600px] px-4 py-3 rounded-xl border border-gray-700 shadow-inner">
          {/* Multi-section CV Input Form */}
          <form onSubmit={handleGeneratePrompt} className="p-4 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 gap-8">
              {/* Column 1: Personal Information and Education */}
              <div>
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                {Object.keys(personal).map((key) => (
                  <div key={key} className="mb-3">
                    <label className="block text-sm font-medium capitalize">{key}</label>
                    <input
                      type="text"
                      placeholder={key}
                      value={personal[key]}
                      onChange={(e) => setPersonal({ ...personal, [key]: e.target.value })}
                      className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
                <h2 className="text-xl font-bold mt-8 mb-4">Education</h2>
                <div className="grid grid-cols-2 gap-4">
                  {/* Column for College Education */}
                  <div>
                    <h3 className="text-lg font-medium mb-2">College Education</h3>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">Degree/Certificate</label>
                      <input
                        type="text"
                        placeholder="e.g., B.Tech. Major"
                        value={collegeEducation.degree}
                        onChange={(e) =>
                          setCollegeEducation({ ...collegeEducation, degree: e.target.value })
                        }
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">Institute/Board</label>
                      <input
                        type="text"
                        placeholder="e.g., Indian Institute of Technology, Guwahati"
                        value={collegeEducation.board}
                        onChange={(e) =>
                          setCollegeEducation({ ...collegeEducation, board: e.target.value })
                        }
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">CGPA/Percentage</label>
                      <input
                        type="text"
                        placeholder="e.g., 9.5 (Current)"
                        value={collegeEducation.percentage}
                        onChange={(e) =>
                          setCollegeEducation({ ...collegeEducation, percentage: e.target.value })
                        }
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">Year/Duration</label>
                      <input
                        type="text"
                        placeholder="e.g., 2024-Present"
                        value={collegeEducation.year}
                        onChange={(e) =>
                          setCollegeEducation({ ...collegeEducation, year: e.target.value })
                        }
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                  </div>
                  {/* Column for 12th Standard Education */}
                  <div>
                    <h3 className="text-lg font-medium mb-2">12th Standard</h3>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">Degree/Certificate</label>
                      <input
                        type="text"
                        placeholder="e.g., Senior Secondary"
                        value={twelfthEducation.degree}
                        onChange={(e) =>
                          setTwelfthEducation({ ...twelfthEducation, degree: e.target.value })
                        }
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">Institute/Board</label>
                      <input
                        type="text"
                        placeholder="e.g., RBSE Board"
                        value={twelfthEducation.board}
                        onChange={(e) =>
                          setTwelfthEducation({ ...twelfthEducation, board: e.target.value })
                        }
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">Percentage</label>
                      <input
                        type="text"
                        placeholder="e.g., 94.8%"
                        value={twelfthEducation.percentage}
                        onChange={(e) =>
                          setTwelfthEducation({ ...twelfthEducation, percentage: e.target.value })
                        }
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">Year/Duration</label>
                      <input
                        type="text"
                        placeholder="e.g., 2023"
                        value={twelfthEducation.year}
                        onChange={(e) =>
                          setTwelfthEducation({ ...twelfthEducation, year: e.target.value })
                        }
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Column 2: Projects and Other Details */}
              <div>
                <h2 className="text-xl font-bold mb-4">Project Details</h2>
                {projects.map((proj, idx) => (
                  <div key={idx} className="border p-3 rounded mb-3">
                    <div className="mb-2">
                      <label className="block text-sm font-medium">Project Name</label>
                      <input
                        type="text"
                        placeholder="Project Name"
                        value={proj.projectName}
                        onChange={(e) => {
                          const newProjects = [...projects];
                          newProjects[idx].projectName = e.target.value;
                          setProjects(newProjects);
                        }}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">Organization Name</label>
                      <input
                        type="text"
                        placeholder="Organization Name"
                        value={proj.organization}
                        onChange={(e) => {
                          const newProjects = [...projects];
                          newProjects[idx].organization = e.target.value;
                          setProjects(newProjects);
                        }}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">Event Dates</label>
                      <input
                        type="text"
                        placeholder="e.g., July 2024 - Aug. 2024"
                        value={proj.dates}
                        onChange={(e) => {
                          const newProjects = [...projects];
                          newProjects[idx].dates = e.target.value;
                          setProjects(newProjects);
                        }}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">Website Link</label>
                      <input
                        type="text"
                        placeholder="Website Link"
                        value={proj.website}
                        onChange={(e) => {
                          const newProjects = [...projects];
                          newProjects[idx].website = e.target.value;
                          setProjects(newProjects);
                        }}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">
                        Project Bullet Points <span className="text-xs">(separated by semicolon)</span>
                      </label>
                      <textarea
                        placeholder="Bullet point 1; Bullet point 2; ..."
                        value={proj.bulletPoints}
                        onChange={(e) => {
                          const newProjects = [...projects];
                          newProjects[idx].bulletPoints = e.target.value;
                          setProjects(newProjects);
                        }}
                        className="w-full px-2 py-1 border rounded"
                      ></textarea>
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">API Model Details</label>
                      <input
                        type="text"
                        placeholder="Details about project API model"
                        value={proj.apiModel}
                        onChange={(e) => {
                          const newProjects = [...projects];
                          newProjects[idx].apiModel = e.target.value;
                          setProjects(newProjects);
                        }}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={addProject}
                >
                  Add Project
                </button>
                <h2 className="text-xl font-bold mt-8 mb-4">Other Details</h2>
                <div className="mb-3">
                  <label className="block text-sm font-medium">Skills</label>
                  <input
                    type="text"
                    placeholder="List skills separated by commas"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="w-full px-2 py-1 border rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium">Positions of Responsibility (POR)</label>
                  <input
                    type="text"
                    placeholder="Enter POR details"
                    value={por}
                    onChange={(e) => setPOR(e.target.value)}
                    className="w-full px-2 py-1 border rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium">Achievements (with Year)</label>
                  <input
                    type="text"
                    placeholder="Enter achievements"
                    value={achievement}
                    onChange={(e) => setAchievement(e.target.value)}
                    className="w-full px-2 py-1 border rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium">Key Courses Taken</label>
                  <input
                    type="text"
                    placeholder="List key courses"
                    value={courses}
                    onChange={(e) => setCourses(e.target.value)}
                    className="w-full px-2 py-1 border rounded"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Generate Final Prompt
              </button>
            </div>
            {finalPrompt && (
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-2">Final Prompt</h2>
                <pre className="bg-gray-900 text-white p-4 rounded whitespace-pre-wrap">
                  {finalPrompt}
                </pre>
              </div>
            )}
          </form>
          {/* Single Textarea displaying the overall prompt */}
          <textarea
            placeholder="Type your prompt..."
            className="flex-1 bg-transparent text-white outline-none border-none px-2 placeholder-gray-400 text-md resize-none max-h-100 h-20 overflow-y-scroll"
            style={{ height: "auto", minHeight: "32px", maxHeight: "10em" }}
            rows="1"
            value={prompt}
            onInput={(e) => {
              setPrompt(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
          />
          <style>
            {`
              textarea::-webkit-scrollbar {
                width: 6px;
              }
              textarea::-webkit-scrollbar-thumb {
                background-color: rgba(255, 255, 255, 0.6);
                border-radius: 8px;
              }
              textarea::-webkit-scrollbar-thumb:hover {
                background-color: rgba(255, 255, 255, 0.9);
              }
              textarea::-webkit-scrollbar-track {
                background-color: rgb(24,24,27);
                border-radius: 8px;
              }
            `}
          </style>
          <button
            className="ml-3 hover:text-gray-300 px-3 transform hover:scale-110 transition-transform"
            onClick={handleCreateProject}
          >
            <FontAwesomeIcon icon={faArrowUp} className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prompt;

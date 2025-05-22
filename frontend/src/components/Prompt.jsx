import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faFileAlt,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useUser } from "../hooks/userContext";

// Backend URL (fallback to localhost if not defined)
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/";

// Hardcoded base prompt for quick generate
const HardCodedPrompts = [
  `Generate a modern, responsive, and feature-rich Portfolio Website using React.js. The website should have a clean, professional design and be fully responsive for both mobile and desktop devices. The website should include the following pages and features:
  
Pages:
1. Home Page: Displays a brief introduction, a professional photo, and a catchy tagline.
2. About Page: Provides detailed personal information and background.
3. Projects Page: Showcases portfolio projects with project name, description, links, and a gallery of screenshots.
4. Skills Page: Lists programming languages, frameworks, tools, and technologies with proficiency levels.
5. Contact Page: Contains a contact form, social media links, and a downloadable resume link.

Additional Features:
- Sticky Navigation Header
- Dark Mode Toggle
- SEO Meta Tags and Structured Data
- Lazy Loading of Images for Performance Optimization
- Smooth Scrolling Navigation
- Use of Reusable Components for all sections
- Persistent Data Storage via localStorage

Technical Constraints:
- Use only React (functional components with hooks) and React Router for navigation.
- Do not use third-party UI libraries like Material-UI or Bootstrap.
- All code must be clean, modular, and well-commented.

Output Requirements:
- Return a complete project output in JSON format with:
  - Keys as file paths (e.g., /App.js, /components/Home.js, /css/Home.css)
  - Values as the full file content (unminified code)
  - An entryFilePath set to "/App.js"
  - A list of all generated file paths under generatedFiles

`
];

const PortfolioPrompt = () => {
  const { user } = useUser();

  // States for prompt construction and triggering project creation
  const [finalPrompt, setFinalPrompt] = useState("");
  const [promptDisplay, setPromptDisplay] = useState("");
  const [triggerCreateProject, setTriggerCreateProject] = useState(false);

  // Personal Information State
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "John Doe",
    jobTitle: "Frontend Developer",
    bio: "Passionate developer with a knack for creating engaging user experiences.",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    website: "https://johndoe.dev",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe"
  });

  // Projects State (array of project objects)
  const [projects, setProjects] = useState([
    {
      projectName: "Personal Blog",
      description: "A modern blog built with React featuring Markdown integration.",
      projectURL: "https://blog.johndoe.dev",
      technologies: "React, Markdown, Node.js",
      bulletPoints: "Responsive design; SEO optimized; Fast loading times"
    },
    {
      projectName: "E-commerce Store",
      description:
        "A fully functional e-commerce platform that includes shopping cart functionality and payment integration.",
      projectURL: "https://store.johndoe.dev",
      technologies: "React, Redux, Express.js, MongoDB",
      bulletPoints: "User authentication; Secure payments; Scalable architecture"
    }
  ]);

  // Additional Details State
  const [skills, setSkills] = useState(
    "HTML, CSS, JavaScript, React, Redux, Node.js, Express, MongoDB, Git, SEO, Responsive Design"
  );
  const [testimonials, setTestimonials] = useState(
    "John's work is exceptional; A pleasure to collaborate with; Highly recommended for any project"
  );
  const [resumeLink, setResumeLink] = useState("https://johndoe.dev/resume.pdf");

  // ------------------ Prompt Generation Function ------------------ //
  // Combines personal info, projects, and additional details with the hardcoded base prompt.
  const generateFinalPrompt = (e) => {
    e.preventDefault();

    const projectsSection = projects
      .map((project) => {
        const bulletList = project.bulletPoints
          .split(";")
          .map((point) => point.trim())
          .filter(Boolean)
          .map((point) => `\\item {${point}}`)
          .join("\n");
        return `
\\portfolioProject{
  projectName: ${project.projectName},
  description: ${project.description},
  url: ${project.projectURL},
  technologies: ${project.technologies},
  bulletPoints: [
    ${bulletList}
  ]
}`;
      })
      .join("\n");

    const generatedPrompt = `
% Personal Information
\\newcommand{\\fullName}{${personalInfo.fullName}}
\\newcommand{\\jobTitle}{${personalInfo.jobTitle}}
\\newcommand{\\bio}{${personalInfo.bio}}
\\newcommand{\\email}{${personalInfo.email}}
\\newcommand{\\phone}{${personalInfo.phone}}
\\newcommand{\\website}{${personalInfo.website}}
\\newcommand{\\github}{${personalInfo.github}}
\\newcommand{\\linkedin}{${personalInfo.linkedin}}

% Portfolio Projects Section
${projectsSection}

% Additional Details:
Skills: ${skills}
Testimonials: ${testimonials}
Resume Link: ${resumeLink}
    `;

    setFinalPrompt(generatedPrompt);
    // Combine with the hardcoded prompt for the complete prompt output.
    const combinedPrompt = `${HardCodedPrompts[0]}\n\n${generatedPrompt}`;
    setPromptDisplay(combinedPrompt);
  };

  // ------------------ Project Submission / Creation Function ------------------ //
  // When triggerCreateProject is true, handle project creation.
  useEffect(() => {
    if (triggerCreateProject) {
      handleCreateProject();
      setTriggerCreateProject(false);
    }
  }, [triggerCreateProject]);

  const handleCreateProject = async () => {
    if (!user) {
      window.location.href = `${BACKEND_URL}auth/google`;
      return;
    }
    if (!promptDisplay.trim()) return;

    // SweetAlert2 modal for capturing additional CV project details
    const { value: formValues } = await Swal.fire({
      title: "Create CV Project",
      html: `
        <div class="w-full max-w-xl mx-auto space-y-6">
          <!-- CV Section Title -->
          <div class="flex flex-col space-y-2">
            <label for="sectionTitle" class="text-left tracking-wide text-sm font-semibold text-slate-200">
              CV Section Title:
            </label>
            <input id="sectionTitle" class="w-full px-3 py-2 bg-slate-600 text-gray-50 border rounded-md" placeholder="e.g., Projects, Education, Experience"/>
          </div>
          <!-- Entry Title -->
          <div class="flex flex-col space-y-2">
            <label for="entryTitle" class="text-left tracking-wide text-sm font-semibold text-slate-200">
              Entry Title:
            </label>
            <input id="entryTitle" class="w-full px-3 py-2 bg-slate-600 text-gray-50 border rounded-md" placeholder="e.g., Personal Portfolio Website"/>
          </div>
          <!-- Duration or Date -->
          <div class="flex flex-col space-y-2">
            <label for="entryDate" class="text-left tracking-wide text-sm font-semibold text-slate-200">
              Duration or Date:
            </label>
            <input id="entryDate" class="w-full px-3 py-2 bg-slate-600 text-gray-50 border rounded-md" placeholder="e.g., Jan 2024 – Mar 2024"/>
          </div>
          <!-- Bullet Points -->
          <div class="flex flex-col space-y-2">
            <label for="entryDetails" class="text-left tracking-wide text-sm font-semibold text-slate-200">
              Bullet Points (separated by semicolon):
            </label>
            <textarea id="entryDetails" class="w-full px-3 py-2 bg-slate-600 text-gray-50 border rounded-md" placeholder="Point one; Point two; Point three" rows="4"></textarea>
          </div>
          <!-- Visibility -->
          <div class="flex flex-col space-y-2">
            <label for="visibility" class="text-left tracking-wide text-sm font-semibold text-slate-200">
              Visibility:
            </label>
            <select id="visibility" class="w-full px-3 py-2 bg-slate-600 text-gray-50 border rounded-md">
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
        popup: "rounded-lg max-w-xs md:max-w-md mx-auto bg-slate-800 text-indigo-500",
        confirmButton: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md",
        cancelButton: "bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
      },
      backdrop: "backdrop-filter: blur(10px);",
      focusConfirm: false,
      preConfirm: () => {
        // Retrieve values from the proper input fields.
        const sectionTitle = document.getElementById("sectionTitle").value.trim();
        const entryTitle = document.getElementById("entryTitle").value.trim();
        const entryDate = document.getElementById("entryDate").value.trim();
        const entryDetails = document.getElementById("entryDetails").value.trim();
        const visibility = document.getElementById("visibility").value;

        if (!sectionTitle) {
          Swal.showValidationMessage("CV Section Title is required!");
          return false;
        }
        return { sectionTitle, entryTitle, entryDate, entryDetails, visibility };
      }
    });

    if (formValues) {
      try {
        const response = await fetch(`${BACKEND_URL}project/add`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user._id,
            name: formValues.sectionTitle, // CV Section Title
            description: formValues.entryTitle, // Entry Title
            additional: {
              date: formValues.entryDate,
              details: formValues.entryDetails
            },
            visibility: formValues.visibility,
            projectType: "react", // Fixed project type
            prompt: promptDisplay
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
                <p>Your CV project <strong>${formValues.sectionTitle}</strong> has been successfully created.</p>
                <p>Redirecting to Project Window</p>
              </div>
            `,
            customClass: {
              popup: "rounded-lg max-w-xs md:max-w-md mx-auto text-gray-200 p-6",
              confirmButton: "bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md"
            },
            backdrop: "backdrop-filter: blur(12px);"
          });
          setPromptDisplay("");
          // Redirect to the React project page
          window.location.href = `/main/react/${data.PID}`;
        }
      } catch (err) {
        console.error(err);
        await Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong. Please try again later.",
          customClass: {
            popup: "rounded-lg max-w-xs md:max-w-md mx-auto text-gray-200 p-6",
            confirmButton: "bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md"
          },
          backdrop: "backdrop-filter: blur(12px);"
        });
      }
    }
  };

  // Function to add a new project entry in the projects array.
  const addNewProject = () => {
    setProjects([
      ...projects,
      { projectName: "", description: "", projectURL: "", technologies: "", bulletPoints: "" }
    ]);
  };

  return (
    <div className="relative w-[90vw] md:w-[60vw] mt-20 min-h-[50vh] bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] backdrop-blur-lg rounded-2xl border border-indigo-400/60 shadow-2xl p-6 mx-auto flex flex-col mb-28">
      <div className="text-center mt-10">
        <h3 className="text-[20px] md:text-[28px] font-semibold text-white mb-4">
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
          Portfolio Website Generator
        </h3>
      </div>
      <div className="flex justify-center mb-6">
        <button
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-transform hover:scale-105 mr-4"
          onClick={() => {
            setPromptDisplay(HardCodedPrompts[0]);
            setTriggerCreateProject(true);
          }}
        >
          <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
          Quick Generate
        </button>
      </div>
      <div className="text-purple-300 bg-zinc-900 rounded-xl border border-gray-700 shadow-inner p-6">
        <form onSubmit={generateFinalPrompt}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Personal Information */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Personal Information</h2>
              {Object.keys(personalInfo).map((key) => (
                <div key={key} className="mb-3">
                  <label className="block text-sm text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    value={personalInfo[key]}
                    onChange={(e) =>
                      setPersonalInfo({ ...personalInfo, [key]: e.target.value })
                    }
                    placeholder={key}
                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
              ))}
            </div>
            {/* Right Column: Projects and Additional Details */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Projects and Details</h2>
              {projects.map((proj, index) => (
                <div key={index} className="border p-4 rounded mb-4 bg-gray-800">
                  <div className="mb-2">
                    <label className="block text-sm text-gray-300">Project Name</label>
                    <input
                      type="text"
                      value={proj.projectName}
                      onChange={(e) => {
                        const updatedProjects = [...projects];
                        updatedProjects[index].projectName = e.target.value;
                        setProjects(updatedProjects);
                      }}
                      placeholder="Enter project name"
                      className="w-full px-2 py-1 border rounded focus:outline-none"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm text-gray-300">Description</label>
                    <textarea
                      value={proj.description}
                      onChange={(e) => {
                        const updatedProjects = [...projects];
                        updatedProjects[index].description = e.target.value;
                        setProjects(updatedProjects);
                      }}
                      placeholder="Enter project description"
                      className="w-full px-2 py-1 border rounded focus:outline-none"
                      rows="2"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm text-gray-300">Project URL</label>
                    <input
                      type="text"
                      value={proj.projectURL}
                      onChange={(e) => {
                        const updatedProjects = [...projects];
                        updatedProjects[index].projectURL = e.target.value;
                        setProjects(updatedProjects);
                      }}
                      placeholder="https://yourprojecturl.com"
                      className="w-full px-2 py-1 border rounded focus:outline-none"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm text-gray-300">Technologies</label>
                    <input
                      type="text"
                      value={proj.technologies}
                      onChange={(e) => {
                        const updatedProjects = [...projects];
                        updatedProjects[index].technologies = e.target.value;
                        setProjects(updatedProjects);
                      }}
                      placeholder="e.g., React, Node.js, Express"
                      className="w-full px-2 py-1 border rounded focus:outline-none"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm text-gray-300">
                      Bullet Points (separated by semicolon)
                    </label>
                    <textarea
                      value={proj.bulletPoints}
                      onChange={(e) => {
                        const updatedProjects = [...projects];
                        updatedProjects[index].bulletPoints = e.target.value;
                        setProjects(updatedProjects);
                      }}
                      placeholder="Point one; Point two; Point three"
                      className="w-full px-2 py-1 border rounded focus:outline-none"
                      rows="2"
                    ></textarea>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addNewProject}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Add New Project
              </button>
              <div className="mt-6">
                <label className="block text-sm text-gray-300 mb-2">Additional Details</label>
                <div className="mb-3">
                  <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="List your skills (comma separated)"
                    className="w-full px-2 py-1 border rounded focus:outline-none"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={testimonials}
                    onChange={(e) => setTestimonials(e.target.value)}
                    placeholder="Enter testimonials"
                    className="w-full px-2 py-1 border rounded focus:outline-none"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={resumeLink}
                    onChange={(e) => setResumeLink(e.target.value)}
                    placeholder="Enter resume download link"
                    className="w-full px-2 py-1 border rounded focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Generate Final Prompt
            </button>
          </div>
        </form>
        {finalPrompt && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-white mb-2">Final Prompt</h2>
            <pre className="bg-gray-900 text-white p-4 rounded whitespace-pre-wrap">{finalPrompt}</pre>
          </div>
        )}
      </div>
      <div className="flex justify-end mt-4">
        <textarea
          placeholder="Overall Prompt..."
          className="w-full bg-transparent text-white outline-none resize-none p-2 border border-gray-700 rounded"
          style={{ minHeight: "40px", maxHeight: "120px" }}
          value={promptDisplay}
          onInput={(e) => {
            setPromptDisplay(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
        />
        <button className="ml-3 hover:text-gray-300 px-3 transform hover:scale-110 transition-transform" onClick={handleCreateProject}>
          <FontAwesomeIcon icon={faArrowUp} className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default PortfolioPrompt;

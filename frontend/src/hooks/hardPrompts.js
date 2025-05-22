// const HardPrompts = [
//     `"Generate a modern, fully responsive multi-page blog website. The website should have a clean, intuitive design. The project should include the following pages:"

//     1. Home Page -> Showcases recent posts.
//     2. Blog Listing Page -> Displays all blog posts with pagination.
//     3. Single Blog Post Page -> Presents the full blog post with title, author, date, related posts, and a comments section.
//     4. About Page -> Shares details about the blog, author(s), and their vision.
//     5. Contact Page -> Includes a contact form with Name, Email, and Message fields, along with social media links.
//     6. Admin Dashboard-> Provides an interface for the admin to create, edit, and delete blog posts.
    
//     Additional Features:

//     1. A reusable Header with a logo and navigation menu.
//     2. A Footer with social media links and copyright info.
//     3. A Sidebar or Tags Section for exploring blog categories and trending topics.
//     5. Markdown Support for writing and rendering blog posts.
//     7. Fetching blog data from a JSON file, local storage, or a backend API.
//     8. Optimized Performance & Accessibility for fast loading times and better user experience.`,

//     `"Generate a modern, fully responsive multi-page portfolio website. The website should have a clean, visually appealing design. The project should include the following pages:"

//     1. Home Page -> Features the user's name, profession, introduction, and a call-to-action button (e.g., "Hire Me" or "View Work").
//     2. About Page -> Showcases the user's biography, skills, experience, and personal story.
//     3. Projects Page -> Displays past projects with images, descriptions, technologies used.
//     4. Resume Page -> Provides a downloadable resume in PDF format, along with key highlights of experience and education.
//     5. Contact Page -> Includes a contact form with Name, Email, and Message fields, along with social media and email links.
    
//     Additional Features:

//     1. A reusable Header with a logo and navigation menu.
//     2. A Footer with social media links, copyright info, and quick access to important sections.
//     3. Animated transitions for smooth page navigation.
//     4. Project filtering & sorting based on categories (e.g., Web Development, AI, Open Source).
//     5. Optimized Performance & Accessibility to ensure fast loading times and a great user experience across devices.`,

//     `"Generate a simple, fully responsive task list application. The application should have a clean, user-friendly design. The project should include the following features:"

//     1. Task Input -> Allows users to add new tasks with a description.
//     2. Task List -> Displays all tasks with options to mark as completed or delete.
//     3. Task Filtering -> Provides options to filter tasks by all, completed, or pending.
//     4. Local Storage -> Saves tasks in the browser's local storage to persist data across sessions.

//     Additional Features:

//     1. A reusable Header with the application title.
//     2. A Footer with the current date and a link to the developer's portfolio.
//     3. Optimized Performance & Accessibility to ensure fast loading times and a great user experience across devices.`
// ]

const HardPrompts = [
    {
        "projectTitle": "Enhanced CV Generator React Project",
        "explanation": "This project is a production-grade React application that generates a personalized CV using user input from a front-end form. The CV is rendered as a single-page application displaying multiple sections: Education, Projects, Skills, Achievements, Key Courses Taken, and Positions of Responsibility. The application follows modern React best practices with functional components, hooks, and error boundaries, and uses responsive CSS design. All elements include draggable, vertical, or horizontal classes to facilitate custom drag-and-drop behavior. The form collects details such as Name, Course, Department, Roll No, College, Email, Phone, GitHub, Website, LeetCode, Codeforces, and additional sections for Education, Projects, Skills, Achievements, Key Courses, and Positions, which are then stored and used to compile the final CV. The CV design is inspired by a LaTeX template with a professional layout and includes a hardcoded image with specified src and alt attributes. The project structure is defined in a comprehensive JSON object with keys representing full file paths and values containing the complete, ready-to-run file contents.",
        "files": {
          "/package.json": {
            "code": "{\n  \"name\": \"cv-generator-enhanced\",\n  \"version\": \"1.0.0\",\n  \"private\": true,\n  \"dependencies\": {\n    \"react\": \"^18.2.0\",\n    \"react-dom\": \"^18.2.0\",\n    \"react-router-dom\": \"^6.3.0\"\n  },\n  \"scripts\": {\n    \"start\": \"react-scripts start\",\n    \"build\": \"react-scripts build\"\n  }\n}\n"
          },
          "/public/index.html": {
            "code": "<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>CV Generator</title>\\n  </head>\\n  <body>\\n    <div id=\\\"root\\\"></div>\\n  </body>\\n</html>\\n"
          },
          "/index.js": {
            "code": "import React from 'react';\\nimport ReactDOM from 'react-dom/client';\\nimport App from './App';\\n\\nconst root = ReactDOM.createRoot(document.getElementById('root'));\\nroot.render(<App />);\\n"
          },
          "/App.js": {
            "code": "import React from 'react';\\nimport { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';\\nimport FormPage from './FormPage';\\nimport CVPage from './CVPage';\\nimport ErrorBoundary from './ErrorBoundary';\\nimport './css/App.css';\\n\\nfunction App() {\\n  return (\\n    <Router>\\n      <div className=\"draggable vertical\">\\n        <nav className=\"draggable horizontal\">\\n          <Link className=\"draggable vertical\" to=\"/form\">CV Form</Link>\\n          <Link className=\"draggable vertical\" to=\"/cv\">View CV</Link>\\n        </nav>\\n        <ErrorBoundary>\\n          <Routes>\\n            <Route path=\"/form\" element={<FormPage />} />\\n            <Route path=\"/cv\" element={<CVPage />} />\\n            <Route path=\"*\" element={<FormPage />} />\\n          </Routes>\\n        </ErrorBoundary>\\n      </div>\\n    </Router>\\n  );\\n}\\n\\nexport default App;\\n"
          },
          "/FormPage.js": {
            "code": "import React, { useState } from 'react';\\nimport { useNavigate } from 'react-router-dom';\\nimport './css/FormPage.css';\\n\\nfunction FormPage() {\\n  const navigate = useNavigate();\\n  const [formData, setFormData] = useState({\\n    name: '',\\n    course: '',\\n    department: '',\\n    roll: '',\\n    college: '',\\n    email: '',\\n    phone: '',\\n    github: '',\\n    website: '',\\n    leetcode: '',\\n    codeforces: '',\\n    education: '',\\n    projects: '',\\n    skills: '',\\n    achievements: '',\\n    keyCourses: '',\\n    positions: ''\\n  });\\n\\n  const handleChange = (e) => {\\n    setFormData({ ...formData, [e.target.name]: e.target.value });\\n  };\\n\\n  const handleSubmit = (e) => {\\n    e.preventDefault();\\n    localStorage.setItem('cvData', JSON.stringify(formData));\\n    navigate('/cv');\\n  };\\n\\n  return (\\n    <div className=\"form-container draggable vertical\">\\n      <h1 className=\"draggable vertical\">CV Data Form</h1>\\n      <form onSubmit={handleSubmit} className=\"draggable vertical\">\\n        <label className=\"draggable vertical\">Name:\\n          <input className=\"draggable vertical\" type=\"text\" name=\"name\" value={formData.name} onChange={handleChange} required />\\n        </label>\\n        <label className=\"draggable vertical\">Course:\\n          <input className=\"draggable vertical\" type=\"text\" name=\"course\" value={formData.course} onChange={handleChange} required />\\n        </label>\\n        <label className=\"draggable vertical\">Department:\\n          <input className=\"draggable vertical\" type=\"text\" name=\"department\" value={formData.department} onChange={handleChange} required />\\n        </label>\\n        <label className=\"draggable vertical\">Roll No:\\n          <input className=\"draggable vertical\" type=\"text\" name=\"roll\" value={formData.roll} onChange={handleChange} required />\\n        </label>\\n        <label className=\"draggable vertical\">College:\\n          <input className=\"draggable vertical\" type=\"text\" name=\"college\" value={formData.college} onChange={handleChange} required />\\n        </label>\\n        <label className=\"draggable vertical\">Email:\\n          <input className=\"draggable vertical\" type=\"email\" name=\"email\" value={formData.email} onChange={handleChange} required />\\n        </label>\\n        <label className=\"draggable vertical\">Phone:\\n          <input className=\"draggable vertical\" type=\"text\" name=\"phone\" value={formData.phone} onChange={handleChange} required />\\n        </label>\\n        <label className=\"draggable vertical\">GitHub:\\n          <input className=\"draggable vertical\" type=\"text\" name=\"github\" value={formData.github} onChange={handleChange} required />\\n        </label>\\n        <label className=\"draggable vertical\">Website:\\n          <input className=\"draggable vertical\" type=\"text\" name=\"website\" value={formData.website} onChange={handleChange} />\\n        </label>\\n        <label className=\"draggable vertical\">LeetCode:\\n          <input className=\"draggable vertical\" type=\"text\" name=\"leetcode\" value={formData.leetcode} onChange={handleChange} />\\n        </label>\\n        <label className=\"draggable vertical\">Codeforces:\\n          <input className=\"draggable vertical\" type=\"text\" name=\"codeforces\" value={formData.codeforces} onChange={handleChange} />\\n        </label>\\n        <label className=\"draggable vertical\">Education Section (HTML content allowed):\\n          <textarea className=\"draggable vertical\" name=\"education\" value={formData.education} onChange={handleChange} required />\\n        </label>\\n        <label className=\"draggable vertical\">Projects Section (HTML content allowed):\\n          <textarea className=\"draggable vertical\" name=\"projects\" value={formData.projects} onChange={handleChange} required />\\n        </label>\\n        <label className=\"draggable vertical\">Skills Section (HTML content allowed):\\n          <textarea className=\"draggable vertical\" name=\"skills\" value={formData.skills} onChange={handleChange} required />\\n        </label>\\n        <label className=\"draggable vertical\">Achievements Section (HTML content allowed):\\n          <textarea className=\"draggable vertical\" name=\"achievements\" value={formData.achievements} onChange={handleChange} required />\\n        </label>\\n        <label className=\"draggable vertical\">Key Courses Taken:\\n          <textarea className=\"draggable vertical\" name=\"keyCourses\" value={formData.keyCourses} onChange={handleChange} required />\\n        </label>\\n        <label className=\"draggable vertical\">Positions of Responsibility:\\n          <textarea className=\"draggable vertical\" name=\"positions\" value={formData.positions} onChange={handleChange} required />\\n        </label>\\n        <button className=\"draggable vertical\" type=\"submit\">Generate CV</button>\\n      </form>\\n    </div>\\n  );\\n}\\n\\nexport default FormPage;\\n"
          },
          "/CVPage.js": {
            "code": "import React from 'react';\\nimport Card from './components/Card';\\nimport './css/CVPage.css';\\n\\nfunction CVPage() {\\n  const data = JSON.parse(localStorage.getItem('cvData')) || {};\\n\\n  return (\\n    <div className=\"cv-container draggable vertical\">\\n      <header className=\"draggable vertical\">\\n        <h1 className=\"draggable vertical\">{data.name || 'Your Name'}</h1>\\n        <p className=\"draggable vertical\">{data.course || 'Course'} - {data.department || 'Department'}</p>\\n        <p className=\"draggable vertical\">Roll No: {data.roll || 'Roll No'}</p>\\n        <p className=\"draggable vertical\">{data.college || 'College'}</p>\\n        <p className=\"draggable vertical\">Email: {data.email || 'Email'} | Phone: {data.phone || 'Phone'}</p>\\n        <p className=\"draggable vertical\">\\n          GitHub: {data.github || 'GitHub'} | Website: {data.website || 'Website'} | LeetCode: {data.leetcode || 'LeetCode'} | Codeforces: {data.codeforces || 'Codeforces'}\\n        </p>\\n        <img className=\"draggable vertical\" src=\"profile.jpg\" alt=\"Profile Picture of the Candidate\" />\\n      </header>\\n      <Card title=\"Education\">\\n        <div className=\"draggable vertical\" dangerouslySetInnerHTML={{ __html: data.education || 'Education details here' }} />\\n      </Card>\\n      <Card title=\"Projects\">\\n        <div className=\"draggable vertical\" dangerouslySetInnerHTML={{ __html: data.projects || 'Projects details here' }} />\\n      </Card>\\n      <Card title=\"Skills\">\\n        <div className=\"draggable vertical\" dangerouslySetInnerHTML={{ __html: data.skills || 'Skills details here' }} />\\n      </Card>\\n      <Card title=\"Achievements\">\\n        <div className=\"draggable vertical\" dangerouslySetInnerHTML={{ __html: data.achievements || 'Achievements details here' }} />\\n      </Card>\\n      <Card title=\"Key Courses Taken\">\\n        <div className=\"draggable vertical\" dangerouslySetInnerHTML={{ __html: data.keyCourses || 'Key courses details here' }} />\\n      </Card>\\n      <Card title=\"Positions of Responsibility\">\\n        <div className=\"draggable vertical\" dangerouslySetInnerHTML={{ __html: data.positions || 'Positions details here' }} />\\n      </Card>\\n    </div>\\n  );\\n}\\n\\nexport default CVPage;\\n"
          },
          "/ErrorBoundary.js": {
            "code": "import React from 'react';\\n\\nclass ErrorBoundary extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.state = { hasError: false };\\n  }\\n\\n  static getDerivedStateFromError(error) {\\n    return { hasError: true };\\n  }\\n\\n  componentDidCatch(error, errorInfo) {\\n    console.error('ErrorBoundary caught an error', error, errorInfo);\\n  }\\n\\n  render() {\\n    if (this.state.hasError) {\\n      return <h1 className=\"draggable vertical\">Something went wrong.</h1>;\\n    }\\n    return this.props.children;\\n  }\\n}\\n\\nexport default ErrorBoundary;\\n"
          },
          "/components/Card.js": {
            "code": "import React from 'react';\\n\\nfunction Card({ title, children }) {\\n  return (\\n    <div className=\"card draggable vertical\">\\n      <h2 className=\"draggable vertical\">{title}</h2>\\n      <div className=\"card-content draggable vertical\">\\n        {children}\\n      </div>\\n    </div>\\n  );\\n}\\n\\nexport default Card;\\n"
          },
          "/css/App.css": {
            "code": "body {\\n  margin: 0;\\n  font-family: Arial, sans-serif;\\n}\\n\\nnav {\\n  background-color: #f8f8f8;\\n  padding: 10px;\\n}\\n\\nnav a {\\n  margin: 0 10px;\\n  text-decoration: none;\\n  color: #333;\\n}\\n"
          },
          "/css/FormPage.css": {
            "code": ".form-container {\\n  max-width: 600px;\\n  margin: 20px auto;\\n  padding: 20px;\\n}\\n\\n.form-container form {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.form-container label {\\n  margin-bottom: 10px;\\n}\\n\\n.form-container input, .form-container textarea {\\n  padding: 8px;\\n  margin-top: 4px;\\n  font-size: 16px;\\n}\\n\\n.form-container button {\\n  padding: 10px;\\n  font-size: 16px;\\n  margin-top: 20px;\\n  cursor: pointer;\\n}\\n"
          },
          "/css/CVPage.css": {
            "code": ".cv-container {\\n  max-width: 800px;\\n  margin: 20px auto;\\n  padding: 20px;\\n}\\n\\n.cv-container header {\\n  text-align: center;\\n  margin-bottom: 20px;\\n}\\n\\n.cv-container img {\\n  width: 150px;\\n  height: 150px;\\n  border-radius: 50%;\\n}\\n\\n.card {\\n  border: 1px solid #ddd;\\n  padding: 15px;\\n  margin-bottom: 20px;\\n  border-radius: 5px;\\n}\\n"
          }
        },
        "entryFilePath": "/App.js",
        "generatedFiles": [
          "/package.json",
          "/public/index.html",
          "/index.js",
          "/App.js",
          "/FormPage.js",
          "/CVPage.js",
          "/ErrorBoundary.js",
          "/components/Card.js",
          "/css/App.css",
          "/css/FormPage.css",
          "/css/CVPage.css"
        ]
      }
 
]
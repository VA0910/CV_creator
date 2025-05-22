'use client'

import React,{useState,useEffect,useContext,useRef} from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import Swal from 'sweetalert2';

import { Sandpack,
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    SandpackPreview,
    SandpackFileExplorer,useSandpack
   } from "@codesandbox/sandpack-react";
import { atomDark } from '@codesandbox/sandpack-themes';
import SandpackPreviewClient from './SandpackPreviewClient';
import { ActionContext } from './ActionContext'; // Updated import path
import { useParams } from 'react-router-dom';

import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faCode, faWindowMaximize,faWandMagicSparkles,faFileExport, faRocket, faFloppyDisk, faHexagonNodes, faCopy, faLock} from "@fortawesome/free-solid-svg-icons";
import { faReact, faHtml5, faCss3Alt, faSquareJs  } from "@fortawesome/free-brands-svg-icons";
import { useUser } from '../hooks/userContext';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/";

export default function MainPageReact({children}) {
  
  const { action, setAction } = useContext(ActionContext) || {};
  const [userprompts, setUserprompts] = useState([]);
  const [aimessage, setAimessage] = useState([]);
  const {projectid} = useParams();
  const [loading,setLoading] = useState(false);
  const { user, setUser } = useUser();
  const [userIsOwner, setUserIsOwner] = useState(false);
  const [userpromptsTiming,setUserpromptsTiming] = useState([]);
  
  const getProjectData = async (projectid) => {
    try {
        const response = await fetch(`${BACKEND_URL}project/${projectid}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", // Include credentials for session management
        });
        
        if (!response.ok) {
            throw new Error("Failed to fetch projects");
        }
        
        const data = await response.json(); 
        setUserIsOwner(data.owner === user._id || data.users.includes(user._id))
        console.log(userIsOwner)
    } catch (err) {
        console.log(err); // Capture and set the error
    }
  };
  getProjectData(projectid);

  

  let ProjectStructure;

  let parsedData;
  useEffect(() => {
    const data = localStorage.getItem('firstprompt');
    
    if (data) {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
  
      const prompt_area = document.querySelector('#prompt-area');
      if (parsedData.prompt) {
        prompt_area.innerHTML = parsedData.prompt;
        console.log("Prompt taken from local storage");
        setPrompt(parsedData.prompt);
      }
  
      // Clear local storage after using the data
      localStorage.removeItem('firstprompt');
    } else {
      // If no data is found, set prompt area to empty
      const prompt_area = document.querySelector('#prompt-area');
      prompt_area.innerHTML = '';
      setPrompt('');
    }
  }, []);
  

    
    const [previousPrompts,setPreviousPrompts] = useState([
        {
          prompt : "hi",
          response: "A modern, responsive e-commerce website with product listing, cart functionality, and checkout process"
        }
      ]);
    const [prompt, setPrompt] = useState('');
    const [projectStructure, setProjectStructure] = useState();
  const getAIResponse = async ()=>{
    setLoading(true)
    console.log("Loading state:", loading);
    const response = await fetch(`${BACKEND_URL}chat/getchat/${projectid}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Include credentials for session management
    });

    
    try{

      const data = await response.json();
      console.log("Previous ai response from database:",data)
      const chats = data.chats
      console.log("Chat history of this project:",chats)
      const latest_code_json_string = chats[chats.length - 1].airesponse
      const latest_code = JSON.parse(latest_code_json_string)
      console.log("latest code:",latest_code_json_string)
      
      // ProjectStructure=latest_code;
      setProjectStructure(latest_code);

      chats.forEach((element)=>{
        setUserprompts((prevPrompts) => [...prevPrompts, element.userprompt]);
        setAimessage((prevMessages) => [...prevMessages, element.text]);
        setUserpromptsTiming((prevMessages) => [...prevMessages, element.time]);
      })

    }catch(e){
      console.log("there is no previous chat in backend",e)
    }finally{
      setLoading(false)
    }
    
  }
  useEffect(() => {
    getAIResponse();
}, []); 

  useEffect(() =>{
    console.log("After setting projectStructure in getAIResponse:",projectStructure);
  },[projectStructure])
  
  // getAIResponse();

  // Define states
  const [showCode, setShowCode] = useState(false); // State for toggling between website/code views
  const [activeTab,setActiveTab] = useState("preview");
  const prevTabRef = useRef();

  const highlightCode = React.useCallback(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  }, []);

  const onActionBtn = (action) => {
    if (setAction) {
        setAction({
            actionType: action,
            timeStamp: Date.now()
        });
    } else {
        console.error("setAction is not defined");
    }
};

const handleOnClick = () => {
  console.log("Before update:", activeTab);
  setActiveTab("preview");
};

useEffect(() => {
  if (prevTabRef.current === "code" && activeTab === "preview") {
    // Trigger reload only when activeTab changes from "code" to "preview"
    window.location.reload();
  }

  // Update previous tab reference
  prevTabRef.current = activeTab;
}, [activeTab]);

useEffect(() => {
  console.log("Updated activeTab:", activeTab);
}, [activeTab]);
  // Function to handle prompt submission
  const handlePromptSubmit = async (e) => {
    e.preventDefault();
    setPrompt(" ");// Prevents the default form submission behavior
    console.log("Form submitted with prompt:", prompt);
    setUserprompts((prevPrompts) => [...prevPrompts, prompt]);
    // Simulate fetching generated code from backend (replace this with your API call)
    setLoading(true)
    try{
      console.log(projectid);
        const response = await fetch(`${BACKEND_URL}chat/${projectid}`,{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({
              message: prompt,
              route: window.location.pathname  // Add route to the body
          })
        })
        
        const data = await response.json();
        console.log('Response from backend:', data);
        const project_string = data.content[0].text;
        const project_object = JSON.parse(project_string)
        console.log("Object given to Sandpack:",project_object.explanation)
        setAimessage((prevMessages) => [...prevMessages, project_object.explanation]);
        console.log("Entry file path:",project_object.entryFilePath)
        console.log([userprompts,aimessage]);
        

        setProjectStructure(project_object);

    }catch(error){
        console.log('Error While fetching:',error);
    }finally{
      setLoading(false)
    }

  };

  const toggleView = ()=>{
    if(showCode){
      setShowCode(false);
    }
    else{
      setShowCode(true);
      setTimeout(highlightCode, 0);
    }
  };

  const copyProject = async () => {
    console.log("copy is hit");
    console.log(user);
    console.log(projectid);
    console.log(typeof projectid);  // Logs the type of projectid

    
    try {
      const response = await fetch(`${BACKEND_URL}project/copy/`+projectid, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user }), // Fixed typo and stringified body
        credentials: "include", // Include credentials for session management
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Project copied:", data);
  
      // Redirect to /main/react/{project_id} if response contains a valid ID
      if (data.project && data.project._id) {
        await Swal.fire({
            icon: 'success',
            title: 'Project Created!',
            html: `
                <div class="text-center">
                    <p>Your project has been successfully copied.</p>
                    <p>Redirecting to Copied Project Window</p>
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
        window.location.href = `/main/react/${data.project._id}`;
      } else {
        console.error("Project ID missing in response");
      }
  
    } catch (error) {
      console.error("Error copying project:", error);
    }
  };
  
  const now = new Date();

  // Get time in 24-hour format
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`;
  
  // Get date in DD-MM-YYYY format
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = now.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  
  const finalOutput = `${formattedTime} ${formattedDate}`;

  return (
  <div className="flex flex-col-reverse md:flex-row h-full w-full text-white bg-gray-900">
    {/* Left Panel */}
    <div
      className="w-full md:w-1/2 p-2 md:p-6 border-r border-gray-700 bg-gray-900 flex flex-col">
      {/* Previous Prompts Section */}
      <div className="flex-grow md:h-[70%] md:max-h-[70%] max-h-80 overflow-y-scroll p-3 mb-4 rounded-lg bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] border border-indigo-400/20 shadow-2xl shadow-black/40">
        <div className="flex gap-2 text-xl font-semibold">
          <div>
          <FontAwesomeIcon icon={faBarsStaggered} />
          </div>
          <div>
            Response History
          </div>
        </div>
        {userprompts.map((prompt, index) => (
          <div key={index} className="mb-3">
            {/* User Prompt */}
            <div className="relative flex justify-end max-h-52 mt-3">
              <div className="bg-indigo-500 text-white px-4 py-2 rounded-lg max-w-[80%] overflow-scroll">
                {prompt}
              </div>
              <div className='absolute bottom-0 right-0 text-sm'>
                  {userpromptsTiming[index] || finalOutput}
                  </div>

            </div>
            {/* AI Response */}
            {aimessage[index] && (
              <div className="flex justify-start max-h-52 overflow-scroll mt-3">
                <div className="bg-gray-700 text-white px-4 py-2 rounded-lg max-w-[80%] overflow-scroll">
                  {aimessage[index]}
                </div>
              </div>
            )}
          </div>
        ))}
        {loading && 
          <div className="flex justify-center my-4">
          <FontAwesomeIcon 
            icon={faHexagonNodes} 
            className="w-10 h-10 text-indigo-500 animate-spin"
            style={{ animationDuration: '1s' }}
          />
          </div>
        }
      </div>
      <div className='flex flex-col items-end w-full h-[30%] bg-gray-800 border border-gray-600 rounded-lg'>
        <textarea
          id="prompt-area"
          className="w-full h-[80%] p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none resize-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter website description..."
        />
        { userIsOwner&&
        <button 
          className="h-10 w-10 p-2 m-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full shadow-md transition"
          onClick={handlePromptSubmit}
        >
          <FontAwesomeIcon icon={faWandMagicSparkles} />
        </button>}
      </div>
    </div>
    
    
    {/* Right Panel */}
    <div className="w-[98%] m-2 md:m-0 md:w-1/2 flex flex-col bg-gray-900">
      {/* Navigation Tabs */}
      <nav className="flex flex-row justify-between p-1 md:p-2 bg-gray-900 border-b border-gray-700 h-[9%] mb-4">
        <div 
          className="bg-gray-900 inline-flex rounded-full p-1 transition-colors duration-300 border border-gray-200/50"
          role="group"
        >
          <button
            type="button"
            className={`flex items-center rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-medium transition-all duration-300 
              ${activeTab === "preview" ? "bg-white text-gray-900 shadow-lg" : "bg-gray-900 text-white"}`}
              onClick={handleOnClick}
              disabled={!userIsOwner}
          >
            <FontAwesomeIcon 
              icon={faWindowMaximize} 
              className="mx-2 mt-[0.2rem] text-xs md:text-sm" 
            />
            <span className="hidden sm:inline">Preview</span>
            {!userIsOwner && <FontAwesomeIcon icon={faLock} className="ml-1 text-xs md:text-sm" />}
          </button>

          <button
            type="button"
            className={`flex items-center rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 
              ${activeTab === "code" ? "bg-white text-gray-900 shadow-lg" : "bg-gray-900 text-white"}`}
            onClick={() => setActiveTab("code")}
            disabled={!userIsOwner}
          >
            <FontAwesomeIcon 
              icon={faCode} 
              className="mx-1 md:mr-2 mt-[0.2rem] text-xs md:text-sm" 
            />
            <span className="hidden sm:inline">Code</span>
            {!userIsOwner && <FontAwesomeIcon icon={faLock} className="ml-1 text-xs md:text-sm" />}
          </button>
          </div>
          
          {
            userIsOwner?(
          <div className='flex flex-row gap-3'>
          <button
            className={"relative group p-1 md:p-2 h-8 w-8 md:h-10 md:w-10 mt-1 rounded-full text-white ring-1 ring-slate-100/60" }
            onClick={() => onActionBtn("export")}
          
          >
            <FontAwesomeIcon icon={faFileExport} className="text-md md:text-xl" />
            <span className="absolute z-50 left-1/2 bottom-full mb-2 w-max -translate-x-1/2 
                     scale-0 rounded bg-gray-700 text-white text-xs px-2 py-1 
                     opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
              Export
            </span>
          </button>
        
          <button
            className="relative group p-1 md:p-2 h-8 w-8 md:h-10 md:w-10 mt-1 rounded-full text-white ring-1 ring-slate-100/60"
            onClick={() => onActionBtn("deploy")}
          >
            <FontAwesomeIcon icon={faRocket} className="text-md md:text-xl" />
            <span className="absolute z-50 left-1/2 bottom-full mb-2 w-max -translate-x-1/2 
                     scale-0 rounded bg-gray-700 text-white text-xs px-2 py-1 
                     opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
              Deploy
            </span>
          </button>
          </div>
          ):(
              <div className="flex flex-row gap-2 md:gap-3">
                <button className="relative group p-1 md:p-2 h-7 w-7 md:h-10 md:w-10 mt-1 rounded-full text-white ring-1 ring-slate-100/60"
                  onClick={copyProject}
                >
                  <FontAwesomeIcon icon={faCopy} className="text-md md:text-xl" />
                  <span className="absolute z-50 left-1/2 bottom-full mb-2 w-max -translate-x-1/2 scale-0 rounded bg-gray-700 text-white text-xs px-2 py-1 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                  Copy
                </span>
                </button>
              </div>
            )
          }
      </nav>

      {/* Sandpack Editor */}
      {projectStructure && (
        <SandpackProvider
          template="react"
          theme={atomDark}
          files={projectStructure.files}
          options={{
            showNavigator: true,
            showLineNumbers: true,
            closableTabs: true,
            activeFile: projectStructure.entryFilePath,
          }}
          customSetup={{
            dependencies: {
              "axios": "^1.7.9",
              "class-variance-authority": "^0.7.1",
              "clsx": "^2.1.1",
              "cra-template": "1.2.0",
              "lucide-react": "^0.471.1",
              "prism": "^4.1.2",
              "prismjs": "^1.29.0",
              "react": "^18.3.1",
              "react-dom": "^18.3.1",
              "react-draggable": "^4.4.6",
              "react-frame-component": "^5.2.7",
              "react-grid-layout": "^1.5.0",
              "react-resizable": "^3.0.5",
              "react-router-dom": "^7.1.2",
              "react-scripts": "5.0.1",
            },
            main: projectStructure.entryFilePath,
          }}
        >
          
          <SandpackLayout className="flex h-full bg-gray-900" >
            {activeTab === "preview" ? (
              <SandpackPreviewClient className="flex h-full w-full"/>
            ) : (
              <div className="flex h-full overflow-scroll">
                <SandpackFileExplorer className="overflow-scroll border-r border-gray-700 " style={{height:'857px', width:'200px'}} />
                <SandpackCodeEditor className=" overflow-scroll" style={{height:'857px', width:'700px'}} />``
              </div>
            )}
          </SandpackLayout>
        </SandpackProvider>
      )}
    </div>
  </div>
);
};

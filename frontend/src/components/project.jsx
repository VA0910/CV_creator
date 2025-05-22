import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3Alt, faSquareJs  } from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare, faUserPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import axios from "axios";


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/";

const ProjectList = (props) => {
    

    const projects = props.projects;
    const users = props.users;
    const getAllUsers = props.getAllUsers;
    const user = props.user;
    
    const [showPopup, setShowPopup] = useState(false); // Track if popup is visible
    const [editProjectData, setEditProjectData] = useState(false);

    const [selectedUsers, setSelectedUsers] = useState([]); // Track selected users
    const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering users
    const [searchresult, setSearchResult] = useState([]);
    const [project, setProject] = useState({});
    const [allReadySelected, setAllReadySelected] = useState([]);
    
    const [editItem, setEditItem] = useState({});
    
    const getProjectData = async (projectid) => {
        try {
            // console.log(projectid);
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
            setAllReadySelected(data.users); 
        } catch (err) {
            console.log(err); // Capture and set the error
        }
    };
    
    const handleAddUser = (user) => {
        setAllReadySelected((prevUsers) =>
            prevUsers.some((u) => u === user._id)
        ? prevUsers.filter((u) => u !== user._id) // Remove user if already added
        : [...prevUsers, user._id] // Add user if not present
    );
    const existUser = allReadySelected.find((u) => u === user._id);
    if (!existUser)
        setAllReadySelected((p) => [...p, user._id]);
    console.log(allReadySelected);
    };

    const selectproject = (id) => {
        setShowPopup(true);
        getAllUsers();
        setProject(id);
    };

    const handleSearch = (e) => {
        console.log("searching....");
        setSearchResult([]);
        const searchValue = e.target.value;
        setSearchTerm(searchValue);
        users.map((user, index) => {
            const tosearch = user.name.trim().toLowerCase();
            const search = searchValue.trim().toLowerCase();
            if (tosearch.includes(search)) {
                setSearchResult((old) => [...old, user.name]);
            }
        });
    };

    const handleclose = () => {
        console.log('close');
        setShowPopup(false);
        setAllReadySelected([]);
        setSelectedUsers([]);
    };

    const handlesave = async () => {
        try {
            console.log("Saving project...");
            console.log("Project Name:", project.name);
            console.log("Project Chats:", project.chats);
            console.log("Selected Users Before Deduplication:", allReadySelected);
            console.log("currentuser:", user);

            const response = await fetch(`${BACKEND_URL}project/${project._id}/edit`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: project.name,
                    users: allReadySelected,
                    owner: project.owner,
                    visibility: project.visibility,
                    description: project.description,
                    projectType: project.projectType,
                    chats: project.chats
                }),
                credentials: "include", // Ensures cookies/session are included
            });

            if (!response.ok) {
                throw new Error("Failed to update project");
            }

            // Reset states after successful update
            setProject({});
            setSelectedUsers([]);
            setShowPopup(false);

            console.log("Project updated successfully!");

        } catch (err) {
            console.error("Error while saving project:", err);
        }
    };

    // Filter users based on the search term
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleRedirect = ({ project }) => {
        if (project.projectType) {
            window.location.href = '/main/react/' + project._id;
        } else {
            window.location.href = '/main/plain/' + project._id;
        }
    };

    const handleEditProject = async(projectId) => {
        try {
            // console.log(projectid);
            const response = await fetch(`${BACKEND_URL}project/${projectId}/edit`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: editItem.name,
                    visibility: editItem.visibility,
                    description: editItem.description,

                }),
                credentials: "include", // Include credentials for session management
            });
            
            if (!response.ok) {
                throw new Error("Failed to edit project");
            }
            
            await response.json();
            window.location.reload();

            // console.log(data); 
        } catch (err) {
            console.log(err); // Capture and set the error
        }
    };


    const toggleEditProjectData = () => {
        setEditProjectData(!editProjectData);
    };
    const handleDelete = async (projectId) => {
        try {
            Swal.fire({
                title: "Delete Project?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#a3a3a3",
                confirmButtonText: "Yes, Delete it!"
              }).then(async (result) => {
                if (result.isConfirmed) {

                  await axios.delete(`${BACKEND_URL}project/${projectId}/delete`);
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your Project has been deleted.",
                    icon: "success"
                  }).then(()=>{
                    window.location.reload();
                  });
                }
              });
    
        } catch (error) {
          console.error('Error deleting project:', error);
          await Swal.fire({
            title: "Error!",
            text: "Failed to delete project. Please try again.",
            icon: "error"
          });
        }
      };


    return (
        <>
        <div className="sticky top-0 z-20 text-2xl md:text-4xl font-medium mb-4 mt-4 px-2 rounded-lg text-left">
            My Projects
        </div>
        <div className="h-[90%] w-full overflow-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 p-2">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`bg-slate-800 p-2 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-slate-700`}
                    >
                        <div className="border border-gray-500 p-2 rounded-lg" onClick={() => handleRedirect({ project })}>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                            </div>

                            <div className="text-slate-300 text-sm text-left leading-relaxed mb-4 h-28 overflow-hidden text-ellipsis line-clamp-5">{project.description}</div>
                        </div>
                        
                        <div className="flex gap-2 mt-4 justify-between">
                            <div className="flex gap-2">
                                <div className="group relative">
                                    <button className="text-gray-200 rounded-md hover:text-blue-500">
                                        <FontAwesomeIcon icon={faPenToSquare} className="h-6 w-6" onClick={() => {
                                            toggleEditProjectData();
                                            setEditItem(project);
                                        }} />
                                    </button>
                                    <span className="absolute z-50 left-1/2 bottom-full mb-2 ml-3 w-max -translate-x-1/2 scale-0 rounded bg-gray-500 text-white text-xs px-2 py-1 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                                        Edit Project
                                    </span>
                                </div>
                                <div className="group relative">
                                    <button
                                        onClick={() => { selectproject(project); getProjectData(project._id); }} // Show popup when clicked
                                        className="text-gray-200 rounded-md hover:text-blue-500"
                                    >
                                    <FontAwesomeIcon icon={faUserPlus} className="h-6 w-6" />
                                    </button>
                                    <span className="absolute z-50 left-1/2 bottom-full mb-2 ml-4 w-max -translate-x-1/2 scale-0 rounded bg-gray-500 text-white text-xs px-2 py-1 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                                        Add Users to Collaborate
                                    </span>
                                </div>
                                <div className="group relative">
                                    <button
                                        onClick={() => {handleDelete(project._id)}}
                                        className="text-gray-200 rounded-md hover:text-red-500 disabled:opacity-50 disabled:hover:text-gray-200"
                                    >
                                        <FontAwesomeIcon 
                                        icon={faTrash}
                                        className={`h-6 w-6`} 
                                        />
                                    </button>
                                    <span className="absolute z-50 left-1/2 bottom-full mb-2 ml-4 w-max -translate-x-1/2 scale-0 rounded bg-gray-500 text-white text-xs px-2 py-1 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                                        Delete Project
                                    </span>
                                </div>
                            </div>
                            {project.projectType? (<FontAwesomeIcon icon={faReact} className='h-8 w-8' />):(
                                <div className="">
                                <FontAwesomeIcon icon={faHtml5} className='h-7 w-7' />
                                <FontAwesomeIcon icon={faCss3Alt} className='h-7 w-7' />
                                <FontAwesomeIcon icon={faSquareJs} className='h-7 w-7' />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup for adding users */}
            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-30">
                    <div className="bg-[#1e293b] p-6 rounded-lg shadow-md w-96 max-w-lg relative">
                        <h2 className="text-xl font-bold text-white">Add Users to Project</h2>
                        <input
                            type="text"
                            className="mt-4 w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => handleSearch(e)} // Update search term
                        />
                        <div className="mt-4 max-h-72 overflow-y-auto">
                            {filteredUsers.map((user) => (
                                <div key={user._id} className="flex justify-between items-center p-2 hover:bg-[#334155] rounded-md">
                                    <div className=""> 
                                        <span className="text-white block text-left">{user.name}</span>
                                        <span className="text-gray-400 text-xs block text-left">{user.email}</span>
                                    </div>
                                    <button
                                        onClick={() => handleAddUser(user)}
                                        className={`px-4 py-1 rounded-md ${
                                            allReadySelected.some((u) => u === user._id) ? "bg-gray-500" : "bg-green-500"
                                        } text-white`}
                                    >
                                        {allReadySelected.some((u) => u === user._id) ? "Added" : "Add"}
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex justify-between">
                            <button
                                onClick={handleclose}
                                className="px-4 py-2 bg-gray-500 text-white rounded-md"
                            >
                                Close
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                onClick={() => handlesave()}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Popup for editing project details */}
            {editProjectData && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-30">
                <div className="bg-[#1e293b] p-6 rounded-lg shadow-md w-full max-w-md mx-auto relative">
                    <h2 className="text-xl font-bold text-white mb-4">Edit Project Details</h2>

                    <div className="flex flex-col space-y-4">
                    {/* Project Name Field */}
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="projectName" 
                               className="text-left tracking-wide text-md font-medium text-slate-200">
                        Project Name:
                        </label>
                        <input
                        id="projectName" type="text"
                        // placeholder={project.name}
                        value={editItem.name}
                        className="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        onChange={(e)=>{
                            setEditItem({
                                ...editItem,
                                name:e.target.value
                            })
                        }} // Add onChange logic here
                        />
                    </div>

                    {/* Visibility Field */}
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="visibility"
                               className="text-left tracking-wide text-md font-medium text-slate-200"
                        >
                        Visibility:
                        </label>
                        <select id="visibility"
                                value={editItem.visibility ? "public" : "private"}
                                className="w-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                onChange={(e)=>{
                                    setEditItem({
                                        ...editItem,
                                        visibility: e.target.value  === "public"
                                    });
                                }} // Add onChange logic here
                        >
                        <option value="private">Private</option>
                        <option value="public">Public</option>
                        </select>
                    </div>

                    {/* Project Description Field */}
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="projectDescription"
                        className="text-left tracking-wide text-md font-medium text-slate-200">
                        Project Description:
                        </label>
                        <div className="w-full h-32">
                        <textarea id="projectDescription" 
                            // placeholder={project.description}
                            value={editItem.description}
                            className="w-full h-full px-3 py-2 bg-slate-600 text-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                            onChange={(e)=>{
                                setEditItem({
                                    ...editItem,
                                    description:e.target.value
                                });
                            }}
                            ></textarea>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-2">
                        <button onClick={toggleEditProjectData} className="px-4 py-2 bg-gray-500 text-white rounded-md">
                        Cancel
                        </button>
                        <button onClick={()=>{
                            handleEditProject(editItem._id);
                            toggleEditProjectData();
                        }} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                        Save Changes
                        </button>
                    </div>
                    </div>
                </div>
                </div>

            )}
        </div>
        </>
    );
};

export default ProjectList;
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHexagonNodes } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import Projectlist from "../components/project"; // Adjusted path if needed
import { useUser } from "../hooks/userContext";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/";

const Profile = () => {
  
  const {user, setUser} = useUser(); // State to hold authenticated user data
  const [projects, setProjects] = useState([]); // State to hold projects data
  const [users, setUsers] = useState([]); // State to hold all users
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State to capture errors

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}user/my`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include credentials for session management
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      // setUser(data); // Set the fetched user data
    } catch (err) {
      setError(err.message); // Capture and set the error
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  // Function to fetch all users from the backend
  const getAllUsers = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}search`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Function to fetch projects for the authenticated user
  const getAllProjects = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}user/my/project`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await response.json();
      setProjects(data.reverse());

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }

  };

  // Fetch user data and projects when component mounts
  // useEffect(() => {
  //   fetchUserData();
  //   // getAllUsers();
  // }, []);

  useEffect(() => {
    if (user) {
      getAllProjects();
    }
  }, [user]);

  // Handle profile update function
  const handleUpdateUser = () => {
    if (!user.name.trim() || !user.username.trim()) {
      return;
    }
  };

  // Edit user dialog box function
  const handleShowEditDialog = (user) => {
    Swal.fire({
      title: "<span class='text-white'>Edit Profile</span>",
      background: "#1e293b",
      color: "#ffffff",
      html: `
        <form id="edit-profile-form" class="flex flex-col gap-4 text-left">
          <label class="text-sm font-medium text-gray-300">Name</label>
          <input type="text" id="swal-name" class="swal2-input bg-gray-700 text-white border-none rounded-lg focus:ring-2 focus:ring-blue-500">

          <label class="text-sm font-medium text-gray-300">Username</label>
          <input type="text" id="swal-username" class="swal2-input bg-gray-700 text-white border-none rounded-lg focus:ring-2 focus:ring-blue-500">

          <label class="text-sm font-medium text-gray-300">Skills (comma separated)</label>
          <input type="text" id="swal-skills" class="swal2-input bg-gray-700 text-white border-none rounded-lg focus:ring-2 focus:ring-blue-500">
        </form>
      `,
      showCancelButton: true,
      confirmButtonText: "<span class='text-white'>Save Changes</span>",
      cancelButtonText: "<span class='text-gray-400'>Cancel</span>",
      customClass: {
        popup: 'rounded-lg shadow-lg',
        confirmButton: 'bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded',
        cancelButton: 'bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
      },
      didOpen: () => {
        document.getElementById("swal-name").value = user.name || "";
        document.getElementById("swal-username").value = user.username || "";
        document.getElementById("swal-skills").value = user.skills || "";
      },
      preConfirm: () => {
        return {
          name: document.getElementById("swal-name").value,
          username: document.getElementById("swal-username").value,
          skills: document.getElementById("swal-skills").value,
        };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // setUser(result.value);
        handleUpdateUser();
      }
    });
  };

  
  return (
      <div className="flex flex-col md:flex-row m-4 items-center md:items-start justify-between w-full h-screen">
        {/* Profile Info */}
          {user? (<div className="w-[90%] md:w-[25%]  md:m-4 rounded-full md:rounded-md p-2 md:p-4 bg-gray-900 h-[6%] md:h-[45%] lg:h-[55%] flex items-center md:block ">
              <div className="w-12 h-8 md:w-[60%] md:h-[60%] lg:w-[80%] lg:h-[80%] mx-auto mb-0 md:mb-3">
                <img src={user.imageURL} alt="User Profile Image" className="h-full w-full rounded-full md:rounded-md" />
              </div>
              <div className="w-full">
                <h2 className="text-sm md:text-xl ml-4 md:ml-0 text-left md:text-center text-gray-200 font-semibold">{user.name}</h2>
                <p className="hidden md:block text-sm md:text-md text-center text-gray-500">{user.email}</p>
              </div>
            </div>)
            :
            (<div className="w-[90%] md:w-[25%] m-4 pl-2 lg:pl-4 bg-gray-900 h-[55%] flex items-center justify-center">
              <FontAwesomeIcon 
                icon={faHexagonNodes} 
                className="w-10 h-10 text-indigo-500 animate-spin"
                style={{ animationDuration: '1s' }}
              />
            </div>)
          }
          
      {loading?(
        <div className="text-center w-[95%] md:w-[75%] h-[100%] text-white text-4xl mx-5 p-2 md:p-5 animate-pulse">
          <h1 className="mt-5 font-mono">
            Loading Projects...
          </h1>
        </div>
       ):
      error ? (
        <div className="text-center w-[95%] md:w-[75%] h-[100%] text-red-500 text-4xl mx-5 p-2 md:p-5">
         <h1 className="mt-5 font-mono">
            {error}
          </h1>
        </div>
      ) : (
        <div className="text-center w-[90%] h-[92%] md:w-[75%] md:h-[100%] mx-4 md:mx-10">
          <Projectlist 
          projects={projects} 
          users={users} 
          // getAllUsers={getAllUsers} 
          getAllUsers={getAllUsers} 
          user={user} />
        </div>
      )}
      </div>
  );
};

export default Profile;
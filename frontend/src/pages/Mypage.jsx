import React, { useState, useEffect } from "react";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/";

const Mypage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchUserData = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}api/user/my`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {userData ? (
        <div>
          <h1>{userData.name}'s Profile</h1>
          <p>Email: {userData.email}</p>
          <p>Projects:</p>
          <ul>
            {userData.projects.map((project) => (
              <li key={project._id}>
                {project.name} - {project.visibility}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No user data found.</div>
      )}
    </div>
  );
};

export default Mypage;

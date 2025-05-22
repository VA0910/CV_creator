import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/";
// Create the User Context
const UserContext = createContext();

// Custom hook to access user context
export const useUser = () => useContext(UserContext);

// UserProvider component to wrap your app with user context
export const UserProvider = ({ children }) => {
  

  const [user, setUser] = useState(null);

  useEffect(() => {
    if(user)return;
    let cancel;
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}auth/login/success`, 
        { 
          withCredentials: true,
          cancelToken: new axios.CancelToken(c => cancel = c)
        });
        setUser(res.data.user);
      } catch (err) {
        if (axios.isCancel(err)) return;
        console.error("Not authenticated", err);
      }
    };
    fetchUser();
    return () => cancel();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

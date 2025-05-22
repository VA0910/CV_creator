import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider, useUser } from "./hooks/userContext";

import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"

import MainPageReact from "./pages/MainPageReact";
import MainPagePlain from "./pages/MainPagePlain";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import { UniversalPage } from "./pages/UniversalPage";
import { ActionContext } from './pages/ActionContext';
import { useState } from "react";
import About from "./pages/About"

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/";

function App() {
    const [action, setAction] = useState();

    return (
        <UserProvider>
            <ActionContext.Provider value={{ action, setAction }}>
            
            <div className="flex flex-col items-center min-h-screen text-white bg-gradient-to-br from-black from-40% via-gray-900 via-60% to-indigo-900 to-90%">
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Landing/>} />
                        <Route path="/universal" element={<UniversalPage />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/main/react/:projectid" element={<MainPageReact/>} />
                        <Route path="/main/plain/:projectid" element={<MainPagePlain/>} />
                        <Route path="/about" element={<About/>} />
                    </Routes>
                    <Footer/>
                </Router>
            </div>
            </ActionContext.Provider>

        </UserProvider>
    );
}

export default App;
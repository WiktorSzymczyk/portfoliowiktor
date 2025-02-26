import React, { useState, useEffect } from "react";
import "./App.css";
import image1 from "./images/image1.jpeg";
import Educations from "./pages/Education/Educations";
import Work from "./pages/Work/Work";
import CV from "./pages/CV/CV";
import Contact from "./pages/Contact/Contact";
import Bookings from "./pages/Booking/Bookings";

const App = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const tabs = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "work", label: "Work History" },
    { id: "cv", label: "CV" },
    { id: "contact", label: "Contact" },
    { id: "Book", label: "Book" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "education":
        return <Educations />;
      case "work":
        return <Work />;
      case "cv":
        return <CV />;
      case "contact":
        return <Contact />;
      case "Book":
        return <Bookings />;
      default:
        return <p className="text-lg">Welcome to my portfolio!</p>;
    }
  };

  return (
    <div className="bg-[#e2dfdd] dark:bg-[#1a1a1a] min-h-screen flex justify-center items-center p-6">
      <div className="relative p-8 bg-[#d6d3d1] dark:bg-[#222222] rounded-xl shadow-2xl text-light-text dark:text-dark-text w-full max-w-7xl">
        
        {/* Settings Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none shadow-md"
          >
            ⚙️
          </button>

          {/* Settings Dropdown */}
          {settingsOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-light-card dark:bg-dark-card shadow-lg rounded-md overflow-hidden z-10">
              <ul className="text-sm text-light-text dark:text-dark-text">
                <li
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                  Change Language
                </li>
              </ul>
            </div>
          )}
        </div>

        <h1 className="text-3xl font-bold text-center mb-6">My Portfolio</h1>

        {/* Navigation Tabs */}
        <div className="flex justify-between mb-8 border-b pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === tab.id ? "text-light-heading dark:text-white font-bold border-b-2 border-gray-700" : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-x-10">
      <img
        src={image1}
        alt="Wiktor Szymczyk"
        className="w-72 h-72 rounded-full shadow-xl"
      />
      <div className="flex-1">
        <h2 className="text-4xl font-semibold text-[#3a3a3a] dark:text-white mb-4">
          <span className="font-extrabold text-[#2a2a2a] dark:text-gray-300">
            Wiktor
          </span>{" "}
          Szymczyk
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          I'm a passionate and versatile professional with a strong background
          in technology, education, and aviation. I hold a full-stack web
          development certification and have gained proficiency in both
          front-end and back-end technologies such as HTML, CSS, JavaScript,
          React, and Node.js. I love using these skills to create innovative,
          user-centric applications.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Previously, I worked as a Desktop Technician, where I honed my
          problem-solving abilities and provided hardware and software support
          to maintain system performance.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Currently, I’m working as a SEN (Special Educational Needs) Teaching
          Assistant. In this role, I offer tailored support to students with
          diverse needs and create an inclusive and engaging learning
          environment that adapts to different learning styles.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Apart from technology and education, aviation has always been a
          passion of mine. I’ve worked in cabin cleaning with Menzies Aviation,
          helping ensure safe, comfortable experiences for passengers. My
          diverse experiences across tech, education, and aviation shape my
          unique perspective and drive to make a positive impact in everything I
          do.
        </p>
      </div>
    </div>
  );
};

export default App;

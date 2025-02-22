import React, { useState } from 'react';
import workData from './Works'; // Ensure the correct path for importing works

function Work() {
  // Function to toggle responsibilities visibility for each job
  const toggleResponsibilities = (index) => {
    setVisibleResponsibilities(prevState => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index]; // Toggle the visibility for the specific job
      return updatedState;
    });
  };

  // State to track visibility of responsibilities for each job
  const [visibleResponsibilities, setVisibleResponsibilities] = useState(
    new Array(workData.workExperience.length).fill(false)
  );

  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {workData?.workExperience?.length > 0 ? (
        workData.workExperience.map((job, index) => (
          <li key={index} className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clipRule="evenodd"/>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{job.jobTitle} at {job.company}</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{job.dates}</time>
            
            {/* Short Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              {job.shortDescription}
            </p>

            {/* Toggle Button for Responsibilities */}
            <button
              onClick={() => toggleResponsibilities(index)}
              className="border-2 rounded-md border-blue-500 text-blue-500 hover:text-blue-700 mb-4 px-4 py-1"
            >
              {visibleResponsibilities[index] ? "Hide Responsibilities" : "Show Responsibilities"}
            </button>

            {/* Responsibilities List (conditionally rendered based on state) */}
            {visibleResponsibilities[index] && (
              <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                {job.responsibilities.map((responsibility, responsibilityIndex) => (
                  <li key={responsibilityIndex} className="mb-2">{responsibility}</li>
                ))}
              </ul>
            )}
          </li>
        ))
      ) : (
        <li className="text-gray-500 dark:text-gray-400">No work experience available.</li>
      )}
    </ol>
  );
}

export default Work;

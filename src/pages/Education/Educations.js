import React, { useState } from 'react';
import educationData from './Education'; // Import the education data

function Educations() {
  // State to toggle table visibility
  const [visibleTableIndex, setVisibleTableIndex] = useState(null);

  const toggleTable = (index) => {
    setVisibleTableIndex(visibleTableIndex === index ? null : index);
  };

  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {educationData.map((education, index) => (
        <li key={index} className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {education.school}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {education.duration}
          </time>

          {/* Display description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            {education.desc}
          </p>

          {/* Toggle Button */}
          <button
            onClick={() => toggleTable(index)}
            className="border-2 rounded-md border-blue-500 text-blue-500 hover:text-blue-700 mb-4 px-4 py-1"
          >
            {visibleTableIndex === index ? "Hide Courses" : "Show Courses"}
          </button>

          {/* Table for courses (conditionally rendered based on state) */}
          {visibleTableIndex === index && (
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 rounded-s-lg">
                      Course
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-e-lg">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {education.courses.length > 0 ? (
                    education.courses.map((course, courseIndex) => (
                      <tr key={courseIndex} className="bg-white dark:bg-gray-800">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {course.courseName}
                        </th>
                        <td className="px-6 py-4">{course.grade}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                        No courses available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

export default Educations;

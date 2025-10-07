import { CogIcon } from '@heroicons/react/24/solid'
import { useState } from "react";

export default function SidebarDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Minu & Kavi</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="#ffffffff"/><path d="M21.894 11.553C19.736 7.236 15.904 5 12 5c-3.903 0-7.736 2.236-9.894 6.553a1 1 0 0 0 0 .894C4.264 16.764 8.096 19 12 19c3.903 0 7.736-2.236 9.894-6.553a1 1 0 0 0 0-.894zM12 17c-2.969 0-6.002-1.62-7.87-5C5.998 8.62 9.03 7 12 7c2.969 0 6.002 1.62 7.87 5-1.868 3.38-4.901 5-7.87 5z" fill="#ffffffff"/></svg>
                <span className="flex-1 ms-3 whitespace-nowrap">View Web Page</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg width="30" height="30" fill="#ffffffff" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm8 4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zm-9-2H3v2h2zm9-2a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zM6 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm8 4a1 1 0 0 1 .117 1.993L14 7h-4a1 1 0 0 1-.117-1.993L10 5zM5 3H3v2h2zm9-2a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z"/></svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Overview</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg fill="#ffffffff" width="30" height="30" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>settings-line</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M18.1,11c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S22,11,18.1,11z M18.1,23c-2.8,0-5-2.2-5-5s2.2-5,5-5c2.8,0,5,2.2,5,5S20.9,23,18.1,23z"></path><path class="clr-i-outline clr-i-outline-path-2" d="M32.8,14.7L30,13.8l-0.6-1.5l1.4-2.6c0.3-0.6,0.2-1.4-0.3-1.9l-2.4-2.4c-0.5-0.5-1.3-0.6-1.9-0.3l-2.6,1.4l-1.5-0.6l-0.9-2.8C21,2.5,20.4,2,19.7,2h-3.4c-0.7,0-1.3,0.5-1.4,1.2L14,6c-0.6,0.1-1.1,0.3-1.6,0.6L9.8,5.2C9.2,4.9,8.4,5,7.9,5.5L5.5,7.9C5,8.4,4.9,9.2,5.2,9.8l1.3,2.5c-0.2,0.5-0.4,1.1-0.6,1.6l-2.8,0.9C2.5,15,2,15.6,2,16.3v3.4c0,0.7,0.5,1.3,1.2,1.5L6,22.1l0.6,1.5l-1.4,2.6c-0.3,0.6-0.2,1.4,0.3,1.9l2.4,2.4c0.5,0.5,1.3,0.6,1.9,0.3l2.6-1.4l1.5,0.6l0.9,2.9c0.2,0.6,0.8,1.1,1.5,1.1h3.4c0.7,0,1.3-0.5,1.5-1.1l0.9-2.9l1.5-0.6l2.6,1.4c0.6,0.3,1.4,0.2,1.9-0.3l2.4-2.4c0.5-0.5,0.6-1.3,0.3-1.9l-1.4-2.6l0.6-1.5l2.9-0.9c0.6-0.2,1.1-0.8,1.1-1.5v-3.4C34,15.6,33.5,14.9,32.8,14.7z M32,19.4l-3.6,1.1L28.3,21c-0.3,0.7-0.6,1.4-0.9,2.1l-0.3,0.5l1.8,3.3l-2,2l-3.3-1.8l-0.5,0.3c-0.7,0.4-1.4,0.7-2.1,0.9l-0.5,0.1L19.4,32h-2.8l-1.1-3.6L15,28.3c-0.7-0.3-1.4-0.6-2.1-0.9l-0.5-0.3l-3.3,1.8l-2-2l1.8-3.3l-0.3-0.5c-0.4-0.7-0.7-1.4-0.9-2.1l-0.1-0.5L4,19.4v-2.8l3.4-1l0.2-0.5c0.2-0.8,0.5-1.5,0.9-2.2l0.3-0.5L7.1,9.1l2-2l3.2,1.8l0.5-0.3c0.7-0.4,1.4-0.7,2.2-0.9l0.5-0.2L16.6,4h2.8l1.1,3.5L21,7.7c0.7,0.2,1.4,0.5,2.1,0.9l0.5,0.3l3.3-1.8l2,2l-1.8,3.3l0.3,0.5c0.4,0.7,0.7,1.4,0.9,2.1l0.1,0.5l3.6,1.1V19.4z"></path>
                <rect x="0" y="0" width="30" height="30" fill-opacity="0"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Web Settings</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffffff" width="30" height="30" viewBox="0 0 512 512" xml:space="preserve"><path d="M378.182 81.455v-34.91h-60.601C309.965 19.712 285.242 0 256 0c-29.241 0-53.965 19.712-61.581 46.545h-60.601v34.909H64V512h384V81.455zm-209.455 0h58.182V64c0-16.041 13.05-29.091 29.091-29.091S285.091 47.959 285.091 64v17.455h58.182v34.909H168.727zm244.364 395.636H98.909V116.364h34.909v34.909h244.364v-34.909h34.909z"/><path d="M290.91 296.727h-17.456v-34.909h17.456c9.991 0 19.778 1.67 29.092 4.962l11.636-32.912c-13.062-4.617-26.764-6.959-40.728-6.959h-17.456v-29.091h-34.909v29.091h-17.453c-28.873 0-52.364 23.49-52.364 52.364s23.49 52.364 52.364 52.364h17.453v34.909h-17.453c-9.991 0-19.779-1.67-29.093-4.962l-11.635 32.912c13.061 4.617 26.764 6.959 40.728 6.959h17.453v29.091h34.909v-29.091h17.456c28.874 0 52.364-23.49 52.364-52.364s-23.489-52.364-52.364-52.364m-52.365 0h-17.453c-9.624 0-17.455-7.83-17.455-17.455s7.83-17.455 17.455-17.455h17.453zm52.365 69.818h-17.456v-34.909h17.456c9.624 0 17.455 7.83 17.455 17.455s-7.83 17.454-17.455 17.454"/></svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Budget Plan</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg fill="#ffffffff" width="30" height="30" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="m 1.4182824,10.682519 -0.002,0 0,-1.4924871 1.4924875,0 0,1.4924871 1.7814852,0 0,-2.3174801 2.3174806,0 0,2.3099801 C 9.4712151,10.672019 11.372699,8.2335399 10.433707,5.6420619 10.08471,4.6820699 9.3187164,3.9170759 8.3587244,3.5690789 5.7637461,2.6275869 3.3237665,4.5340709 3.3237665,7.0000499 l -2.3234806,0 c 0,-3.927967 3.7949683,-6.98794103 7.9119339,-5.702452 1.7999852,0.562495 3.2279732,1.990983 3.7899682,3.789968 C 13.987177,9.2050319 10.929203,13 7.0002357,13 l 0,-2.317481 -2.3114806,0 0,1.779985 -1.7799852,0 0,-1.779985 -1.4919875,0 0.001,0 z"/></svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Digitalize</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg width="30" height="30" fill="#ffffffff" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><path fill="none" data-name="invisible box" d="M0 0h48v48H0z"/><g data-name="Q3 icons"><path d="M45.6 18.7 41 14.9V7.5a1 1 0 0 0-.6-.9l-9.9-4.5h-.4l-.6.2L24 5.9l-5.5-3.7-.6-.2h-.4L7.6 6.6a1 1 0 0 0-.6.9v7.4l-4.6 3.8a.8.8 0 0 0-.4.8v9a.8.8 0 0 0 .4.8L7 33.1v7.4a1 1 0 0 0 .6.9l9.9 4.5h.4l.6-.2 5.5-3.6 5.5 3.7.6.2h.4l9.9-4.5a1 1 0 0 0 .6-.9v-7.5l4.6-3.8a.8.8 0 0 0 .4-.7v-9.2a.8.8 0 0 0-.4-.7m-5.1 6.8H42v1.6l-3.5 2.8-.4.3-.4-.2a1.4 1.4 0 0 0-2 .7 1.5 1.5 0 0 0 .6 2l.7.3v5.4l-6.6 3.1-4.2-2.8-.7-.5V25.5H27a1.5 1.5 0 0 0 0-3h-1.5V9.7l.7-.5 4.2-2.8L37 9.5v5.4l-.7.3a1.5 1.5 0 0 0-.6 2 1.4 1.4 0 0 0 1.3.9l.7-.2.4-.2.4.3 3.5 2.9v1.6h-1.5a1.5 1.5 0 0 0 0 3m-19.5 0h1.5v12.8l-.7.5-4.2 2.8-6.6-3.1v-5.4l.7-.3a1.5 1.5 0 0 0 .6-2 1.4 1.4 0 0 0-2-.7l-.4.2-.4-.3L6 27.1v-1.6h1.5a1.5 1.5 0 0 0 0-3H6v-1.6l3.5-2.8.4-.3.4.2.7.2a1.4 1.4 0 0 0 1.3-.9 1.5 1.5 0 0 0-.6-2L11 15V9.5l6.6-3.1 4.2 2.8.7.5v12.8H21a1.5 1.5 0 0 0 0 3"/><path d="M13.9 9.9a1.8 1.8 0 0 0 0 2.2l2.6 2.5v2.8l-4 4v5.2l4 4v2.8l-2.6 2.5a1.8 1.8 0 0 0 0 2.2 1.5 1.5 0 0 0 1.1.4 1.5 1.5 0 0 0 1.1-.4l3.4-3.5v-5.2l-4-4v-2.8l4-4v-5.2l-3.4-3.5a1.8 1.8 0 0 0-2.2 0m17.6 4.7 2.6-2.5a1.8 1.8 0 0 0 0-2.2 1.8 1.8 0 0 0-2.2 0l-3.4 3.5v5.2l4 4v2.8l-4 4v5.2l3.4 3.5a1.7 1.7 0 0 0 2.2 0 1.8 1.8 0 0 0 0-2.2l-2.6-2.5v-2.8l4-4v-5.2l-4-4Z"/></g></g></svg>
                <span className="flex-1 ms-3 whitespace-nowrap">AI & AR Assist</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffffff" viewBox="0 0 52 52" xml:space="preserve"><path d="m24 7-1.7-1.7c-.5-.5-1.2-.5-1.7 0L10 15.8l-4.3-4.2c-.5-.5-1.2-.5-1.7 0l-1.7 1.7c-.5.5-.5 1.2 0 1.7l5.9 5.9c.5.5 1.1.7 1.7.7s1.2-.2 1.7-.7L24 8.7c.4-.4.4-1.2 0-1.7m24.4 11.4H27.5c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h20.9c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6m0 14.3H22.7c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h25.7c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6m-35.4 0H9.8c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6H13c.9 0 1.6.7 1.6 1.6v3.2c.1.9-.7 1.6-1.6 1.6M13 47H9.8c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6H13c.9 0 1.6.7 1.6 1.6v3.2c.1.9-.7 1.6-1.6 1.6m35.4 0H22.7c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h25.7c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6"/></svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Task Manager</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffffff" viewBox="0 0 511.999 511.999" xml:space="preserve"><path d="M395.128 66.782H116.869c-9.22 0-16.695 7.475-16.695 16.695v200.346c0 9.22 7.475 16.695 16.695 16.695h278.258c9.22 0 16.695-7.475 16.695-16.695V83.478c.001-9.221-7.474-16.696-16.694-16.696M205.912 267.128h-72.347V100.173h72.347zm172.52 0H239.303v-66.782h139.129zm0-100.173H239.303v-66.782h139.129z"/><path d="M495.303 333.91h-16.695V33.391h16.693c9.22 0 16.695-7.475 16.695-16.696 0-9.22-7.475-16.695-16.695-16.695H16.696C7.476 0 .001 7.475.001 16.695s7.475 16.696 16.695 16.696h16.695V333.91H16.696c-9.22 0-16.695 7.475-16.695 16.695S7.476 367.3 16.696 367.3h222.607v82.574l-88.757 29.586c-8.747 2.916-13.475 12.371-10.559 21.119 2.919 8.756 12.38 13.472 21.119 10.559L256 479.507l94.894 31.631c8.745 2.914 18.201-1.81 21.119-10.559 2.916-8.747-1.812-18.203-10.559-21.119l-88.757-29.586V367.3h222.607c9.22 0 16.696-7.475 16.696-16.695-.001-9.22-7.477-16.695-16.697-16.695m-50.089 0H66.783V33.391h378.431z"/></svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Wedding Plan</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg width="30" height="30" fill="#ffffffff" viewBox="0 0 100 100" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><path d="M14.6 26.26c-.09 4.44-.19 9.48 2.77 15.9a17.36 17.36 0 0 0 15.89 10.59A1.79 1.79 0 0 0 35.11 51a1.82 1.82 0 0 0-1.79-1.85 13.66 13.66 0 0 1-12.64-8.47c-2.61-5.68-2.53-10.1-2.44-14.35.09-4.61.17-9-3.44-13.73C22.14 14 35.21 17.22 41.91 24a15.83 15.83 0 0 1 4.43 15.23 1.82 1.82 0 0 0 3.16 1.6 14 14 0 0 1 2.93-2.61c4.55-3.08 8.38-3.63 12.09-4.17 4-.57 7.74-1.12 11.28-4.67-.17 6.69-1.21 18.12-6 24.74a13.84 13.84 0 0 1-18.48 4.11 1.82 1.82 0 0 0-2 3.06 17.1 17.1 0 0 0 9 2.5 17.39 17.39 0 0 0 14.38-7.5c7.86-10.8 6.75-31.51 6.7-32.39a1.82 1.82 0 0 0-3.4-.81c-3.58 6.16-7.12 6.67-12 7.38-3.92.57-8.35 1.21-13.57 4.73a19.84 19.84 0 0 0-5.92-13.73C34 10.81 10.84 8.26 9.86 8.15A1.85 1.85 0 0 0 8 9.26a1.82 1.82 0 0 0 .52 2.11c6.27 5.18 6.19 9.25 6.08 14.89"/><path d="M37.92 90a1.82 1.82 0 1 0 3.64 0V70a17.73 17.73 0 0 1 8.2-15.38 26.6 26.6 0 0 1 8.54-3.77 1.82 1.82 0 0 0-.71-3.57c-.15 0-10.39 2.2-16 10.43v-1.35c0-13.35-10.12-23.61-10.55-24a1.82 1.82 0 0 0-2.57 2.57c.09.09 9.48 9.66 9.48 21.47Zm24.72-24.95a1.84 1.84 0 0 0-1.18 1.83 1.81 1.81 0 0 0 1.4 1.65c2.47.57 2.92 1.52 3.81 3.4a13.64 13.64 0 0 0 3.94 5.31 1.82 1.82 0 0 0 2.28-2.84 10.1 10.1 0 0 1-2.93-4 11 11 0 0 0-1.91-3.07c2.67-.58 5.89-.92 8.15-.15a4.91 4.91 0 0 1 3.37 5.55 1.83 1.83 0 0 0 .8 1.92 1.81 1.81 0 0 0 2.07-.08l.15-.12a7.5 7.5 0 0 1 3.52-1.2 11 11 0 0 0 2.23-.49A11.8 11.8 0 0 1 86.71 78a3.45 3.45 0 0 1-3.91 1.35 1.82 1.82 0 1 0-1.11 3.47 7.1 7.1 0 0 0 2.17.33 7 7 0 0 0 5.79-3c2.83-3.88 2.51-10.81 2.46-11.59a1.8 1.8 0 0 0-1.39-1.66 1.83 1.83 0 0 0-2 .85c-.9 1.55-1.55 1.64-3.13 1.87a15 15 0 0 0-2.47.52 8.57 8.57 0 0 0-5.74-6.44c-5.74-1.97-14.38 1.22-14.74 1.35"/><path d="M78 91.85A1.82 1.82 0 0 0 79.79 90V79c0-4.86-3.64-8.56-3.8-8.71a1.82 1.82 0 0 0-2.58 2.57s2.74 2.81 2.74 6.14v11A1.81 1.81 0 0 0 78 91.85"/></svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Eco Mode</span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                  <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z"/>
                </svg>
                <span className="ms-3">Upgrade to Pro</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"/>
                </svg>
                <span className="ms-3">Documentation</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 15C1 18.713 2.475 22.274 5.10051 24.8995C7.72601 27.525 11.287 29 15 29C18.713 29 22.274 27.525 24.8995 24.8995C27.525 22.274 29 18.713 29 15C29 11.287 27.525 7.72601 24.8995 5.10051C22.274 2.475 18.713 1 15 1C11.287 1 7.72601 2.475 5.10051 5.10051C2.475 7.72601 1 11.287 1 15Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M9 15C9 11.287 9.63214 7.72601 10.7574 5.10051C11.8826 2.475 13.4087 1 15 1C16.5913 1 18.1174 2.475 19.2426 5.10051C20.3679 7.72601 21 11.287 21 15C21 18.713 20.3679 22.274 19.2426 24.8995C18.1174 27.525 16.5913 29 15 29C13.4087 29 11.8826 27.525 10.7574 24.8995C9.63214 22.274 9 18.713 9 15Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M2 19.6666H28M2 10.3333H28" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <span className="ms-3">Components</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 21">
                  <path d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z"/>
                </svg>
                <span className="ms-3">Help</span>
              </a>
            </li>
          </ul>

          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            {/* Bottom links like Upgrade to Pro, Documentation, Help */}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {/* Top grid */}
          <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <div className="flexh-48 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Read more
                    <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                    >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                    </svg>
                </a>
                </div>
            </p>
          </div>

          {/* Middle sections */}
          <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <div className="flexh-48 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Read more
                    <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                    >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                    </svg>
                </a>
                </div>
            </p>
          </div>

          

          {/* Grid 2x2 and 2x4 sections */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className={`grid ${i === 0 ? "grid-cols-2" : "grid-cols-4"} gap-4 mb-4`}>
              {[...Array(i === 0 ? 2 : 4)].map((_, j) => (
                <div
                  key={j}
                  className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800"
                >
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </p>
                </div>
              ))}
            </div>

            
          ))}

          {/* Bottom full section */}
          <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

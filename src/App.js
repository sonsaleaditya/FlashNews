import React, { Component, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
// import News from "./components/News";
import AboutUs from "./components/AboutUs";
import LoadingBar from "react-top-loading-bar";
import { Practice } from "./components/Practice";

const App = (props) => {
  // const pageSize = 15;
  const [progress, setProgress] = useState(0);

  // const apiKey = process.env.REACT_APP_NEWS_API;

  // constructor(props) {
  //   super(props);
  //   state = {
  //     progress: 0
  //   };
  // }

  // setProgress = (progress) => {
  //   setState({ progress });
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Navbar />
          <Practice
            setProgress={setProgress}
            key={"sports"}
            pageSize={6}
            countryCode={"in"}
            category={"general"}
          ></Practice>
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Navbar />
          <Practice
            setProgress={setProgress}
            key={"sports"}
            pageSize={6}
            countryCode={"in"}
            category={"general"}
          ></Practice>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Navbar />
          <AboutUs />
        </>
      ),
    },
    {
      path: "/business",
      element: (
        <>
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Navbar />
          <Practice
            setProgress={setProgress}
            key={"sports"}
            pageSize={6}
            countryCode={"in"}
            category={"business"}
          ></Practice>
        </>
      ),
    },

    {
      path: "/entertainment",
      element: (
        <>
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Navbar />
          <Practice
            setProgress={setProgress}
            key={"sports"}
            pageSize={6}
            countryCode={"in"}
            category={"entertainment"}
          ></Practice>
        </>
      ),
    },

    {
      path: "/general",
      element: (
        <>
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Navbar />
          <Practice
            setProgress={setProgress}
            key={"sports"}
            pageSize={6}
            countryCode={"in"}
            category={"general"}
          ></Practice>
        </>
      ),
    },

    {
      path: "/health",
      element: (
        <>
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Navbar />
          <Practice
            setProgress={setProgress}
            key={"sports"}
            pageSize={6}
            countryCode={"in"}
            category={"health"}
          ></Practice>
        </>
      ),
    },

    {
      path: "/science",
      element: (
        <>
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Navbar />
          <Practice
            setProgress={setProgress}
            key={"sports"}
            pageSize={6}
            countryCode={"in"}
            category={"science"}
          ></Practice>
        </>
      ),
    },

    {
      path: "/sports",
      element: (
        <>
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Navbar />
          <Practice
            setProgress={setProgress}
            key={"sports"}
            pageSize={6}
            countryCode={"in"}
            category={"sports"}
          ></Practice>
        </>
      ),
    },

    {
      path: "/technology",
      element: (
        <>
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Navbar />
          <Practice
            setProgress={setProgress}
            key={"sports"}
            pageSize={6}
            countryCode={"in"}
            category={"technology"}
          ></Practice>
        </>
      ),
    },
    {
      path: "/check",
      element: (
        <>
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Navbar />
          <Practice
            setProgress={setProgress}
            key={"sports"}
            pageSize={6}
            countryCode={"in"}
            category={"technology"}
          ></Practice>
        </>
      ),
    },
  ]);

  return (
    <RouterProvider router={router}>
      <div>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        {/* Render the RouterProvider with the defined router */}
        <RouterProvider router={router} />
      </div>
    </RouterProvider>
  );
};

export default App;

// News props looks like this
{
  /* <News
            apiKey={apiKey}
            setProgress={setProgress}
            key="general"
            pageSize={6}
            countryCode={"in"}
            category="general"
          /> */
}

import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const showProgress = (progress) => {
    setProgress(progress);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} height={3} />
          <News
            key="general"
            pageSize={pageSize}
            country="us"
            category="general"
            apiKey={apiKey}
            showProgress={showProgress}
          />
        </>
      ),
    },
    {
      path: "/business",
      element: (
        <>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />
          <News
            key="business"
            pageSize={pageSize}
            country="us"
            category="business"
            apiKey={apiKey}
            showProgress={showProgress}
          />
        </>
      ),
    },
    {
      path: "/entertainment",
      element: (
        <>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />
          <News
            key="entertainment"
            pageSize={pageSize}
            country="us"
            category="entertainment"
            apiKey={apiKey}
            showProgress={showProgress}
          />
        </>
      ),
    },
    {
      path: "/sports",
      element: (
        <>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />
          <News
            key="sports"
            pageSize={pageSize}
            country="us"
            category="sports"
            apiKey={apiKey}
            showProgress={showProgress}
          />
        </>
      ),
    },
    {
      path: "/health",
      element: (
        <>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />
          <News
            key="health"
            pageSize={pageSize}
            country="us"
            category="health"
            apiKey={apiKey}
            showProgress={showProgress}
          />
        </>
      ),
    },
    {
      path: "/science",
      element: (
        <>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />
          <News
            key="science"
            pageSize={pageSize}
            country="us"
            category="science"
            apiKey={apiKey}
            showProgress={showProgress}
          />
        </>
      ),
    },
    {
      path: "/technology",
      element: (
        <>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />
          <News
            key="technology"
            pageSize={pageSize}
            country="us"
            category="technology"
            apiKey={apiKey}
            showProgress={showProgress}
          />
        </>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navbar } from "./components/navbar/Navbar";
import { useState } from "react";
import { DarkmodeButton } from "./components/darkmodeButton/DarkmodeButton";
import { SearchBar } from "./components/searchbar/SearchBar";

function App() {
  const [darkmode, setDarkmode] = useState<boolean>(false);
  const darkModeHandler = () => {
    setDarkmode(!darkmode);
    document.body.classList.toggle("dark");
    localStorage.setItem("mode", !darkmode ? "dark" : "light");
  };
  const Layout = () => {
    return (
      <div className="main w-full h-screen grid grid-rows-12 bg-neutral-100 dark:bg-neutral-900 font-main">
        <div className="nav w-full row-span-1">
          <Navbar />
        </div>
        <div className=" row-span-10">
          <Outlet />
        </div>
        <div className="footer row-span-1"></div>
        <div className="fixed bottom-5 right-5">
          <DarkmodeButton darkmode={darkmode} setDarkMode={darkModeHandler} />
        </div>
        <Toaster position="bottom-right" />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <SearchBar />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

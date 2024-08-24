import React, { useEffect, useState } from "react";
import UserContextProvider from "../Components/Project05/UserContextProvider";
import Login from "../Components/Project05/Login";
import Profile from "../Components/Project05/Profile";
import { ThemeProvider } from "../Components/Project05/Theme";
import ThemeBtn from "../Components/Project05/ThemeBtn";
import Card from "../Components/Project05/Card";

const Project05 = () => {
  {
    /* Project05 part A */
  }

  //   return (
  //     <div>
  //       <p className="text-center">Project05 part A</p>

  //       {/* <UserContextProvider>
  //         <h1 className="text-center text-xl">
  //           React with Chai and Kalp is the best
  //         </h1>
  //         <Login />
  //         <Profile />
  //       </UserContextProvider> */}

  //       {/* Project05 part B */}

  //     </div>
  //   );

  {
    /* Project05 part B */
  }

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  //   actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    console.log("first");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <div>
      <p className="text-center">Project05 part B</p>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Project05;

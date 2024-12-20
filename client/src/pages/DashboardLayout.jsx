import { Outlet } from "react-router-dom";
// import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import { createContext, useContext, useState } from "react";


const DashboardContext = createContext()

const DashboardLayout = () => {
  const user = {name: 'John'}
  const[showSidebar, setShowSidebar] = useState(false)
  const[isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleDarkTheme = () => {
    console.log('Toggled dark theme'); 
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log('User logged out'); 
  };

  return (
    <DashboardContext.Provider value={{user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logoutUser}}>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashbaord-page">
            <Outlet />
          </div>
        </div>
      </main>
    </DashboardContext.Provider>
  )
}

export const useDashbaordContext = () => useContext(DashboardContext);
export default DashboardLayout
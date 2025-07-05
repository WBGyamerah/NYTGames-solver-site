import React, { useState } from "react";
import Header from "../components/header/Header.js";
import Sidebar from "../components/sidebar/Sidebar.js";

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(prev => !prev);

    return (
        <>
            <Header onMenuClick={toggleSidebar}/>
            <Sidebar isOpen={sidebarOpen}/>
            <main style={{ marginTop: '56px' }}>
                {children}
            </main>
        </>
  );
};

export default Layout;
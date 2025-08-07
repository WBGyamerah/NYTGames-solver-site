import React, { useState } from "react";
import Header from "../components/header/Header.js";
import Sidebar from "../components/sidebar/Sidebar.js";

const Layout = ({ children, onToggleTheme }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(prev => !prev);

    return (
        <>
            <Header onMenuClick={toggleSidebar} onToggleTheme={onToggleTheme}/>
            <Sidebar isOpen={sidebarOpen}/>
            <main style={{ marginTop: '56px' }}>
                {children}
            </main>
        </>
  );
};

export default Layout;
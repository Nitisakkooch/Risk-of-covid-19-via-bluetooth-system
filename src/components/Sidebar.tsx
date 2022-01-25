import React, { createContext, FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai"
import { useState } from "react";
import * as colors from "../assets/colors.json";

const SidebarNav = styled.div`
    border-radius: 0;
    display: flex;
    flex-direction: column;
    width: 256px;
    height: 1195px;
    overflow-x: hidden;
    @media (max-width: 768px) {
    width: 0px;
    transition: width 0.2s;
    &.active {
      width: 256px;
      transition: width 0.2s;
    }
  }
    background-color: #000000;
    @media (max-width: 425px) {
    &.active {
      width: 100vw;
    }
  }
`;

const NavIcon = styled(Link)`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 2rem;
`;

const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <SidebarNav>
                    <NavIcon to={"/overview"}>
                        <AiFillHome />
                    </NavIcon>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;
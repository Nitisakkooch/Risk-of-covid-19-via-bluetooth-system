
import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai"
import { RiVirusLine } from "react-icons/ri"
import { BsCardChecklist } from "react-icons/bs"
import { useState } from "react";

const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 4rem;
    background-color: #E5E5E5;
`;

const SidebarNav = styled.div`
    display: flex;
    justify-content: center;
    height: 730px;
    width: 22vh;
    background-color: #02061D;
`;
const BarIcon = styled.div`
    margin-top: auto;
    align-items: center;
    font-size: 2rem;
    color: #418FDE;
    font-size: 3rem;
`;
const NavIcon = styled(Link)`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 2rem;
`;
const SidebarWrap = styled.div`

`;
const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "#418FDE" }}>
                <Nav>
                    <BarIcon >
                        <RiVirusLine />
                    </BarIcon>
                    System for tracking people at risk of Covid-19
                </Nav>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#fff" }}>
                <SidebarNav>
                    <div>
                        <NavIcon to="#" >
                            <AiFillHome />
                        </NavIcon>
                    </div>
                    <div>
                        {/* <NavIcon to="#" >
                            <BsCardChecklist />
                        </NavIcon> */}
                    </div>

                </SidebarNav>
            </IconContext.Provider>

        </>
    );
};

export default Sidebar;
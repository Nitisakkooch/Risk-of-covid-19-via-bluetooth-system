import React, { FC } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router
} from "react-router-dom";
import styled from 'styled-components';
import ComponentTable from './pages/ComponentTable';
import { RiVirusLine } from 'react-icons/ri';


const Order = styled.div`
    display: flex;
    justify-content: space-between
    width: 1000vw;
    height: 80vh;
`;
const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 4rem;
    background-color: #E5E5E5;
`;
const BarIcon = styled.div`
    margin-top: auto;
    align-items: center;
    font-size: 2rem;
    color: #418FDE;
    font-size: 3rem;
`;
const App: FC = () => {
  
  return (
    <>
      <Nav>
        <BarIcon >
          <RiVirusLine />
        </BarIcon>
        System for tracking people at risk of Covid-19 at KKU
      </Nav>
      <Order>
        <BrowserRouter>
          <Sidebar/>
        </BrowserRouter>
        <BrowserRouter>
          <Routes >
            <Route path="/overview" element={<ComponentTable />} />
          </Routes>
        </BrowserRouter>
      </Order>
    </>
  );
}

export default App;

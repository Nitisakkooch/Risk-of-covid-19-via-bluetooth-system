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
import Overview from './pages/Overview';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;

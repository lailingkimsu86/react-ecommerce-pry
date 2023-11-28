// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import EmployeeList from './pages/employee/Employee.list';

function App() {
    return (
      <div className="container">
        <nav>
          <ul>
            <Link to="/employee-list" class="list">
              Contact
            </Link>
          </ul>
        </nav>
  
        {/* Defining routes path and rendering components as element */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/course" element={<Courses />} /> */}
          {/* <Route path="/live" element={<Live />} /> */}
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </div>
    );
}

export default App;

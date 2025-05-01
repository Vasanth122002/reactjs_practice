import React, { useEffect, useState } from "react";
import { API } from "./api";
import JobCard from "./components/JobCard";
import FilterForm from "./components/FilterForm";
import JobFormModal from "./components/JobFormModal";
import "./App.css";
import logo from "./assets/cmwlogo.png"; // Adjust path based on location

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ salary: 0 });
  const [showModal, setShowModal] = useState(false);

  const fetchJobs = async () => {
    const res = await API.get("/jobs", { params: filters });
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  return (
    <div>
      <div className="navbardiv">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>

          <ul className="navbar-menu">
            <li>Home</li>
            <li>Find Jobs</li>
            <li>Find Talents</li>
            <li>About Us</li>
            <li>Testimonials</li>
          </ul>
          <button className="create-button" onClick={() => setShowModal(true)}>
            Create Job
          </button>
        </nav>
      </div>

      <FilterForm
        filters={filters}
        onChange={(e) =>
          setFilters({ ...filters, [e.target.name]: e.target.value })
        }
      />
      <div className="job-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      {showModal && (
        <JobFormModal
          onClose={() => setShowModal(false)}
          onCreate={fetchJobs}
        />
      )}
    </div>
  );
};

export default App;

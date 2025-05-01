import React from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import "./FilterForm.css";
const FilterForm = ({ filters, onChange }) => (
  <form className="filter-form">
    {/* Job Title Search */}

    <div className="input-group">
      <FaSearch className="icon" />
      <input
        type="text"
        name="title"
        placeholder="Search Job Title"
        onChange={onChange}
      />
    </div>

    {/* Location Select */}
    <div className="input-group">
      <FaMapMarkerAlt className="icon" />
      <select name="location" onChange={onChange}>
        <option value="">All Locations</option>
        <option value="Chennai">Chennai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hydrabad">Hydrabad</option>
        <option value="Delhi">Delhi</option>
      </select>
      <IoMdArrowDropdown className="dropdown-icon" />
    </div>

    {/* Job Type Select */}
    <div className="input-group">
      <MdWork className="icon" />
      <select name="jobType" onChange={onChange}>
        <option value="">All Types</option>
        <option value="Fulltime">Full-time</option>
        <option value="Parttime">Part-time</option>
        <option value="Internship">Internship</option>
        <option value="Contract">Contract</option>
      </select>
      <IoMdArrowDropdown className="dropdown-icon" />
    </div>

    {/* Salary Range */}
    <div className="input-group">
      <label htmlFor="salary">Salary per month: ₹{filters.salary}</label>
      <input
        type="range"
        name="salary"
        id="salary"
        min="0"
        max="200000"
        step="100"
        onChange={onChange}
      />
    </div>
  </form>
);

export default FilterForm;

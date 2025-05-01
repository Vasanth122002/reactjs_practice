import React from "react";
import {
  MdWork,
  MdAccessTime,
  MdLocationOn,
  MdAttachMoney,
} from "react-icons/md";
import "./JobCard.css";

const JobCard = ({ job }) => (
  <div className="card">
    {/* Top row: logo and hoursAgo */}
    <div className="card-header">
      <div className="title">
        <div className="imagediv">
          <img src={job.company_logo} alt="Logo" className="company-logo" />
        </div>
        <div className="time">
          <span className="hours-ago">
            <MdAccessTime /> {job.hoursAgo}h Ago
          </span>
        </div>
      </div>
    </div>

    {/* Job Title */}
    <h3 className="job-title">{job.job_title}</h3>

    {/* Info Row: Experience, Job Type, Salary */}
    <div className="job-info-row">
      <div className="job-info-item">
        <MdWork /> {job.experience} yrs.
      </div>
      <div className="job-info-item">{job.job_type}.</div>
      <div>
        Salary
        <MdAttachMoney />
        {job.salary}.
      </div>
      <div className="job-info-item">{job.location}.</div>
    </div>

    {/* Job Description */}
    <p className="job-description">{job.description}</p>

    {/* Apply Button */}
    <button className="apply-button">Apply Now</button>
  </div>
);

export default JobCard;

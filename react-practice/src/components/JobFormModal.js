import React, { useState, useRef, useEffect } from "react";
import { API } from "../api";
import "./JobFormModal.css";

const JobFormModal = ({ onClose, onCreate }) => {
  const [form, setForm] = useState({});
  const modalRef = useRef(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/jobs", form);
    onCreate();
    onClose();
  };

  const handleSaveDraft = () => {
    console.log("Draft saved", form);
    onClose();
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal-box" ref={modalRef}>
        <h2 className="modal-title">Create Job Opening</h2>
        <form onSubmit={handleSubmit} className="job-form">
          <div className="row">
            <div>
              <div>
                <label className="label">Job Title</label>
              </div>

              <input
                name="job_title"
                placeholder="Job Title"
                onChange={handleChange}
                className="input-field full"
                required
              />
            </div>
            <div>
              <div>
                <label className="label">Company Logo</label>
              </div>

              <input
                name="company_logo"
                placeholder="Logo URL"
                onChange={handleChange}
                className="input-field full"
                required
              />
            </div>
          </div>

          <div className="row">
            <div>
              <div>
                <label className="label">Location</label>
              </div>

              <input
                name="location"
                placeholder="Location"
                onChange={handleChange}
                className="input-field full"
                required
              />
            </div>

            <div>
              <div>
                <label className="label">Job Type</label>
              </div>

              <select
                name="job_type"
                onChange={handleChange}
                className="input-field full"
                required
              >
                <option value="">Select Job Type</option>
                <option value="Fulltime">Full-time</option>
                <option value="Parttime">Part-time</option>
                <option value="InternShip">Internship</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
          </div>

          <div>
            <div className="row">
              <div>
                <label className="label">Salary</label>
                <input
                  name="salary"
                  placeholder="Salary"
                  type="number"
                  onChange={handleChange}
                  className="input-field full"
                  required
                />
              </div>

              <div>
                <label className="label">Salary</label>
                <input
                  name="experience"
                  placeholder="Experience Range Ex 2-5"
                  type="text"
                  onChange={handleChange}
                  className="input-field full"
                  required
                />
              </div>
            </div>
          </div>
          <div className="salary">
            <div>
              <label className="label">Job Description</label>
              <textarea
                name="description"
                placeholder="Job Description"
                onChange={handleChange}
                rows="4"
                className="textarea-field"
                required
              />
            </div>
          </div>

          <div className="button-row">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleSaveDraft}
            >
              💾 Save Draft
            </button>
            <button type="submit" className="btn btn-primary">
              ➕ Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobFormModal;

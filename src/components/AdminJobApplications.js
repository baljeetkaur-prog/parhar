import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminJobApplications.css";

const AdminJobApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const API = process.env.REACT_APP_APIURL;
  const rowsPerPage = 10;

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get(
        `${API}/api/admin/jobs/applications`
      );
      setApplications(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentRows = applications.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(applications.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="admin-jobapps">
      <h2>Job Applications</h2>

      {loading ? (
        <p>Loading...</p>
      ) : applications.length === 0 ? (
        <p>No job applications found.</p>
      ) : (
        <>
          <div className="admin-jobtable-wrapper">
            <table className="admin-jobtable">
              <thead>
                <tr>
                  <th>Application No.</th>
                  <th>Designation</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Experience</th>
                  <th>City</th>
                  <th>CV</th>
                  <th>Submitted At</th>
                </tr>
              </thead>

              <tbody>
                {currentRows.map((app) => (
                  <tr key={app._id}>
                    <td>
                      <strong>{app.applicationNumber}</strong>
                    </td>

                    <td>{app.designation}</td>

                    <td>{app.name}</td>
                    <td>{app.email}</td>
                    <td>{app.phone}</td>

                    <td>{app.experience}</td>
                    <td>{app.city}</td>

                    <td>
                      <a
                        href={app.cvLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View CV
                      </a>
                    </td>

                    <td>
                      {new Date(app.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="adminenqpag">
              <button
                className="adminenqpag-arrow"
                onClick={() =>
                  handlePageChange(
                    currentPage > 1 ? currentPage - 1 : 1
                  )
                }
                disabled={currentPage === 1}
              >
                ‹ Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`adminenqpag-btn ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button
                className="adminenqpag-arrow"
                onClick={() =>
                  handlePageChange(
                    currentPage < totalPages
                      ? currentPage + 1
                      : totalPages
                  )
                }
                disabled={currentPage === totalPages}
              >
                Next ›
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminJobApplications;

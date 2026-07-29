import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminJobApplications.css"; // same styles as job applications

const AdminJobTracking = () => {
  const [trackings, setTrackings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const API = process.env.REACT_APP_APIURL;
  const rowsPerPage = 10;

  useEffect(() => {
    fetchTrackings();
  }, []);

  const fetchTrackings = async () => {
    try {
      const res = await axios.get(`${API}/api/admin/jobs/tracking`);
      setTrackings(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentRows = trackings.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(trackings.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="admin-jobapps">
      <h2>Application Tracking Requests</h2>

      {loading ? (
        <p>Loading...</p>
      ) : trackings.length === 0 ? (
        <p>No tracking requests found.</p>
      ) : (
        <>
          <div className="admin-jobtable-wrapper">
            <table className="admin-jobtable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Applied For</th>
                  <th>Submitted At</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((req) => (
                  <tr key={req._id}>
                    <td>{req.name}</td>
                    <td>{req.email}</td>
                    <td>{req.phone}</td>
                    <td>{req.appliedFor}</td>
                    <td>{new Date(req.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="adminenqpag">
              <button
                className="adminenqpag-arrow"
                onClick={() =>
                  handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
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
                    currentPage < totalPages ? currentPage + 1 : totalPages
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

export default AdminJobTracking;

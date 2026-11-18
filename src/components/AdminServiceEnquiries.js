import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminAppointments.css"; // reuse same styling for table + pagination

const API = process.env.REACT_APP_APIURL || "http://localhost:9000";

const AdminServiceEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const fetchEnquiries = async () => {
    try {
      const res = await axios.get(`${API}/api/service-enquiry`);
      setEnquiries(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentRows = enquiries.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(enquiries.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="admin-appointments">
      <h2>Service Enquiries</h2>

      {loading ? (
        <p>Loading...</p>
      ) : enquiries.length === 0 ? (
        <p>No enquiries found.</p>
      ) : (
        <>
          <div className="admin-apptable-wrapper">
            <table className="admin-apptable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Submitted At</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((enq) => (
                  <tr key={enq._id}>
                    <td>{enq.name}</td>
                    <td>{enq.email}</td>
                    <td>{enq.phone}</td>
                   <td>{enq.serviceName || enq.formType || "-"}</td>
                    <td>{new Date(enq.createdAt).toLocaleString()}</td>
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

export default AdminServiceEnquiries;

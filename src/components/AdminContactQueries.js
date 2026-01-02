import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminAppointments.css"; // reuse same styling for table + pagination

const API = process.env.REACT_APP_APIURL || "http://localhost:9000";

const AdminContactQueries = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${API}/api/contact`);
      setMessages(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentRows = messages.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(messages.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="admin-appointments">
      <h2>Contact Queries</h2>

      {loading ? (
        <p>Loading...</p>
      ) : messages.length === 0 ? (
        <p>No contact queries found.</p>
      ) : (
        <>
          <div className="admin-apptable-wrapper">
            <table className="admin-apptable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Received At</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((msg) => (
                  <tr key={msg._id}>
                    <td>{msg.name}</td>
                    <td>{msg.email}</td>
                    <td>{msg.phone}</td>
                    <td>{msg.subject}</td>
                    <td>{msg.message}</td>
                    <td>{new Date(msg.createdAt).toLocaleString()}</td>
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

export default AdminContactQueries;

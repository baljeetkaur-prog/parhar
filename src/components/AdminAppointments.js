import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminAppointments.css";

const AdminAppointments = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const API = process.env.REACT_APP_APIURL;

  const rowsPerPage = 10;

  useEffect(() => {
    fetchQueries();
  }, []);
  

  const fetchQueries = async () => {
    try {
      const res = await axios.get(`${API}/api/admin/appointments`);
      setQueries(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentRows = queries.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(queries.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="admin-appointments">
      <h2>Appointment Queries</h2>

      {loading ? (
        <p>Loading...</p>
      ) : queries.length === 0 ? (
        <p>No appointment queries found.</p>
      ) : (
        <>
          <div className="admin-apptable-wrapper">
            <table className="admin-apptable">
          <thead>
  <tr>
    <th>Full Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Category</th>
    <th>Service</th>
    <th>City</th>
    <th>Appointment Date</th>   {/* NEW */}
    <th>Appointment Time</th>   {/* NEW */}
    <th>Message</th>
    <th>Submitted At</th>
  </tr>
</thead>

        <tbody>
  {currentRows.map((q) => (
    <tr key={q._id}>
      <td>{q.fullName}</td>
      <td>{q.email}</td>
      <td>{q.phone}</td>

      <td style={{ textTransform: "capitalize" }}>
        {q.category || "—"}
      </td>

      <td>{q.service}</td>
      <td>{q.city}</td>

      {/* Appointment Date */}
      <td>
        {q.appointmentDate
          ? new Date(q.appointmentDate).toLocaleDateString()
          : "—"}
      </td>

      {/* Appointment Time */}
      <td>
        {q.appointmentTime || "—"}
      </td>

      <td>{q.message}</td>

      {/* Submission Date */}
      <td>{new Date(q.createdAt).toLocaleString()}</td>
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

export default AdminAppointments;

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Siteroutes from "./components/Siteroutes";
import ScrollToTop from "./components/ScrollToTop"; // your button
import ScrollToTopOnNavigation from "./components/ScrollToTopOnNavigation";

function App() {
  return (
    <>
      <ScrollToTopOnNavigation/>
      <Siteroutes />
      <ScrollToTop /> {/* Visible button when scrolling */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}

export default App;

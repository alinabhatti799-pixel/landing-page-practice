// App.jsx
import React, { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleClick = () => {
    setSubmitted(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "Arial",
        backgroundColor: "#f0f8ff", // light blue background
        color: "#333", // dark text color
        textAlign: "center",
        padding: "20px",
      }}
    >
      {!submitted ? (
        <>
          <h1 style={{ color: "#2c3e50" }}>Welcome to Our Snack Trial!</h1>
          <p style={{ color: "#34495e" }}>
            Click the button below to get your free sample.
          </p>
          <button
            onClick={handleClick}
            style={{
              padding: "12px 25px",
              marginTop: "20px",
              cursor: "pointer",
              backgroundColor: "#27ae60", // green button
              color: "#fff", // white text
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            Get Sample
          </button>
        </>
      ) : (
        <h2 style={{ color: "#16a085" }}>
          Thank you so much! Your request has been submitted. This is the best
          page.
        </h2>
      )}
    </div>
  );
}

export default App;

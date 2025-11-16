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
      }}
    >
      {!submitted ? (
        <>
          <h1>Welcome to Our Snack Trial!</h1>
          <p>Click the button below to get your free sample.</p>
          <button
            onClick={handleClick}
            style={{
              padding: "10px 20px",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            Get Sample
          </button>
        </>
      ) : (
        <h2>Thank you! Your rettquest has been submitted this is best page.</h2>
      )}
    </div>
  );
}

export default App;

import React from "react";
import Button from "@mui/material/Button";

function Hero() {
  return (
    <div className="container">
      <div className="row align-items-center" style={{ minHeight: "85vh" }}>
        <div className="col-md-6 text-center">
          <img
            src="./media/1.png"
            width={"80%"}
            alt="Mental Health Illustration"
          />
        </div>
        <div className="col-md-6 text-center">
          <div className="p-4 m-4">
            <h1>YOUR MENTAL</h1>
            <h1>HEALTH MATTERS</h1>
            <div className="d-flex justify-content-center mt-3">
              <Button
                variant="text"
                size="large"
                className="mx-4"
                href="/quiz"
                style={{
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  cursor: "pointer",
                  color: "#9370DB",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.zIndex = "10";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.zIndex = "1";
                }}
              >
                Take a quiz
              </Button>

              <Button
                variant="text"
                size="large"
                className="mx-4"
                href="/quiz"
                style={{
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  cursor: "pointer",
                  color: "#9370DB",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.zIndex = "10";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.zIndex = "1";
                }}
              >
                Know more
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-muted text-center fs-4"
        style={{ marginTop: "-40px", paddingBottom: "20px" }}
      >
        <span>
          Your mental health is a priority. Your happiness is essential. Your
          self-care is a necessity.
        </span>
      </div>
    </div>
  );
}

export default Hero;

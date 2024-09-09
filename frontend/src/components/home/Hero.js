import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "10px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          minWidth: "150px",
          backgroundColor: "#f7f9fc",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          color: "#4a4a4a",
          '&:hover': {
            backgroundColor: "#9370DB",
            color: "#fff",
          },
        },
      },
    },
  },
});

function Hero() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: "75vh" }}>
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
                <div>
                  <Button
                    variant="text"
                    size="large"
                    className="mx-4"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    style={{
                      transition:
                        "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                      cursor: "pointer",
                      color: "#9370DB",
                      display: "flex",
                      alignItems: "center",
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
                    <ArrowDropDownIcon style={{ marginLeft: "5px" }} /> 
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} component="a" href="/anxietyquiz">
                      Anxiety Quiz
                    </MenuItem>
                    <MenuItem onClick={handleClose} component="a" href="/stressquiz">
                      Stress Quiz
                    </MenuItem>
                    <MenuItem onClick={handleClose} component="a" href="/depressionquiz">
                     Depression Quiz
                    </MenuItem>
                  </Menu>
                </div>

                <Button
                  variant="text"
                  size="large"
                  className="mx-4"
                  href="/blog"
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
          className="text-muted text-center fs-5"
          style={{ marginTop: "0px", paddingBottom: "0px" }}
        >
          <span>
            Your mental health is a priority. Your happiness is essential. Your
            self-care is a necessity.
          </span>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Hero;

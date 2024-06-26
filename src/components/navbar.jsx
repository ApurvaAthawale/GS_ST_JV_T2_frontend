import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import CoursesPage from "./SeeCoursesPage";
// import ContactUs from "./ContactUs";
// import AdmissionPage from "./admision";
// import HomePage from "./MainHome";
// import AboutUs from "./aboutus";
// import FeedbackPage from "./feedback";
// import LoginPage from "./loginpage";
// import SignUpPage from "./signup";
import Error from "./Error";
import GrievanceForm from "./GrivenceForm";
import LoginPage from "./loginpage";
import home from "./home";
import AboutUs from "./aboutus";
// import ContactComponent from "./contact";
// import NewsComponent from "./news"
// import LoginForm from "./loginpage";
// import Footer from "./footer";
// import AdminLoginPage from "./LoginAdmin";
// import AdminPage from "./adminpage";

function Navbar() {
  return (
    <>
      <Router>
        <div className="container" style={{ backgroundColor: "#FBF6EE" }}>
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#5375e2" }}
          >
            <div className="container-fluid">
              <Link className="navbar-brand text-white" to="/home">
                Home Page
              </Link>{" "}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/Grivance"
                    >
                      GrievanceForm
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/aboutus"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/contactus"
                    >
                      Contact Us 
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="" Component={home}></Route>
            <Route path="home" Component={home}></Route>
            {/* <Route path="courses" Component={CoursesPage}></Route> */}
            <Route path="Grivance" Component={GrievanceForm}></Route>
            {/* <Route path="signup" Component={SignUpPage}></Route> */}
            <Route path="login" Component={LoginPage}></Route>
            {/* <Route path="contactus" Component={ContactComponent}></Route> */}
            {/* <Route path="feedback" Component={FeedbackPage}></Route> */}
            {/* <Route path="adminlogin" Component={AdminLoginPage}></Route> */}
            {/* <Route path="admin" Component={AdminPage}></Route> */}
            <Route path="aboutus" Component={AboutUs}></Route>
            <Route path="*" Component={Error}></Route>
          </Routes>
        </div>

        {/* <footer>
        <Footer />
      </footer> */}
      </Router>
    </>
  );
}

export default Navbar;

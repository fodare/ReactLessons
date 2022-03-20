import React from "react";

function NavBar() {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
         <div className="container-fluid">
            <li className="nav-item">
               <a className="nav-link name_logo " aria-current="page" href="/">
                  Damilare F
               </a>
            </li>

            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNav"
               aria-controls="navbarNav"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div
               className="collapse navbar-collapse justify-content-center "
               id="navbarNav"
            >
               <ul className="navbar-nav ">
                  <li className="nav-item">
                     <a className="nav-link " aria-current="page" href="/">
                        Home
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="/projects">
                        Projects
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="/contact">
                        Contact
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="/about">
                        about
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default NavBar;

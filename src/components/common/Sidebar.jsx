import React from 'react'

export default function Sidebar() {
  return (
    <div>
       <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  {/* Sidebar Start */}
  <aside className="left-sidebar">
    {/* Sidebar scroll*/}
    <div>
      <div className="brand-logo d-flex align-items-center justify-content-between">
        <a href="./index.html" className="text-nowrap logo-img">
          <img src="../assets/images/logos/dark-logo.svg" width={180} alt />
        </a>
        <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
          <i className="ti ti-x fs-8" />
        </div>
      </div>
      {/* Sidebar navigation*/}
      <nav className="sidebar-nav scroll-sidebar" data-simplebar>
        <ul id="sidebarnav">
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">Home</span>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="./index.html" aria-expanded="false">
              <span>
                <i className="ti ti-layout-dashboard" />
              </span>
              <span className="hide-menu">Dashboard</span>
            </a>
          </li>
          {/* <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">UI COMPONENTS</span>
          </li> */}
          {/* <li className="sidebar-item">
            <a className="sidebar-link" href="./ui-buttons.html" aria-expanded="false">
              <span>
                <i className="ti ti-article" />
              </span>
              <span className="hide-menu">Buttons</span>
            </a>
          </li> */}
          {/* <li className="sidebar-item">
            <a className="sidebar-link" href="./ui-alerts.html" aria-expanded="false">
              <span>
                <i className="ti ti-alert-circle" />
              </span>
              <span className="hide-menu">Alerts</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="./ui-card.html" aria-expanded="false">
              <span>
                <i className="ti ti-cards" />
              </span>
              <span className="hide-menu">Card</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="./ui-forms.html" aria-expanded="false">
              <span>
                <i className="ti ti-file-description" />
              </span>
              <span className="hide-menu">Forms</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="./ui-typography.html" aria-expanded="false">
              <span>
                <i className="ti ti-typography" />
              </span>
              <span className="hide-menu">Typography</span>
            </a>
          </li> */}
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">Pages</span>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="/login" aria-expanded="false">
              <span>
                <i className="ti ti-login" />
              </span>
              <span className="hide-menu">Login</span>
            </a>
            <a className="sidebar-link" href="/blogs" aria-expanded="false">
              <span>
                <i className="ti ti-login" />
              </span>
              <span className="hide-menu">blogs</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="./register" aria-expanded="false">
              <span>
                <i className="ti ti-user-plus" />
              </span>
              <span className="hide-menu">Register</span>
            </a>
            <a className="sidebar-link" href="./address" aria-expanded="false">
              <span>
                <i className="ti ti-user-plus" />
              </span>
              <span className="hide-menu">address</span>
            </a>
            <a className="sidebar-link" href="./admission" aria-expanded="false">
              <span>
                <i className="ti ti-user-plus" />
              </span>
              <span className="hide-menu">Admission</span>
            </a>
            <a className="sidebar-link" href="./franchise" aria-expanded="false">
              <span>
                <i className="ti ti-user-plus" />
              </span>
              <span className="hide-menu">Franchise</span>
            </a>
            <a className="sidebar-link" href="./contact" aria-expanded="false">
              <span>
                <i className="ti ti-user-plus" />
              </span>
              <span className="hide-menu">contact</span>
            </a>

            <a className="sidebar-link" href="./enquiry" aria-expanded="false">
              <span>
                <i className="ti ti-user-plus" />
              </span>
              <span className="hide-menu">Enquiry Form</span>
            </a>
            <a className="sidebar-link" href="./events" aria-expanded="false">
              <span>
                <i className="ti ti-user-plus" />
              </span>
              <span className="hide-menu">Events</span>
            </a>
          </li>
         
        </ul>
        <div className="unlimited-access ">
     
        </div>
      </nav>
      {/* End Sidebar navigation */}
    </div>
    {/* End Sidebar scroll*/}
  </aside>
  {/*  Sidebar End */}
  {/*  Main wrapper */}

</div>

    </div>
 
  )
}

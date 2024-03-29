import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { useScript } from '../Customhooks/Script';
export default function Sidebar() {
const[open,setOpen]=useState(false)

   const closeStyle= 
   {
    display:"none"
   }
   const openStyle ={
    display:"block",
    zIndex:2000
   }
  // useScript('assets/libs/jquery/dist/jquery.min.js')
  // useScript('assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js')

  // useScript('assets/js/app.min.js')
  // useScript('assets/libs/simplebar/dist/simplebar.js')
  // useScript('assets/js/dashboard.js')
  // useScript('assets/libs/apexcharts/dist/apexcharts.min.js')
  const openMenu =  ()=>{
    console.log(open.toString())
    setOpen(!open);
  }
  return (
    <div>
       <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  {/* Sidebar Start */}
  <aside className="left-sidebar">
    {/* Sidebar scroll*/}
    <div >
      <div className="brand-logo d-flex align-items-center justify-content-between" style={open?openStyle:closeStyle}>
        <Link to="./index.html" className="text-nowrap logo-img">
          <img src="../assets/images/logos/dark-logo.svg" width={180} alt />
        </Link>
        <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
          <i className="ti ti-x fs-8" />
        </div>
      </div>
      {/* Sidebar navigation*/}
      <nav className="sidebar-nav scroll-sidebar" data-simplebar >
        <ul id="sidebarnav">
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">Home</span>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/" aria-expanded="false">
              <span>
                <i className="ti ti-layout-dashboard" />
              </span>
              <span className="hide-menu">Dashboard</span>
            </Link>
          </li>
       
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">Pages</span>
          </li>
          <li className="sidebar-item">
            {/* <Link className="sidebar-link" to="/login" aria-expanded="false">
              <span>
                <i className="ti ti-login" />
              </span>
              <span className="hide-menu">Login</span>
            </Link> */}
            <Link className="sidebar-link" to="/blogs" aria-expanded="false">
              <span>
                <i className="ti ti-login" />
              </span>
              <span className="hide-menu">blogs</span>
            </Link>
            <Link className="sidebar-link" to="/calendar" aria-expanded="false">
              <span>
                <i className="ti ti-calendar" />
              </span>
              <span className="hide-menu">calendar</span>
            </Link>
          </li>
          <li className="sidebar-item">
          <Link className="sidebar-link" to="/admission" aria-expanded="false">
              <span>
              <i className=" ti ti-user" />
              </span>
              <span className="hide-menu">Admission</span>
            </Link>
            </li>
<li className="sidebar-item"> 
            <Link className="sidebar-link" to="/franchise" aria-expanded="false">
              <span>
                <i className="ti ti-user-plus" />
              </span>
              <span className="hide-menu">Franchise</span>
            </Link></li>
        
<li className="sidebar-item">
<Link className="sidebar-link" to="/contact" aria-expanded="false">
              <span>
                <i className="ti ti-user-plus" />
              </span>
              <span className="hide-menu">contact</span>
            </Link>
</li>


            <li className="sidebar-item">
            <Link className="sidebar-link" to="/enquiry" aria-expanded="false">
              <span>
                <i className="ti ti-user-plus" />
              </span>
              <span className="hide-menu">Enquiry Form</span>
            </Link>
            </li>
            <li className="sidebar-item">
            <Link className="sidebar-link" to="/events" aria-expanded="false">
              <span>
                <i className="ti ti-user-plus" />
              </span>
              <span className="hide-menu">Events</span>
            </Link>
            </li>
       
          <li className="sidebar-item"> 
           <Link className="sidebar-link" to="/newsletter" aria-expanded="false">
              <span>
                <i className="ti ti-login" />
              </span>
              <span className="hide-menu">newsletter</span>
            </Link></li>

            <li className="sidebar-item"> 
           <Link className="sidebar-link" to="/summerclass" aria-expanded="false">
              <span>
                <i className="ti ti-login" />
              </span>
              <span className="hide-menu">SummerClass</span>
            </Link></li>
            <li className="sidebar-item"> 
           <Link className="sidebar-link" to="/teacher" aria-expanded="false">
              <span>
                <i className="ti ti-login" />
              </span>
              <span className="hide-menu">Teacher Data</span>
            </Link></li>

            <li className="sidebar-item"> 
           <Link className="sidebar-link" to="/timetable" aria-expanded="false">
              <span>
                <i className="ti ti-login" />
              </span>
              <span className="hide-menu">TimeTable</span>
            </Link></li>
            <li className="sidebar-item"> 
           <Link className="sidebar-link" to="/top" aria-expanded="false">
              <span>
                <i className="ti ti-login" />
              </span>
              <span className="hide-menu">Topbar</span>
            </Link></li>
        </ul>

        <div className="unlimited-access ">
     
        </div>
      </nav>
      {/* End Sidebar navigation */}
    </div>
    {/* End Sidebar scroll*/}
  </aside>

  <div className="body-wrapper">
  {/*  Header Start */}
  <header className="app-header">
    <nav className="navbar navbar-expand-lg navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item d-block d-xl-none">
          <button className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" onClick={openMenu}>
            <i className="ti ti-menu-2" />
          </button>
        </li>
   
      </ul>
    
    </nav>
  </header>
  {/*  Header End */}

</div>

  {/*  Sidebar End */}
  {/*  Main wrapper */}

</div>

    </div>
 
  )
}

import React from 'react'
import Home from './pages/Home';
import Address from './pages/address/Address';
import Admission from './pages/admission/Admission';
import Franchise from './pages/franchise/Franchise';
import Contact from './pages/contact/Contact';
import Enquiry from './pages/Enquiry/Enquiry';
import Events from './pages/Events/Events';
import Blog from './pages/blogs/Blog';
import Calendar from './pages/calendar/Calendar';
import Newsletter from './pages/newletter/Newsletter';
import Class from './pages/summerclass/Class';
import Teacher from './pages/teachers/Teacher';

import Tobbar from './pages/topbar/Topbar';
import { Route,Routes } from 'react-router-dom';
import Timetable from './pages/timetable/TimeTable';
export default function ProtectedRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
     
          <Route path="/address" element={<Address />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/summerclass" element={<Class />} />
          <Route path="/teacher" element={<Teacher/>} />
          <Route path="/timetable" element={<Timetable/>} />
          <Route path="/top" element={<Tobbar/>} />
      </Routes>
    </div>
  )
}

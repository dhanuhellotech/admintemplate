import React,{useState,useEffect}from 'react'
import axios from 'axios'
import { useScript } from '../../Customhooks/Script'
import Sidebar from '../../common/Sidebar'
import { client, imageUrl } from '../../clientaxios/Clientaxios'
export default function Teacher() {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [hobby, setHobby] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [degree, setDegree] = useState('');
  const [teachingGoal, setTeachingGoal] = useState('');
  const [position, setPosition] = useState('');
  const [homeTown, setHomeTown] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [teachers, setTeachers] = useState([]);
  const [editingTeacherId, setEditingTeacherId] = useState(null);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = () => {
    client.get('/teachers') // Replace with your actual backend endpoint
      .then(response => setTeachers(response.data))
      .catch(error => console.error('Error fetching teachers:', error));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleFormSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('about', about);
      formData.append('hobby', hobby);
      formData.append('dateOfBirth', dateOfBirth);
      formData.append('degree', degree);
      formData.append('teachingGoal', teachingGoal);
      formData.append('position', position);
      formData.append('homeTown', homeTown);
      formData.append('image', imageFile);
  
      if (editingTeacherId) {
        // If editing, send a request to update the existing teacher
        await client.put(`/teachers/${editingTeacherId}`, formData);
        setEditingTeacherId(null); // Reset editing state
      } else {
        // If not editing, send a request to create a new teacher
        await client.post('/teachers', formData);
      }
  
      clearForm();
      fetchTeachers();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  const handleEditTeacher = (teacherId) => {
    const teacherToEdit = teachers.find(teacher => teacher._id === teacherId);
    if (teacherToEdit) {
      setName(teacherToEdit.name);
      setAbout(teacherToEdit.about);
      setHobby(teacherToEdit.hobby);
      setDateOfBirth(teacherToEdit.dateOfBirth);
      setDegree(teacherToEdit.degree);
      setTeachingGoal(teacherToEdit.teachingGoal);
      setPosition(teacherToEdit.position);
      setHomeTown(teacherToEdit.homeTown);
      setEditingTeacherId(teacherToEdit._id); // Set the teacher ID being edited
    }
  };

  const handleDeleteTeacher = async (teacherId) => {
    try {
      await client.delete(`/teachers/${teacherId}`);
      fetchTeachers();
    } catch (error) {
      console.error('Error deleting teacher:', error);
    }
  };

  const clearForm = () => {
    setName('');
    setAbout('');
    setHobby('');
    setDateOfBirth('');
    setDegree('');
    setTeachingGoal('');
    setPosition('');
    setHomeTown('');
    setImageFile(null);
    setEditingTeacherId(null);
  };
  useScript('assets/libs/jquery/dist/jquery.min.js');
  useScript('assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js');
  useScript('assets/js/sidebarmenu.js');
  useScript('assets/js/app.min.js');

  useScript('assets/libs/simplebar/dist/simplebar.js');
  useScript('assets/js/dashboard.js');
  useScript('assets/libs/apexcharts/dist/apexcharts.min.js')
  

  return (
    <div>
 <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  {/* Sidebar Start */}
<Sidebar/>
  {/*  Sidebar End */}
  {/*  Main wrapper */}
  <div className="body-wrapper">
    {/*  Header Start */}
    <header className="app-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item d-block d-xl-none">
            <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
              <i className="ti ti-menu-2" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-icon-hover" href="javascript:void(0)">
              <i className="ti ti-bell-ringing" />
              <div className="notification bg-primary rounded-circle" />
            </a>
          </li>
        </ul>
        <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
          <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
            <a href="https://adminmart.com/product/modernize-free-bootstrap-admin-dashboard/" target="_blank" className="btn btn-primary">Download Free</a>
            <li className="nav-item dropdown">
              <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../assets/images/profile/user-1.jpg" alt width={35} height={35} className="rounded-circle" />
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                <div className="message-body">
                  <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                    <i className="ti ti-user fs-6" />
                    <p className="mb-0 fs-3">My Profile</p>
                  </a>
                  <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                    <i className="ti ti-mail fs-6" />
                    <p className="mb-0 fs-3">My Account</p>
                  </a>
                  <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                    <i className="ti ti-list-check fs-6" />
                    <p className="mb-0 fs-3">My Task</p>
                  </a>
                  <a href="./authentication-login.html" className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    {/*  Header End */}
    <div className="container-fluid">
    <div className="container">
      <div className="card" style={{ padding: '20px', margin: '20px 0' }}>
        <h4 className="card-title">Teacher Admin Panel</h4>
        <form method="post" action="/your-upload-endpoint" encType="multipart/form-data">
          <div className="row">
            <div className="col-md-6">
              <label>Name</label>
              <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label>About</label>
              <input type="text" className="form-control" value={about} onChange={(e) => setAbout(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label>Hobby</label>
              <input type="text" className="form-control" value={hobby} onChange={(e) => setHobby(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label>Date of Birth</label>
              <input type="date" className="form-control" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label>Position</label>
              <input type="text" className="form-control" value={position} onChange={(e) => setPosition(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label>Home Town</label>
              <input type="text" className="form-control" value={homeTown} onChange={(e) => setHomeTown(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label>Degree</label>
              <input type="text" className="form-control" value={degree} onChange={(e) => setDegree(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label>Teaching Goal</label>
              <input type="text" className="form-control" value={teachingGoal} onChange={(e) => setTeachingGoal(e.target.value)} />
            </div>
            <div className="col-md-12 mt-3">
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>
            <div className="col-md-12 mt-3">
              <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>{editingTeacherId ? 'Update Teacher' : 'Add Teacher'}</button>
            </div>
          </div>
        </form>
      </div>
      {/* Display existing teachers */}
      <h5 style={{ marginTop: '20px' }}>Existing Teachers</h5>
      <div className="row">
  {teachers.map(teacher => (
    <div className="col-md-4" key={teacher._id}>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Name: {teacher.name}</h5>
          <p className="card-text">About: {teacher.about}</p>
          <p className="card-text">Hobby: {teacher.hobby}</p>
          <p className="card-text">Date of Birth: {teacher.dateOfBirth}</p>
          <p className="card-text">Degree: {teacher.degree}</p>
          <p className="card-text">Position: {teacher.position}</p>
          <p className="card-text">Home Town: {teacher.homeTown}</p>
          <p className="card-text">Teaching Goal: {teacher.teachingGoal}</p>
          <img src={`${imageUrl}/${teacher.imageUrl}`} alt={teacher.name} className="card-img-top" style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
          <div>
            <button className="btn btn-danger me-2" onClick={() => handleDeleteTeacher(teacher._id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => handleEditTeacher(teacher._id)}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


    </div>

</div>
  </div>
</div>

    </div>
  )
}


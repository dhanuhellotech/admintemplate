import React,{useState,useEffect}from 'react'
import axios from 'axios'
import { useScript } from '../../Customhooks/Script'
import Sidebar from '../../common/Sidebar'
import { client } from '../../clientaxios/Clientaxios'
export default function Admission() {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get('/Addmission');
        console.log('Response from backend:', response.data);

        const admissions = response.data.admissions || [];
        setFormDataList(admissions);
      } catch (error) {
        console.error('Error fetching form data:', error);

        if (error.response && error.response.data && error.response.data.error) {
          console.error('Server Error:', error.response.data.error);
        } else {
          console.error('Error fetching data. Please try again.');
        }
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await client.delete(`/Addmission/${id}`);
      setFormDataList((prevData) => prevData.filter(formData => formData._id !== id));
    } catch (error) {
      console.error('Error deleting form data:', error);
      if (error.response && error.response.data && error.response.data.error) {
        console.error('Server Error:', error.response.data.error);
      } else {
        console.error('Error deleting data. Please try again.');
      }
    }
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
  
    {/*  Header End */}
    <div className="container-fluid">
    <div className="container mt-4">
      <h2>Admission Data</h2>
      {formDataList.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Parent Name</th>
              <th>Child Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Current School</th>
              <th>Grade Applying For</th>
              <th>Preferred Start Date</th>
              <th>Questions/Comments</th>
              <th>How Did You Hear About Us</th>
              <th>Address</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {formDataList.map((formData) => (
              <tr key={formData._id}>
                <td>{`${formData.parentFirstName} ${formData.parentLastName}`}</td>
                <td>{`${formData.childFirstName} ${formData.childLastName}`}</td>
                <td>{`${formData.dateOfBirth.split('T')[0]}`}</td>
                <td>{`${formData.gender}`}</td>
                <td>{`${formData.currentSchool}`}</td>
                <td>{`${formData.gradeApplyingFor}`}</td>
                <td>{`${formData.preferredStartDate.split('T')[0]}`}</td>
                <td>{`${formData.questionsComments}`}</td>
                <td>{`${formData.howDidYouHearAboutUs}`}</td>
                <td>{`${formData.address}`}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(formData._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
</div>
  </div>
</div>

    </div>
  )
}


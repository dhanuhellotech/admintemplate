import React,{useState,useEffect}from 'react'
import axios from 'axios'
import { useScript } from '../../Customhooks/Script'
import Sidebar from '../../common/Sidebar'
import { client, imageUrl } from '../../clientaxios/Clientaxios'
export default function Blog() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [comments, setComments] = useState(0);
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [editingBlogId, setEditingBlogId] = useState(null);
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    client.get('/blogs') // Replace with your actual backend endpoint
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleFormSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('date', date);
      formData.append('category', category);
      formData.append('author', author);
      formData.append('comments', comments);
      formData.append('content', content);
      formData.append('link', link);
      formData.append('image', imageFile);

      if (editingBlogId) {
        // If editing, send a request to update the existing blog
        await client.put(`/blogs/${editingBlogId}`, formData);
        setEditingBlogId(null); // Reset editing state
      } else {
        // If not editing, send a request to create a new blog
        await client.post('/blogs', formData);
      }

      clearForm();
      fetchBlogs();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

 
  
  const handleEditBlog = (blogId) => {
    const blogToEdit = blogs.find(blog => blog._id === blogId);
    if (blogToEdit) {
      setTitle(blogToEdit.title);
      setDate(blogToEdit.date);
      setCategory(blogToEdit.category);
      setAuthor(blogToEdit.author);
      setComments(blogToEdit.comments);
      setContent(blogToEdit.content);
      setLink(blogToEdit.link);
      setEditingBlogId(blogToEdit._id); // Set the blog ID being edited
    }
  };
  
  const handleDeleteBlog = async (blogId) => {
    try {
      await client.delete(`/blogs/${blogId}`);
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  }
  const clearForm = () => {
    setTitle('');
    setDate('');
    setCategory('');
    setAuthor('');
    setComments(0);
    setContent('');
    setLink('');
    setImageFile(null);
    setEditingBlogId(null);
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
      <div className="row">
        <div className="col-md-12">
          <h4>Blog Admin Panel</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Date</label>
              <input type="text" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Author</label>
              <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Comments</label>
              <input type="number" className="form-control" value={comments} onChange={(e) => setComments(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Content</label>
              <textarea className="form-control" rows="3" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Link</label>
              <input type="text" className="form-control" value={link} onChange={(e) => setLink(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="file" className="form-control" accept="image/*" onChange={handleFileChange} />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Add Blog</button>
          </form>
        </div>
      </div>
      <div className="row mt-4">
        {blogs.map(blog => (
          <div className="col-md-4" key={blog._id}>
            <div className="card mb-3">
              <img src={`${imageUrl}/${blog.imageUrl}`} className="card-img-top" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.category}</p>
                <p className="card-text">{blog.author}</p>
                <p className="card-text">{blog.content}</p>
                <p className="card-text">{blog.link}</p>
                <p className="card-text">{blog.date}</p>
                <button className="btn btn-danger me-2" onClick={() => handleDeleteBlog(blog._id)}>Delete</button>
                <button className="btn btn-primary" onClick={() => handleEditBlog(blog._id)}>Edit</button>
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


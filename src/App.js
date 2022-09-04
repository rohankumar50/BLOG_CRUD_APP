import { Routes, Route } from 'react-router-dom'
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';
import './App.css'
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="BLOG_CRUD_APP">MY BLOG</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="BLOG_CRUD_APP">Home</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div className="Container">
        <Routes>
          <Route path='/BLOG_CRUD_APP' element={<Posts />} />
          <Route path='createpost' element={<CreatePost />} />
        </Routes>
      </div>

      <footer className="footer d-flex flex-wrap justify-content-between align-items-center border-top bg-primary">
        <p className="col-md-4 mb-0 text-light">Created by Rohan Kumar</p>
      </footer>

    </>
  );
}

export default App;

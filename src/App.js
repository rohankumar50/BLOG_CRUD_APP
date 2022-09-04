import { Routes, Route } from 'react-router-dom'
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';
import './App.css'
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div className="Container">
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='createpost' element={<CreatePost />} />
        </Routes>
      </div>

      <footer className="footer d-flex flex-wrap justify-content-between align-items-center border-top bg-primary">
        <p className="col-md-4 mb-0 text-light">© 2022 Company, Inc</p>
      </footer>

    </>
  );
}

export default App;

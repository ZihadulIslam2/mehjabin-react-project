import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import Blogs from './components/pages/Blogs'
import Login from './components/pages/Login'
import Register from './components/pages/Register'

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App

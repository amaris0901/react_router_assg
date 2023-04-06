import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
function App() {
  const [notLogin, Login] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route exact path="/profile/:id" element={<Profile/>}/>
            <Route path='/' element={<Home Login={Login}/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path='/admin' element={notLogin === 1 && <Admin Login={Login} />}/>
      </Routes>
      <nav>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            <NavLink to={'/profile/232'}>Profile</NavLink>
            <NavLink  to={'/admin'}>For Admin</NavLink>
      </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;

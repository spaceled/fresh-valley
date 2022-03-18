import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import { Link } from "react-router-dom";
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import Popper from 'popper.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> <br />
          <Link to="/addProduct">Add Product</Link> <br />
          <Link to="/login">Login</Link> <br />
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route index element={<Home />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

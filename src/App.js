import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Signup from './components/Login/Signup';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/Shipping/Shipping';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          {/* <nav>
            <Link to="/">Home</Link> <br />
            <Link to="/addProduct">Add Product</Link> <br />
            <Link to="/login">Login</Link> <br />
            <Link to="/signup">Signup</Link> <br />
          </nav> */}
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/home"  element={<Home />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>}/>

            <Route path="/checkout" element={
              <PrivateRoute>
                <CheckOut/>
              </PrivateRoute>
            } 
            />
            <Route path="/checkout/:id" element={
              <PrivateRoute>
                <CheckOut/>
              </PrivateRoute>
            } 
            />
            <Route path="/shipping" element={<Shipping/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

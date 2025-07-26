import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './pages/Error';
import Logout from './pages/Logout';
import AdminLayout from './components/Admin-Layout';
import { AdminUsers } from './pages/Admin-Users';
import AdminContacts from './pages/Admin-Contacts';
import AdminUpdate from './pages/Admin-Update';

const App = () =>{
  return(
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/contact" element={<Contact />} />
        <Route path = "/register" element={<Register />} />
        <Route path = "/login" element={<Login />} />
        <Route path = "/services" element={<Services />} />
        <Route path = "/logout" element={<Logout />} />
        <Route path="*" element={<Error />}/>
        <Route path='/admin' element={<AdminLayout />} >
          <Route path='users' element={<AdminUsers />} />
          <Route path='contacts' element={<AdminContacts />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
        </Route>
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
);
};

export default App;
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import WordtVerwacht from './pages/WordtVerwacht';
import Weekoverzicht from './pages/Weekoverzicht';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Film from './pages/Film';
import AdminDashboard from './pages/AdminDashboard';
import AdminFilms from './pages/AdminFilms';
import AdminFilmsAanpassen from './pages/AdminFilmsAanpassen';
import UserInstellingen from './pages/UserInstellingen';
import AdminFilmsToevoegen from './pages/AdminFilmsToevoegen';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/weekoverzicht' element={<Weekoverzicht />} />
          <Route path='/verwacht' element={<WordtVerwacht />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/film/*' element={<Film />} />

          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/films' element={<AdminFilms />} />
          <Route path='admin/films/toevoegen' element={<AdminFilmsToevoegen />} />
          <Route path='/admin/films/1' element={<AdminFilmsAanpassen />} />

          <Route path="/user/instellingen" element={<UserInstellingen />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import { Route, Routes} from 'react-router-dom';
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
import AdminKalender from './pages/AdminKalender';
import AdminInstellingen from './pages/AdminInstellingen';


function App() {

  return (
      <div className="App flex flex-col min-h-screen">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/weekoverzicht' element={<Weekoverzicht />} />
          <Route path='/verwacht' element={<WordtVerwacht />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/movies/*' element={<Film />} />

          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/films' element={<AdminFilms />} />
          <Route path='admin/films/toevoegen' element={<AdminFilmsToevoegen />} />
          <Route path='/admin/films/1' element={<AdminFilmsAanpassen />} />
          <Route path='/admin/instellingen' element={<AdminInstellingen />} />
          <Route path='/admin/kalender' element={<AdminKalender />} />

          <Route path="/user/instellingen" element={<UserInstellingen />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

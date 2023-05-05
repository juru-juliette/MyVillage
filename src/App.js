import './App.css';
import NavBar from './Components/Navbar/navbar.jsx';
import Footer from './Components/Footer/footer';
import Overview from './Components/Overview/overview';
// import RelocationForm from './Components/Relocation/Relocation_form.jsx'
import { Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div>
      <NavBar />
      <Overview/>
      <Footer/> 
      {/* <RelocationForm/> */}
      
    </div>
  );
}

export default App;

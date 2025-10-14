import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Careers from './Pages/Careers';
import Clients from './Pages/Clients';
import Talents from './Pages/Talents';
import Pricing from './Pages/Pricing';
import Impacts from './Pages/Impacts';
import Blog from './Pages/Blog';
import Hiring from './Pages/Hiring'
import Work from './Pages/WorkPage'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Careers />}/>
        <Route path='/Companies' element={<Clients category="For-Companies"/>}/>
        <Route path='/for-candidates' element={<Talents category="For-Candidates"/>}/>
        <Route path='/Pricing' element={<Pricing category="pricing"/>}/>
        <Route path='/Impacts' element={<Impacts category="Our-Impacts"/>}/>
        <Route path='/Blog' element={<Blog category="Blogs"/>}/>
        <Route path='/Hiring' element={<Hiring category="Hiring"/>}/>
        <Route path='/Work' element={<Work category="Work"/>}/>
      </Routes>
    <Footer />
    </BrowserRouter>
    </div>
      
  );
}

export default App;

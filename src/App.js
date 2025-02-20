
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUsPage from './Pages/ContactUsPage';
import BlogPage from './Pages/BlogPage';
import FAQPage from './Pages/FAQPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Info from './Pages/Info';
import Info2 from './Pages/Info2';
import Info3 from './Pages/Info3';
import Info4 from './Pages/Info4';
import Info5 from './Pages/Info5';
import Info6 from './Pages/Info6';
function App() {
  return (
    <BrowserRouter>

           <Navbar/>
      <Routes>
       

        <Route path='/contactus' element={<ContactUsPage />}></Route>
        <Route path='/blog' element={<BlogPage />}></Route>
        <Route path='/faq' element={<FAQPage />}></Route>
        <Route path='/info' element={<Info />}></Route>
        <Route path='/info2' element={<Info2 />}></Route>
        <Route path='/info3' element={<Info3 />}></Route>
        <Route path='/info4' element={<Info4 />}></Route>
        <Route path='/info5' element={<Info5 />}></Route>
        <Route path='/info6' element={<Info6 />}></Route>




      </Routes>
      <Footer/>

    </BrowserRouter>




  );
}

export default App;

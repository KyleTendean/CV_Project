import './App.css'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hire from './components/Hire';
import Testmonial from './components/Testimonial';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Skills from './components/Skills';

const App =()=> {
  return (
    <>
      <div>
  {/* Page navigation */}
  <Navbar/>
  {/* End of page navibation */}
  {/* Page Header */}
  <Header/>
  {/* End of Page Header */}
  {/* About section */}
  <About/>
  {/* Service section */}
  <Service/>
  {/* End of Sectoin */}
  {/* Skills section */}
  <Skills/>
  {/* End of Skills sections */}
  {/* Portfolio section */}
  <Portfolio/>
  {/* End of portfolio section */}
  {/* Testmonial Section */}
  <Testmonial/>
  {/* End of testmonial section */}
  {/* Blog Section */}
  <Blog/>
  {/* Hire me section */}
  <Hire/>
  {/* End od Hire me section. */}
  {/* Contact Section */}
  <Contact/>
  {/* End of Contact Section */}
  {/* Page Footer */}
  <Footer/>
  {/* End of page footer */}
  {/* core  */}
  {/* bootstrap 3 affix */}
  {/* steller js */}
</div>
    </>
  );
};


export default App

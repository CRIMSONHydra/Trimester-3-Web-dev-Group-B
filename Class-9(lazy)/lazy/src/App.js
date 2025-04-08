import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/Movies";
import { lazy , Suspense} from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(()=> import('./components/Home'))

const About = lazy(()=> import('./components/About'))

const Contact = lazy(()=> import('./components/Contact'))




function App() {
  return (
    <div className="App">
     <Suspense fallback={<h1>Loadingg..</h1>}>
      <BrowserRouter>
        <Navbar />
        <Routes>
    
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

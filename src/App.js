import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { Component } from "react";

class App extends Component {
  authenticate() {
    return new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const preloader = document.getElementById("preloaderWrapper");
      if (preloader) {
        // fade out
        preloader.classList.add("available");
        setTimeout(() => {
          // remove from DOM
          preloader.outerHTML = "";
        }, 2000);
      }
    });
  }

  render() {
    return (
      <Router>
        <ScrollToTop />
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    );
  }
}

export default App;

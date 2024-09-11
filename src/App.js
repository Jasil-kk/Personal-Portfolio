import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Banner } from "./Components/Banner";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Footer } from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Contact } from "./Components/Contact";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

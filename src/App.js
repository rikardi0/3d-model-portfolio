import "./App.css";
import Head from "../src/components/header/Head";
import Catalogue from "./components/catalogue/Catalogue";
import Footer from "../src/components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Head />
      <Catalogue />
      <Footer />
    </div>
  );
}

export default App;

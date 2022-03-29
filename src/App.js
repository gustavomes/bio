import "./styles.css";
import Header from "./components/Header";
import About from "./components/Bio";
import Usando from "./components/usando";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/Index";
import SobreMim from "./components/SobreMim";
import Aprendendo from "./components/aprendendo";
import Outras from "./components/Outras";
import Portifolio from "./components/Portiflio";
import Contato from "./components/contato";
import Footer from "./components/Footer";

function App() {
  return (
  
    <div className="App">

      <Header/>
      <Banner className="diag"/>
      <About />
      <SobreMim />
      <Usando />
      <Aprendendo />
      <Outras />
      <Portifolio />
      <Contato />
      <Footer/>
      

      
     
    </div>
  );
}

export default App;

import "./styles.css";
import Header from "./components/Header";
import About from "./components/Bio";
import Usando from "./components/usando";
import Social from "./components/Social";
import "bootstrap/dist/css/bootstrap.min.css";

import Banner from "./components/Banner/Index";
import SobreMim from "./components/SobreMim";
import Aprendendo from "./components/aprendendo";
import Outras from "./components/Outras";
import Portifolio from "./components/Portiflio";

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
      <Social />

      
     
    </div>
  );
}

export default App;

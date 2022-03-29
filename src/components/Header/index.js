import "./styles.css";
import logo from "../../assets/GM_CMYK_Neg_H_300dpi.png";


export default function Header(props) {


  function scrollToComponent(id) {
    document.getElementById(id).scrollIntoView();
  }

  return (
    <header>
       <img src={logo} className="logo"/> 

      <ul className="menu">
        <li className="item-menu" onClick={() => scrollToComponent("bio")}>
          Bio
        </li>
        <li className="item-menu" onClick={() => scrollToComponent("sobre")}>
          Sobre Mim
        </li>
        <li className="item-menu"  onClick={() => scrollToComponent("hab")}>Habilidades</li>
        <li className="item-menu" onClick={() => scrollToComponent("porti")}>Portifolio</li>
        <li className="item-menu" onClick={() => scrollToComponent("contato")}>Contato</li>

      </ul>
    </header>
  );
}

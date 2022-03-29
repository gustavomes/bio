import "./styles.css";
import logo from "../../assets/GM_CMYK_Neg_H_300dpi.png";


export default function Header(props) {

  return (
    <footer>
       <img src={logo} className="logo"/> 

      <ul className="menu">
        <li className="item-menu" onClick={() => scrollToComponent("projects")}>
          Projetos
        </li>
        <li className="item-menu" onClick={() => scrollToComponent("about")}>
          Ferramentas
        </li>
        <li className="item-menu">Sobre</li>
        <li className="item-menu">Sobre</li>
      </ul>
    </footer>
  );
}

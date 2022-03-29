import "./style.css";
import logo from "../../assets/GM_CMYK_Neg_H_300dpi.png";
import { SocialIcon } from 'react-social-icons';


export default function Footer (props) {

  return (
    <footer >
       <img src={logo} className="logo"/> 

      <ul className="menu-footer">
        <li className="item-menu-footer">
        <SocialIcon url="https://github.com/gustavomes" network="github" bgColor="white" style={{ height: 30, width: 30 }}/>
        </li>
        
        <li className="item-menu-footer">
        <SocialIcon url="https://www.facebook.com/gustavomes" network="facebook" bgColor="white" style={{ height: 30, width: 30 }}/>
        </li> 
        
        <li className="item-menu-footer">
        <SocialIcon url="https://www.linkedin.com/in/gustavo-medeiros-385931213/" network="linkedin" bgColor="white" style={{ height: 30, width: 30 }}/>
        </li> 

        <li className="item-menu-footer">
        <SocialIcon url="https://www.instagram.com/gustavomedeirosfoto/" network="instagram" bgColor="white" style={{ height: 30, width: 30 }}/>
        </li> 
      </ul>
    </footer>
  );
}

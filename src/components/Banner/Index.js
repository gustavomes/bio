import "./Style.css"
import logo from "../../assets/logo.png"
import inst from "../../assets/insta.png"
import git from "../../assets/git.png"
import link from "../../assets/link.png"

export default function Banner() {
    return (
    <>
 <div className="wrapper">
  <div className="left">
    <div className="left-container">
        <img src={logo} className="logo-banner" alt="logo"/>
      <div className="text-banner">
        <h2 className="ola">Oi, Eu Sou</h2>
        <h1 className="gustavo">GUSTAVO MEDEIROS</h1>
        <h4 className="sub"> Front-end Developer</h4>
      </div>
      <div className="social">
      <a href="http://"><img src={inst} className="insta" alt="insta"/></a>
      <a href="http://"><img src={git} className="git" alt="git"/></a>
      <a href="http://"> <img src={link} className="link" alt="link"/></a>
      </div>
    </div>
  </div>
  <div className="right"></div>
</div>

        </>
    );
}
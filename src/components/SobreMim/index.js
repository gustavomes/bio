import "./style.css";
import Separa from "../../assets/separatorBlack1.png";
import explore from "../../assets/explore.png";
import foto from "../../assets/Group 18.png";
import desen from "../../assets/Group 17.png";
export default function SobreMim () {


    return (
        <> 
        <div className="sobre">
            <h2 className="sobre-titulo">Sobre Mim</h2>
            <p className="sobre-para">lorem ipsum dolor sit am rem, consectetur adipiscing elit in
            sed efficitur, quam ac gravida vehicula,  sem turpis <br/> commodo augue, ut consectetur
            turpis erat non velit. Vestibulum sollicitudin scelerisque turpis.
            </p>

            
            <img src={explore} className="explore" alt="texto explore"/>
            <img src={Separa} className="separator" alt="separator"/>

        <div className="container-tags">
            <div className="tag1"> 
            <img src={foto} className="foto" alt="fotografia"/>
            <p className="tag-para">lorem ipsum dolor sit amrem, <br/>   consectetur adipiscing elit in </p>
            </div>
            <div className="tag2"> 
            <img src={desen} className="desen" alt="desenvolvimento"/>
            <p className="tag-para">lorem ipsum dolor sit amrem, <br/> consectetur  adipiscing elit in </p>
            </div>

            
        </div>
        <img src={Separa} className="separator" alt="separator"/>
        </div>
        </>
    );
}
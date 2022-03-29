import "./style.css";
import Separa from "../../assets/separatorBlack1.png";
import explore from "../../assets/explore.png";
import foto from "../../assets/Group 18.png";
import desen from "../../assets/Group 17.png";
export default function SobreMim () {


    return (
        <> 
        <div className="sobre" id="sobre">
            <h2 className="sobre-titulo">Sobre Mim</h2>
            <p className="sobre-para">Fotógrafo profissional e estudante de desenvolvimento de software <br/> busco sempre me aprimorar 
            e adiquirir novos conhecimentos.
            </p>

            
            <img src={explore} className="explore" alt="texto explore"/>
            <img src={Separa} className="separator" alt="separator"/>

        <div className="container-tags">
            <div className="tag1"> 
            <img src={foto} className="foto" alt="fotografia"/>
            <p className="tag-para">fotógrafo profissional com  <br/> mais de 10 anos de experiência </p>
            </div>
            <div className="tag2"> 
            <img src={desen} className="desen" alt="desenvolvimento"/>
            <p className="tag-para"> Fazendo graduação em  <br/> Sistemas de Informação e cursando  <br/> Certified Tech Developer na Digital House Brasil </p>
            </div>

            
        </div>
        <img src={Separa} className="separator" alt="separator"/>
        </div>
        </>
    );
}
import "./style.css";

const Por = [

  {
    id: "1",
    name: "Checkpoint I - Front End II",
    sub: "escolha seu campeão no LoL",
    image:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8979808f7798ecf5/6216ee875fe07272a8a2447a/2021_Key_art.jpg",
      link: "https://gustavomes.github.io/frontEnd2_checkpoit1/ ",
  },

  {
    id: "2",
    name: "Checkpoint II - Front End II",
    sub: "Todo List",
    image:
      "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/03/todo-list-tools.jpg",
      link: "https://github.com/gustavomes/Checkpoint02-FrontendII",
  },


  {
    id: "3",
    name: "Projeto Veggie",
    sub: "app de produtos veganos",
    image:
      "https://veganbusiness.com.br/wp-content/uploads/2019/02/aplicativos-veganos.jpg",
      link: "https://github.com/gustavomes/Checkpoint02-FrontendII",
  },




];

export default function Portifolio() {

const logo = "https://cdn.geckoandfly.com/wp-content/uploads/2018/03/yosemite-5932x3337-5k-4k-wallpaper-8k-forest-osx-apple-mountains-181-830x467.jpg";

  return (
      <>
    <div className="port-header-por" id="ajuste-botao">  
    
    <h2 className="sobre-titulo-por" id="porti">Portifolio </h2>
    </div>
      <div className="header-por">
    <ul className="menu-por">
        <li className="item-menu-por">
          Meus Projetos
        </li>
        
      </ul>     
      </div>

      <div className="container-portifolio"> 
      
      <ul className="list-por">
        {Por.map(({ image, name, sub, link }) => (
          <a href={link}>
            <li className="item-list-projects-por-container">
              <img src={image} className="usandoImagemPor" />
              <h5 className="name-project-por" id="centered"> {name} </h5>
              <h2 className="name-project-por" id="centered2"> {sub} </h2>
            </li>
              
          </a>
        ))}
      </ul>

      <div className="footer-por">
       
      </div>

      </div>


    </>
  );
}

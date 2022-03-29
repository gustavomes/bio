import "./style.css";

const imagePor = [

  {
    id: "1",
    name: "Checkpoint 01 - frontend II",
    image:
      "https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg",
      link: "https://github.com/gustavomes/CTDfrontEnd/tree/main/checkpointI",
  },

  {
    id: "2",
    name: "Checkpoint 02 - frontend II",
    image:
      "https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg",
      link: "https://github.com/gustavomes/Checkpoint02-FrontendII",
  },


  {
    id: "3",
    name: "hgdhgdhgdhghgd",
    image:
      "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/cachoeira-de-seljalandsfoss-na-islandia.jpeg?quality=70&strip=info&w=926",
      link: "https://github.com/gustavomes/Checkpoint02-FrontendII",
  },


  {
    id: "4",
    name: "hgdhgdhgdhghgd",
    image:
      "https://media-manager.noticiasaominuto.com.br/1920/naom_593e45e24a6cc.jpg",
      link: "https://github.com/gustavomes/Checkpoint02-FrontendII",
  },


  {
    id: "5",
    name: "hgdhgdhgdhghgd",
    image:
      "https://static.escolakids.uol.com.br/2019/07/paisagem-natural.jpg",
      link: "https://github.com/gustavomes/Checkpoint02-FrontendII",
  },


  {
    id: "6",
    name: "hgdhgdhgdhghgd",
    image:
      "https://annphoto.net/wp-content/uploads/2021/03/Fotografia-de-paisagens-de-belas-artes-o-guia-completo.jpgfit1458969ssl1.jpeg",
      link: "https://github.com/gustavomes/Checkpoint02-FrontendII",
  },

];

export default function Portifolio() {

const logo = "https://cdn.geckoandfly.com/wp-content/uploads/2018/03/yosemite-5932x3337-5k-4k-wallpaper-8k-forest-osx-apple-mountains-181-830x467.jpg";

  return (
      <>
    <div className="port-header-por" id="ajuste-botao">  
    
    <h2 className="sobre-titulo-por">Portifolio </h2>
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
        {imagePor.map(({ image, name, link }) => (
          <a href={link}>
            <li className="item-list-projects-por">
              <img src={image} className="usandoImagemPor" />
              <h5 className="name-project-por">{name}</h5>
            </li>
              
          </a>
        ))}
      </ul>

      <div className="header-por">
       
      </div>

      </div>


    </>
  );
}

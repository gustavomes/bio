import "./styles.css";

const data = [



 
  {
    id: "1",
    name: "REACT",
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  
  {
    id: "2",
    name: "CSS3",
    image:
      "https://logospng.org/download/css-3/logo-css-3-2048.png",
  },
  {
    id: "3",
    name: "HTML5",
    image:
      "https://logodownload.org/wp-content/uploads/2016/10/html5-logo-10.png",
  },

  {
    id: "4",
    name: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
  },


  {
    id: "5",
    name: "GIT",
    image:
      "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },

  {
    id: "7",
    name: "MySQL",
    image:
      "https://marcas-logos.net/wp-content/uploads/2020/11/MySQL-logo.png",
  },

  {
    id: "8",
    name: "FIGMA",
    image:
      "https://logospng.org/download/figma/figma-2048.png",
  },

  {
    id: "8",
    name: "JAVA",
    image:
      "https://qph.fs.quoracdn.net/main-qimg-48b7a3d8958565e7aa3ad4dbf2312770",
  },
  
  
  

  
];

export default function Usando() {
  return (
    <>
    <div className="container-titulo" id="hab">
      <h2 className="hab-titulo">Habilidades</h2>
    </div>
    <div className="container-using">
    <h3 className="using"> Em uso:</h3>
    </div>
    <div className="content-projects" id="projects">
      
      <ul className="list-projects">
        {data.map(({ image, name, link }) => (
          <a href={link}>
            <li className="item-list-projects">
              <img src={image} className="usandoImagem" />
              <h3 className="name-project">{name}</h3>
            </li>
          </a>
        ))}
      </ul>
    </div>
    </>
  );
}

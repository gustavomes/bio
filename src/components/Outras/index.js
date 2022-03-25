import "./styles.css";

const data = [



 
  {
    id: "1",
    name: "INGLÊS",
    image:
      "https://images.vexels.com/media/users/3/164649/isolated/preview/010f55d9bb5f8a28c3620583482d89ed-circulo-do-icone-do-idioma-da-bandeira-dos-eua.png",
  },
  
  {
    id: "2",
    name: "C++",
    image:
      "https://becode.com.br/wp-content/uploads/2017/02/cpplogo-460x460.png",
  },
  {
    id: "3",
    name: "IMPRESSÃO 3D",
    image:
      "https://cdn-icons-png.flaticon.com/512/663/663627.png",
  },

  
];

export default function Outras() {
  return (
    <>
    
    <div className="container-using-ou">
    <h3 className="using-ou">Outras Habilidades:</h3>
    </div>
    <div className="content-projects-ou" id="projects-ou">
      
      <ul className="list-projects-ou">
        {data.map(({ image, name, link }) => (
          <a href={link}>
            <li className="item-list-projects-ou">
              <img src={image} className="usandoImagem-ou" />
              <h3 className="name-project-ou">{name}</h3>
            </li>
          </a>
        ))}
      </ul>
    </div>
    </>
  );
}

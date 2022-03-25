import "./styles.css";

const data = [


  {
    id: "1",
    name: "TERRAFORM",
    image:
      "https://miro.medium.com/max/256/1*XFAD94Nkr_22ipMTwQCXeQ.png",
  },

 
  {
    id: "2",
    name: "AWS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
  },
  {
    id: "3",
    name: "SPRING",
    image:
      "https://1.bp.blogspot.com/-trIS3Iz94SE/YIr3iwBC23I/AAAAAAAAtVQ/oieBThHJU3wPJkGOATDSvi6RySwlowM5ACLcBGAsYHQ/s452/spring-logo.png",
  },
  {
    id: "4",
    name: "NODE JS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
  },
  
 




 


  
];

export default function Aprendendo() {
  return (
    <>
    
    <div className="container-using-apre">
    <h3 className="using-apre"> Em aprendizado: </h3>
    </div>
    <div className="content-projects-apre" id="projects-apre">
      
      <ul className="list-projects-apre">
        {data.map(({ image, name, link }) => (
          <a href={link}>
            <li className="item-list-projects-apre">
              <img src={image} className="usandoImagem-apre" />
              <h3 className="name-project-apre">{name}</h3>
            </li>
          </a>
        ))}
      </ul>
    </div>
    </>
  );
}

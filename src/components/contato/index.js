import "./style.css"
import { Formik } from "formik";
import InputMask from "react-input-mask";
import MySwal from "sweetalert2";
import withReactContent from "sweetalert2-react-content"; 

export default function Contato () {
  return (
    <>
    <div className="sobre-cont" id="contato">
            <h2 className="sobre-titulo-cont">Contato</h2>

       <div className="App">
      
      <Formik
        initialValues={{
          nome: "",
          email: "",
          nascimento: "",
          telefone: "",
          cpf: "",
          peso: "",
          altura: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.nome) {
            errors.nome = "Campo Obrigatorio";
          }

          if (!values.email) {
            errors.email = "Campo Obrigatorio";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email inválido";
          }

          if (!values.telefone) {
            errors.telefone = "Campo Obrigatorio";
          } else if (
            !/\([0-9]{2}\) (?:9[0-9]{1}|[1-5]{1})[0-9]{3}-[0-9]{4}/.test(
              values.telefone
            )
          ) {
            errors.telefone = "Telefone inválido";
          }


          return errors;
        }}
        onSubmit={(values) =>
          MySwal.fire({
            title: "Meu Formulario",
            footer: `${values.nome}`,
            didOpen: () => {
              MySwal.clickConfirm();
            },
          }).then(() => {
            return MySwal.fire(<p>{values.email}</p>);
          })
        }
      >
        {({ values, handleSubmit, errors, handleChange, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <div className="header-form">
              
            </div>

            <label>
              <span>Nome</span>
              <input className="input-cont"
                autoComplete="off"
                type="text"
                value={values.nome}
                name="nome"
                onChange={handleChange}
              />
              <span>{errors.nome}</span>
            </label>

            <label>
              <span>Email</span>
              <input className="input-cont"
                autoComplete="off"
                type="email"
                value={values.email}
                name="email"
                onChange={handleChange}
              />
              <span>{errors.email}</span>
            </label>

          

            <label>
              <span>Telefone</span>
              {/* <input
                autoComplete="off"
                type="tel"
                value={values.telefone}
                name="telefone"
                onChange={handleChange}
              /> */}
              <InputMask className="input-cont"
                autoComplete="off"
                mask="(99) 99999-9999"
                onChange={handleChange}
                value={values.telefone}
                name="telefone"
              />
              <span>{errors.telefone}</span>
            </label>

           
            <label>
              <span>Mesagem</span>
              <textarea className="input-cont" id="w3review" name="w3review" rows="4" cols="50">
                digite sua mensagem
              </textarea>
            </label>


<div className="container-buttons">
  <button type="submit">Salvar</button>
  <button onClick={resetForm}>Limpar campos</button>
</div>

          </form>
        )}
      </Formik>
    </div>

            
</div>
      
  
    
    </>
  );
}

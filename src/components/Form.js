import './styles/form.css'
function Form() {
    return (
      <div className="contentForm ">
        <h3> Formulario </h3>

        <form action="">
            <label htmlFor="">Correo Electronico</label>
            <i className="fa fa-envelope"></i>
            <input type="email" name="txtEmail"></input>
            <label>contraseña</label>
            <i class="fa fa-lock" aria-hidden="true"></i>
            <input type="password" name="txtPass"></input>
        </form>
      </div>
    );
  }
  
  export default Form;
  
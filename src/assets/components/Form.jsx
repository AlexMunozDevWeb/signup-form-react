import { useState } from "react";

const Form = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      alert('Formulario válido, enviando...');
    } else {
      setErrors(validationErrors);
    }

  };

  const validateForm = (formData) => {
    let errors = {};

    if (!formData.nombre.trim()) {
      errors.nombre = 'El nombre es requerido';
    }

    if (!formData.apellidos.trim()) {
      errors.apellidos = 'Los apellidos son requeridos';
    }

    if (!formData.email.trim()) {
      errors.email = 'El correo electrónico es requerido';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'El correo electrónico no es válido';
    }

    if (formData.password.length < 6) {
      errors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Utiliza una expresión regular para validar el formato del correo electrónico
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <>
      <form className='sign-up-form' onSubmit={handleSubmit}>

        <div className={`input-container ${ errors.nombre ? 'error' : ''  }`}>
          <input 
            type="text" name="nombre" 
            value={ formData.nombre } 
            onChange={handleChange} />
          {/* {errors.nombre && <span>{errors.nombre}</span>} */}
        </div>

        <div className={`input-container ${ errors.apellidos ? 'error' : ''  }`}>
          <input  
            type="text" name="apellidos" 
            value={ formData.apellidos } 
            onChange={handleChange} />
          {/* {errors.apellidos && <span>{errors.apellidos}</span>} */}
        </div>
        
        <div className={`input-container ${ errors.email ? 'error' : ''  }`}>
          <input  
            type="text" name="email" 
            value={ formData.email } 
            onChange={handleChange} />
          {/* {errors.email && <span>{errors.email}</span>} */}
        </div>
        
        <div className={`input-container ${ errors.password ? 'error' : '' }`}>
          <input 
            type="password" name="password" 
            value={formData.password} 
            onChange={handleChange} />
          {/* {errors.password && <span>{errors.password}</span>} */}
        </div>

        <div className="input-container">
          <input 
            type="submit" 
            value={'Claim your free trial '} />
        </div>

        <p className="copy-text">
          By clicking the button, you are agreeing to our <a className='link-terms' href="#">Terms and Services</a>
        </p>

      </form>
    </>
  )
}

export default Form
import React, { Component } from 'react';

class RegistroForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      email: '',
      contraseña: '',
      errores: {
        nombre: '',
        email: '',
        contraseña: '',
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    let errores = { ...this.state.errores };

    // Realiza la validación aquí usando expresiones regulares
    switch (name) {
      case 'nombre':
        errores.nombre = value.length < 3 ? 'El nombre debe tener al menos 3 caracteres' : '';
        break;
      case 'email':
        // Utiliza la expresión regular para validar el correo electrónico
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        errores.email = emailRegex.test(value) ? '' : 'Correo electrónico inválido';
        break;
      case 'contraseña':
        // Utiliza la expresión regular para validar la contraseña
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        errores.contraseña = passwordRegex.test(value) ? '' : 'La contraseña debe contener al menos 8 caracteres y al menos una letra y un número';
        break;
      default:
        break;
    }

    this.setState({
      [name]: value,
      errores,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Realiza acciones adicionales como enviar datos al servidor si la validación es exitosa
  };

  render() {
    const { nombre, email, contraseña, errores } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={nombre} onChange={this.handleChange} />
          {errores.nombre && <span>{errores.nombre}</span>}
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} />
          {errores.email && <span>{errores.email}</span>}
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="contraseña" value={contraseña} onChange={this.handleChange} />
          {errores.contraseña && <span>{errores.contraseña}</span>}
        </div>
        <button type="submit">Registrarse</button>
      </form>
    );
  }
}

export default RegistroForm;

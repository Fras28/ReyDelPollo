import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { asyncComandas, asyncGetProv, asyncLogIn, asyncProveedor } from '../../redux/slice';
import './LoginComponent.css'; // Importa tu archivo de estilos CSS

const LoginComponent = ({ onLoginSuccess }) => {
  const dispatch = useDispatch();
  const { comandas, usuarioComander } = useSelector((state) => state.alldata);
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false); // Estado para manejar la carga

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      // Activar el estado de carga
      setIsLoading(true);
  
      // Realizar el inicio de sesión
      await dispatch(asyncLogIn(credentials));
  
      // Si la acción asyncLogIn se resuelve correctamente y usuarioComander está definido, cerrar la modal
      if (usuarioComander) {
        setModalIsOpen(false);
      } 
  
      // Ejecutar la función onLoginSuccess si es necesario
      onLoginSuccess();
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      // Puedes manejar el error si es necesario
    }
     finally {
      // Desactivar el estado de carga independientemente de si la petición se realizó con éxito o no
      setIsLoading(false);
    }
  };




  return (
    <div className='bgModal' >
   <Modal
  isOpen={modalIsOpen && (comandas.length === 0 || !usuarioComander)}
  onRequestClose={() => setModalIsOpen(false)}
  contentLabel="Login Modal"
>
        <div className="login-container">
          <h2 className="login-heading">Log In</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="form-input"
              />
            </div>
            <button type="button" onClick={handleLogin} className="login-submit">
              Log in
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default LoginComponent;

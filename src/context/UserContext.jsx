import { createContext, useState } from 'react';
import { Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
 
  const navigate = useNavigate();

  const showToast = (message, variant) => {
    setToastMessage({ message, variant });
    setTimeout(() => setToastMessage(null), 3000);
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  const getUser = () => {
    return user;
  };

  const login = async (email, password) => {
    try {
      const URL = 'http://localhost:5000/api/auth/login';
      const payload = { email, password };
      const request = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!request.ok) {
        throw new Error('Error en el inicio de sesión');
      }
      
      const data = await request.json();
      showToast('Inicio de sesión exitoso', 'success');
      setUser(data);
      navigate('/');
    } catch (error) {
      console.log('err: ', error);
      showToast('Usuario y/o contraseña son incorrectos', 'danger');
    }
  };

  const register = async (email, password) => {
    try {
      const URL = 'http://localhost:5000/api/auth/register';
      const payload = { email, password };
      const request = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!request.ok) {
        throw new Error('Error en el registro');
      }

      const data = await request.json();
      showToast('Registro exitoso', 'success');
      setUser(data);
      navigate('/');
    } catch (error) {
      console.log('err: ', error);
      showToast('Hubo un error al intentar registrarte', 'danger');
    }
  };

  const profile = async () => {
    try {
      const URL = 'http://localhost:5000/api/auth/me';
      const request = await fetch(URL, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!request.ok) {
        throw new Error('Error al obtener el perfil');
      }

      const data = await request.json();
      return data;
    } catch (error) {
      console.log('err: ', error);
      return null;
    }
  };

  const contextState = {
    login,
    register,
    profile,
    logout,
    getUser,
  };

  return (
    <UserContext.Provider value={contextState}>
      {children}
      {toastMessage && (
        <Toast
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
          }}
          position="top-end"
          onClose={() => setToastMessage(null)}
          show={!!toastMessage}
          bg={toastMessage.variant.toLowerCase()}
          autohide
        >
          <Toast.Body className="text-white">{toastMessage.message}</Toast.Body>
        </Toast>
      )}
    </UserContext.Provider>
  );
};
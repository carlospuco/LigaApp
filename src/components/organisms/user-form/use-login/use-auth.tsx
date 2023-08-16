import React, { ReactNode, createContext, useContext, useState } from 'react';

interface AuthContextProps {
    isLoggedIn: boolean;
    token: string | null; // Especifica el tipo adecuado para token, por ejemplo, `string` o `string | null`
    login: (token: string) => void;
    logout: () => void;
  }
  
  
  export const AuthContext = createContext<AuthContextProps>({
    isLoggedIn: false,
    token: '',
    login: () => {},
    logout: () => {},
  });
// Crea el proveedor de autenticación
// Crea el proveedor de autenticación
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');
  
    // Función para iniciar sesión
    const login = (token: string) => {
      setIsLoggedIn(true);
      setToken(token);
    };
  
    // Función para cerrar sesión
    const logout = () => {
      setIsLoggedIn(false);
      setToken('');
    };
  
    // Expone los valores y las funciones del contexto
    const authValues: AuthContextProps = {
      isLoggedIn,
      token,
      login,
      logout,
    };
  
    return (
      <AuthContext.Provider value={authValues}>
        {children}
      </AuthContext.Provider>
    );
  };
  
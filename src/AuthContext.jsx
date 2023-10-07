import React, { createContext, useContext, useState } from "react";

// Create a context
const AuthContext = createContext();

// Create a provider
export function AuthProvider({ children }) {
  const [credentials, setCredentials] = useState({});
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ credentials, setCredentials, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

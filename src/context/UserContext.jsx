import { createContext, useState } from "react";

//crear el objeto context
export const UserContext = createContext(null);

//crear el provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Invitado",
    isLogin: false,
  });

  const logIn = (name) => setUser({ name, isLogin: true });
  const logOut = () => setUser({ name: "Invitado", isLogin: false });

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

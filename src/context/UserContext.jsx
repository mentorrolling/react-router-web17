import { createContext, useEffect, useState } from "react";

//crear el objeto context
export const UserContext = createContext(null);

//crear el provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Invitado",
    isLogin: false,
  });

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setUser({
        name: JSON.parse(localStorage.getItem("currentUser")),
        isLogin: true,
      });
    }
  }, []);

  const logIn = (name) => {
    setUser({ name, isLogin: true });
    localStorage.setItem("currentUser", JSON.stringify(name));
  };
  const logOut = () => {
    setUser({ name: "Invitado", isLogin: false });
    localStorage.removeItem("currentUser");
  };

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

/*
Imagina que tienes una caja de juguetes mágicos en tu casa. Dentro de esa caja hay cosas que todos tus amigos quieren usar: lápices de colores, caramelos, o un control remoto para jugar.

Normalmente, si un amigo quiere un lápiz, tú tendrías que pasárselo de mano en mano por cada persona que esté en la fila. Eso es incómodo y lento.

Pero con la caja mágica (Context), no necesitas pasar nada: todos los amigos que estén jugando pueden abrir la caja directamente y sacar lo que necesiten.

Con Context: todos los componentes que estén dentro de la “caja mágica” pueden acceder a lo que hay adentro, sin que nadie tenga que pasarlo.

El Provider es como el dueño de la caja mágica. Es quien decide qué hay dentro de la caja y se lo ofrece a todos los amigos que estén jugando dentro de su casa.
*/

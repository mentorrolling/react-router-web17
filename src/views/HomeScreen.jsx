import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const HomeScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Bienvenido {user.name}!!</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

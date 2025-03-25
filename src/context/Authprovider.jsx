import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../components/Localstorage";

export const Authcontext = createContext();

function Authprovider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employee, admin } = getLocalStorage();
    setUserData({ employee, admin });
  }, []);

  return (
    <div>
      <Authcontext.Provider value={userData}>{children}</Authcontext.Provider>
    </div>
  );
}

export default Authprovider;

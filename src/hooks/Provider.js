import { createContext, useContext, useEffect, useState } from "react";
import {
  getDataFromAs,
  removeDataFromAs,
  saveDataToAs,
} from "../libs/async-storage.helper";

const AppStateContext = createContext(null);

export const AppStateProvider = (props) => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [registros, setRegistros] = useState([]);
  const [lastRegister, setLastRegister] = useState(null);

  useEffect(() => {
    void getDataFromStorages();
  }, []);

  const getDataFromStorages = async () => {
    const user = (await getDataFromAs("user")) || null;
    const registros = (await getDataFromAs("registros")) || [];
    const lastRegister = (await getDataFromAs("lastRegister")) || null;
    setUser(user);
    setRegistros(registros);
    setLastRegister(lastRegister);
    setIsInitializing(false);
  };

  const saveUser = (user) => {
    setUser(user);
    void saveDataToAs("user", user);
  };
  const saveRegistros = (registros) => {
    setRegistros(registros);
    void saveDataToAs("registros", registros);
  };
  const saveNewRegistro = (registro) => {
    saveLastRegister(new Date().toLocaleDateString());
    const newRegistros = [...registros, registro];
    saveRegistros(newRegistros);
  };
  const alreadyHaveARegisterToday = () =>
    lastRegister === new Date().toLocaleDateString();
  const saveLastRegister = (lastRegister) => {
    setLastRegister(lastRegister);
    void saveDataToAs("lastRegister", lastRegister);
  };
  const resetEverything = () => {
    void removeDataFromAs("user");
    void removeDataFromAs("registros");
    void removeDataFromAs("lastRegister");
  };

  return (
    <AppStateContext.Provider
      value={{
        user,
        saveUser,
        registros,
        saveRegistros,
        isInitializing,
        lastRegister,
        saveLastRegister,
        saveNewRegistro,
        alreadyHaveARegisterToday,
        resetEverything,
      }}
    >
      {props.children}
    </AppStateContext.Provider>
  );
};

export function useAppContext() {
  const context = useContext(AppStateContext);
  if (!context)
    throw new Error("useAppContext must be used within a AppStateProvider");
  return context;
}

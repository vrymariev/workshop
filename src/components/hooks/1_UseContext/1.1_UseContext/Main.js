import React, {useState} from "react";
import { Alert } from "./Alert";
import { UserButton } from "./UserBtn";

export const AlertContext = React.createContext({
  alert: false,
  toggleShow: () => {}
});

export const Main = () => {
  const [alert, setAlert] = useState(false);

  const toggleShow = () => {
    setAlert(!alert);
  };

  return (
    <div>
      <AlertContext.Provider value={{alert, toggleShow}}>
        <h1>UseContext</h1>
        <Alert />
        <UserButton />
      </AlertContext.Provider>
    </div>
  );
};

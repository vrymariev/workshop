import { useContext } from "react";
import { AlertContext } from "./Main"


export const Alert = () => {
  const {alert: isShow} = useContext(AlertContext);

  if (!isShow) return null;

  return <div className="alert alert-danger">Попередження!</div>;
};

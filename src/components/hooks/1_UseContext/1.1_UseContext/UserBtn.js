import { useContext } from "react";
import { AlertContext } from "./Main"


export const UserButton = () => {
  const {toggleShow: onClick} = useContext(AlertContext);

  return (
    <div>
      <button type="button" className="btn btn-success" onClick={onClick}>
        Display alert
      </button>
    </div>
  );
};
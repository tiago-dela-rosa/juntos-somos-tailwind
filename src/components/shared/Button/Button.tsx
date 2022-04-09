import { ReactNode } from "react";
import "./Button.style.css";

interface IButton {
  type: string;
  cName?: string;
  children?: ReactNode;
}

const buttonType: any = {
  primary: "button-primary",
  transparent: "button-transparent",
};

export default function Button(props: IButton) {
  return (
    <button
      className={`${buttonType[props.type]} ${props.cName ? props.cName : ""}`}
    >
      {props.children}
    </button>
  );
}

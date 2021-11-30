import { ButtonHTMLAttributes } from "react";

import whatsapp from "../images/whatsapp.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";

import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const Button = (props: ButtonProps) => {
  const handleSrc = (text: string) => {
    switch (text) {
      case "WhatsApp":
        return whatsapp;
      case "Facebook":
        return facebook;
      case "Instagram":
        return instagram;
    }
  };

  return (
    <button {...props}>
      {props.text}
      <img src={handleSrc(props.text)} alt={`Ícone do ${props.text}`} />
    </button>
  );
};

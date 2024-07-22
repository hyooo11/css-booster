import React, { FC, ReactNode, CSSProperties } from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "danger";
  style?: CSSProperties;
}

const Button: FC<ButtonProps> = ({ text, variant, style = {} }) => {
  return (
    <button
      className={`${styles.button} ${
        variant ? styles[variant] : styles.primary
      }`}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;

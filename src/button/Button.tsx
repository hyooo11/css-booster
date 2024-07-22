import React, { FC, ReactNode, CSSProperties } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  style?: CSSProperties;
}

const Button: FC<ButtonProps> = ({ children, variant, style = {} }) => {
  return (
    <button
      className={`${styles.button} ${
        variant ? styles[variant] : styles.primary
      }`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;

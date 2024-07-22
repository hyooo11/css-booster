import React, { FC, ReactNode, CSSProperties } from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary" | "danger" | "success";
  style?: CSSProperties;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, variant, style }) => {
  return (
    <button
      className={`${styles.button} ${
        variant ? styles[variant] : styles.default
      }`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;

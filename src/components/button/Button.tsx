import React, { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";
type Props = {
	variant?: "primary" | "secondary" | "danger" | "outline" | "ghost";
	size?: "sm" | "md" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ variant = "primary", size = "md", className, ...props }: Props) {
	return (
		<button {...props} className={`${styles.btn} ${styles[variant]} ${styles[size]} ${className}`}>
			{props.children}
		</button>
	);
}

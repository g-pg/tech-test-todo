import { useEffect, useState } from "react";
import styles from "./alert-modal.module.scss";

type Props = {
	title?: string;
	description?: string;
	show: boolean;
	children?: React.ReactNode;
	className?: string;
	onConfirm?: () => void;
	onCancel?: () => void;
};

export default function AlertModal({ title, description, show, children, className }: Props) {
	if (!show) {
		return null;
	}

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (show) {
			setTimeout(() => setIsVisible(true), 10); // Delay for triggering CSS transition
		} else {
			setIsVisible(false);
		}
	}, [show]);

	return (
		<>
			<div className={`${styles.background} ${isVisible ? styles.show : ""}`}></div>
			<div className={`${styles.wrapper} ${className} ${isVisible ? styles.show : ""}`}>
				{title && <h3 className={styles.title}>{title}</h3>}
				{description && <p className={styles.description}>{description}</p>}
				{children}
			</div>
		</>
	);
}

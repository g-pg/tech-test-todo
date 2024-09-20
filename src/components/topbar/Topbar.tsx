"use client";
import FocalPointLogo from "@/assets/logo.svg";
import styles from "./topbar.module.scss";
import { formatDateToText } from "@/utils/dateFormatter";

export default function Topbar() {
	const today = new Date();
	return (
		<>
			<div className={`container ${styles.wrapper}`}>
				<div className={styles.logoWrapper}>
					<FocalPointLogo />
					<h1>Focal Point</h1>
				</div>
				<p className={styles.userWelcome}>Bem-vindo de volta, Marcus</p>
				<p className={styles.date}>{formatDateToText(today)}</p>
			</div>
		</>
	);
}

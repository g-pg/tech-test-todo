import React, { InputHTMLAttributes } from "react";
import styles from "./checkbox.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function CheckBox({ ...props }: Props) {
	return (
		<div className={styles.checkboxWrapper}>
			<input {...props} className={styles.inpCbx} type="checkbox" />
			<label className={styles.cbx} htmlFor="morning">
				<svg width="12px" height="10px">
					<use xlinkHref="#check-4"></use>
				</svg>
			</label>
			<symbol id="check-4" viewBox="0 0 12 10">
				<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
			</symbol>
		</div>
	);
}

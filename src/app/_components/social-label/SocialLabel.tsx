import React from "react";
import styles from "./social-label.module.scss";

import LnIcon from "@/assets/icons/ln.svg";
import GhIcon from "@/assets/icons/gh.svg";

export default function SocialLabel() {
	return (
		<div className={styles.wrapper}>
			<a href="" target="_blank">
				<GhIcon />
			</a>
			<a href="https://www.linkedin.com/in/ggusso/" target="_blank">
				<LnIcon />
			</a>
		</div>
	);
}

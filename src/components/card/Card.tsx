import styles from "./card.module.scss";

type Props = {
	className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
export default function Card({ className, children }: Props) {
	return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
}

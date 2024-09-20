import TrashcanIcon from "@/assets/icons/trash-can.svg";
import Image from "next/image";
import styles from "./task-item.module.scss";
import Button from "@/components/button/Button";
import DeleteTodoModal from "@/app/_components/delete-todo/DeleteTodoModal";
import { useState } from "react";

type Props = {
	id: number;
	title: string;
	done: boolean;
	onDelete: () => void;
	onCheck: () => void;
};
export default function TaskItem({ id, title, done, onDelete, onCheck }: Props) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.checkboxWrapper}>
					<input
						className={styles.checkbox}
						type="checkbox"
						id="item"
						checked={done}
						onChange={onCheck}
					/>
					<p className={done ? styles.done : ""}>{title}</p>
				</div>
				<Button
					variant="ghost"
					className={styles.trashBtn}
					size="sm"
					onClick={(e) => {
						e.stopPropagation();
						setShowModal(true);
					}}
				>
					<TrashcanIcon />
				</Button>
			</div>
			<DeleteTodoModal show={showModal} setShow={setShowModal} onDelete={onDelete} />
		</>
	);
}

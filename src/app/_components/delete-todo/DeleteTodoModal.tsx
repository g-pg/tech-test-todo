import Button from "@/components/button/Button";
import AlertModal from "@/components/modal/AlertModal";
import React from "react";
import styles from "./delete-todo-modal.module.scss";

type Props = {
	show: boolean;
	setShow: (show: boolean) => void;
	onDelete: () => void;
};

export default function DeleteTodoModal({ show, setShow, onDelete }: Props) {
	if (!show) {
		return null;
	}

	function handleDelete() {
		onDelete();
		setShow(false);
	}

	return (
		<AlertModal
			show={show}
			title="Deletar tarefa"
			className={styles.modal}
			description="Tem certeza de que você deseja deletar essa tarefa?"
		>
			<div className={styles.btnsWrapper}>
				<Button variant="secondary" onClick={() => setShow(false)}>
					Cancelar
				</Button>
				<Button variant="danger" onClick={handleDelete}>
					Deletar
				</Button>
			</div>
		</AlertModal>
	);
}

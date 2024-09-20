import Button from "@/components/button/Button";
import AlertModal from "@/components/modal/AlertModal";
import React from "react";
import styles from "./add-todo-modal.module.scss";

type Props = {
	show: boolean;
	setShow: (show: boolean) => void;
	addTodo: (title: string) => void;
};

export default function AddTodoModal({ show, setShow, addTodo }: Props) {
	if (!show) {
		return null;
	}

	const [input, setInput] = React.useState("");

	//Helpers
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!isTodoValid(input)) {
			return;
		}
		addTodo(input);
		setShow(false);
	}

	function handleKeydown(e: React.KeyboardEvent) {
		if (e.key === "Enter") {
			handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
		}
	}

	return (
		<AlertModal show={show} title="Nova tarefa" className={styles.modal}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.formItem}>
					<label htmlFor="title">Título</label>
					<input
						type="text"
						className={styles.input}
						placeholder="Digite"
						max={50}
						maxLength={50}
						id="name"
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={handleKeydown}
					/>
				</div>
				<div className={styles.btnsWrapper}>
					<Button variant="secondary" onClick={() => setShow(false)}>
						Cancelar
					</Button>
					<Button variant="primary" type="submit">
						Adicionar
					</Button>
				</div>
			</form>
		</AlertModal>
	);
}

function isTodoValid(title: string) {
	const t = title.trim();

	if (t === "" || t.length > 50) {
		return false;
	}

	return true;
}

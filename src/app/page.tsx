"use client";
import Card from "@/components/card/Card";
import styles from "./page.module.scss";
import TaskItem from "@/app/_components/task-item/TaskItem";
import Button from "@/components/button/Button";
import useTodos, { Todo } from "@/hooks/useTodos";
import { useState } from "react";
import AddTodoModal from "./_components/add-todo/AddTodoModal";
import CheckedIcon from "@/assets/icons/checked.svg";
import SocialLabel from "./_components/social-label/SocialLabel";

export default function Home() {
	//States
	const [showAddTodo, setShowAddTodo] = useState(false);

	//Data
	const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();
	const doneTodos: Todo[] = [];
	const pendingTodos: Todo[] = [];
	todos.forEach((todo) => {
		todo.done ? doneTodos.push(todo) : pendingTodos.push(todo);
	});

	return (
		<>
			<div className={`${styles.pageWrapper} container`}>
				<Card className={styles.todoCard}>
					<p className={styles.title}>Suas tarefas de hoje</p>
					{pendingTodos.length > 0 ? (
						pendingTodos.map((todo) => (
							<TaskItem
								key={todo.id}
								id={todo.id}
								done={todo.done}
								title={todo.title}
								onCheck={() => toggleTodo(todo.id)}
								onDelete={() => deleteTodo(todo.id)}
							/>
						))
					) : (
						<Card className={styles.emptyCard}>
							<p>Nenhuma tarefa pendente</p>
							<CheckedIcon />
						</Card>
					)}
					{doneTodos.length > 0 && <p className={styles.title}>Tarefas finalizadas</p>}
					{doneTodos.map((todo) => (
						<TaskItem
							key={todo.id}
							id={todo.id}
							done={todo.done}
							title={todo.title}
							onCheck={() => toggleTodo(todo.id)}
							onDelete={() => deleteTodo(todo.id)}
						/>
					))}
				</Card>
				<Button style={{ marginTop: "1rem" }} onClick={() => setShowAddTodo(true)}>
					Adicionar nova tarefa
				</Button>
				<AddTodoModal show={showAddTodo} setShow={setShowAddTodo} addTodo={addTodo} />
			</div>
			<SocialLabel />
		</>
	);
}

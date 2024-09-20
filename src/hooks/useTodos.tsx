"use client";
import LocalStorageManager from "@/services/LocalStorageManager";
import { useEffect, useState } from "react";

export type Todo = {
	id: number;
	title: string;
	done: boolean;
};

const localStorageManager = new LocalStorageManager<Todo[]>("todos", []);

export default function useTodos() {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		setTodos(localStorageManager.get() || []);
	}, []);

	function addTodo(title: string) {
		const todo = {
			id: Date.now(),
			title,
			done: false,
		};

		const newTodos = [...todos, todo];
		setTodos(newTodos);
		localStorageManager.set(newTodos);
	}

	function deleteTodo(id: number) {
		const newTodos = todos.filter((todo) => todo.id !== id);
		localStorageManager.set(newTodos);
		setTodos(newTodos);
	}

	function toggleTodo(id: number) {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					done: !todo.done,
				};
			}
			return todo;
		});

		setTodos(newTodos);
		localStorageManager.set(newTodos);
	}

	return { todos, addTodo, deleteTodo, toggleTodo };
}

import { Component, OnInit } from "@angular/core";
import { ViewSelectSnapshot } from "@ngxs-labs/select-snapshot";
import { Store } from "@ngxs/store";
import { Todo } from "../models";
import { CompleteTodo, CreateTodo, DeleteTodo } from "../todo-list.actions";
import { TodoListState } from "../todo-list.state";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
    newTodoValue = "";

    @ViewSelectSnapshot(TodoListState.todos)
    todos: Todo[];

    constructor(private readonly store: Store) {}

    ngOnInit(): void {}

    onDoneClick(todoId: string) {
        const action = new CompleteTodo(todoId);
        this.store.dispatch(action);
    }

    onDeleteClick(todoId: string) {
        const action = new DeleteTodo(todoId);
        this.store.dispatch(action);
    }

    onAddTodo() {
        const action = new CreateTodo(this.newTodoValue);
        this.store.dispatch(action);
        this.newTodoValue = "";
    }
}

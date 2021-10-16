import { Component, OnInit } from "@angular/core";
import { ViewSelectSnapshot } from "@ngxs-labs/select-snapshot";
import { Store } from "@ngxs/store";
import { Todo } from "../models";
import { CompleteTodo, DeleteTodo } from "../todo-list.actions";
import { TodoListState } from "../todo-list.state";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
    @ViewSelectSnapshot(TodoListState.todos)
    todos: Todo[];

    constructor(private readonly store: Store) {}

    ngOnInit(): void {}

    onDoneClick(todoId: string) {
        const action = new CompleteTodo();
        action.id = todoId;
        this.store.dispatch(action);
    }

    onDeleteClick(todoId: string) {
        const action = new DeleteTodo();
        action.id = todoId;
        this.store.dispatch(action);
    }
}

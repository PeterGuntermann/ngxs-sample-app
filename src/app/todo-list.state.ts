import { Injectable } from "@angular/core";
import { Selector, State } from "@ngxs/store";
import { Todo } from "./models";

export interface TodoListStateModel {
    todos: Todo[];
}

const DummyTodos = [
    new Todo("Wäsche aufhängen"),
    new Todo("Spülen"),
    new Todo("Staubsaugen"),
    new Todo("Zimmer aufräumen"),
    new Todo("Rasen mähen"),
];

export const TodoListStateDefaults: TodoListStateModel = {
    todos: DummyTodos,
};

@State<TodoListStateModel>({
    name: "todoList",
    defaults: TodoListStateDefaults,
})
@Injectable()
export class TodoListState {
    @Selector()
    static todos(state: TodoListStateModel): Todo[] {
        return state.todos;
    }
}

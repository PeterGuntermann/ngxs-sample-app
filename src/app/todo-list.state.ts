import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Todo } from "./models";
import { CompleteTodo } from "./todo-list.actions";

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

    @Action(CompleteTodo)
    completeTodo(context: StateContext<TodoListStateModel>, action: CompleteTodo) {
        const state = context.getState();
        const updatedTodos = state.todos.map((todo) =>
            todo.id !== action.id ? todo : <Todo>{ ...todo, completed: true }
        );
        context.patchState({ todos: updatedTodos });
    }
}

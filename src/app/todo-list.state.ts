import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Todo } from "./models";
import { CompleteTodo, CreateTodo, DeleteTodo } from "./todo-list.actions";

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

    @Action(CreateTodo)
    createTodo(context: StateContext<TodoListStateModel>, action: CreateTodo) {
        const state = context.getState();
        const newTodo = new Todo(action.todoText);
        const updatedTodos = [...state.todos, newTodo];
        context.patchState({ todos: updatedTodos });
    }

    @Action(CompleteTodo)
    completeTodo(context: StateContext<TodoListStateModel>, action: CompleteTodo) {
        const state = context.getState();
        const updatedTodos = state.todos.map((todo) =>
            todo.id !== action.todoId ? todo : <Todo>{ ...todo, completed: true }
        );
        context.patchState({ todos: updatedTodos });
    }

    @Action(DeleteTodo)
    deleteTodo(context: StateContext<TodoListStateModel>, action: DeleteTodo) {
        const state = context.getState();
        const updatedTodos = [];
        state.todos.forEach((todo) => {
            if (todo.id !== action.todoId) {
                updatedTodos.push(todo);
            }
        });
        context.patchState({ todos: updatedTodos });
    }
}

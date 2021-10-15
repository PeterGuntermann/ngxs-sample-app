import { Injectable } from "@angular/core";
import { Selector, State } from "@ngxs/store";
import { Todo } from "./models";

export interface TodoListStateModel {
    todos: Todo[];
}

@State<TodoListStateModel>({
    name: "todoList",
    defaults: {
        todos: [],
    },
})
@Injectable()
export class TodoListState {
    @Selector()
    static todos(state: TodoListStateModel): Todo[] {
        return state.todos;
    }
}

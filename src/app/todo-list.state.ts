import { Injectable } from "@angular/core";
import { Selector, State } from "@ngxs/store";

export interface TodoListStateModel {
    dummy: string;
}

@State<TodoListStateModel>({
    name: "todoList",
    defaults: {
        dummy: "dummy",
    },
})
@Injectable()
export class TodoListState {
    @Selector()
    static dummy(state: TodoListStateModel): string {
        return state.dummy;
    }
}

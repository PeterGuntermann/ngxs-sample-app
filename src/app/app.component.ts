import { Component } from "@angular/core";
import { SelectSnapshot, ViewSelectSnapshot } from "@ngxs-labs/select-snapshot";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { TodoListState } from "./todo-list.state";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    @Select(TodoListState.dummy)
    public dummy$: Observable<string> | undefined;

    @SelectSnapshot(TodoListState.dummy)
    dummySnapshot: string;

    @ViewSelectSnapshot(TodoListState.dummy)
    dummyViewSnapshot: string;

    constructor(private store: Store) {}
}

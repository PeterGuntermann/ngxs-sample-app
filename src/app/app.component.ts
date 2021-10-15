import { Component } from "@angular/core";
import { SelectSnapshot, ViewSelectSnapshot } from "@ngxs-labs/select-snapshot";
import { Select } from "@ngxs/store";
import { TodoListState } from "./todo-list.state";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    @Select(TodoListState.dummy)
    dummy$: any;

    @SelectSnapshot(TodoListState.dummy)
    dummySnapshot: any;

    @ViewSelectSnapshot(TodoListState.dummy)
    dummyViewSnapshot: any;

    constructor() {
        this.dummy$.subscribe((s: any) => console.log(s));
    }
}

import { Component } from "@angular/core";
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

    constructor() {
        this.dummy$.subscribe((s: any) => console.log(s));
    }
}

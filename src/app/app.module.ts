import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxsModule } from "@ngxs/store";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { TodoListState } from "./todo-list.state";

@NgModule({
    declarations: [AppComponent],
    imports: [
        NgxsModule.forRoot([TodoListState], {
            developmentMode: !environment.production,
        }),
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

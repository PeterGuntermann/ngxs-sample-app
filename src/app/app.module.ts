import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxsSelectSnapshotModule } from "@ngxs-labs/select-snapshot";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsModule } from "@ngxs/store";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { TodoListState } from "./todo-list.state";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NgxsModule.forRoot([TodoListState], {
            developmentMode: !environment.production,
        }),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsSelectSnapshotModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

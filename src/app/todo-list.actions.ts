const stateName = "TodoList";
const actionType = (actionName) => `[${stateName}] ${actionName}`;

export class CompleteTodo {
    static readonly type = actionType("Complete Todo");
    id: string;
}
const stateName = "TodoList";
const actionType = (actionName) => `[${stateName}] ${actionName}`;

export class CompleteTodo {
    static readonly type = actionType("Complete Todo");

    constructor(public todoId: string) {}
}

export class DeleteTodo {
    static readonly type = actionType("Delete Todo");

    constructor(public todoId: string) {}
}

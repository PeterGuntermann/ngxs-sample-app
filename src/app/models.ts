export class Todo {
    readonly id: string;

    constructor(public text: string, public completed: boolean = false) {
        this.id = Math.random().toString().slice(2, 15);
    }
}

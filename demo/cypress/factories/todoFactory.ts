

export const createTodo = (values?: Partial<Todo>) => {
    return {
        task: 'Nog veel meer boodschappen doen',
        dueDate: new Date(),
        isDone: true,
        ...values
    }
}

interface Todo {
    task: string;
    dueDate: Date;
    isDone: boolean;
}
let TaskStore = {

    rows: [
        {name: "Planned", tasks: [{ id: 0, description: "Add a new task"}]}, 
        {name: "In Progress", tasks: []}, 
        {name: "Completed", tasks: []}
    ],

    subscribers: [],
    subscriber: function (callback) {
        this.subscribers.push(callback);
    },
    updateSubscribers: function () {
        this.subscribers.forEach((callback) => {
            callback();
        });
    },

    addTask: function (addCommand) {
        let tempTasks = this.rows[addCommand.row].tasks;

        this.rows[addCommand.row].tasks = [
            ...tempTasks, 
            {id: Math.floor(Math.random() * 100000000000), 
            description: addCommand.description
            }
        ];

        this.updateSubscribers();
    },
    moveTask: function (moveCommand) {
        let curRowTasks = this.rows[moveCommand.curRow].tasks;

        let task = curRowTasks.slice(moveCommand.task.index, moveCommand.task.index+1)[0];

        let filteredRow = curRowTasks.filter( (task, index ) => index !== moveCommand.task.index);

        this.rows[moveCommand.curRow].tasks = filteredRow;

        this.rows[moveCommand.newRow].tasks = [
            ...this.rows[moveCommand.newRow].tasks, task
        ];

        this.updateSubscribers();
    }
};

function AddCommand(row, description) {
    this.row = row;
    this.description = description;
}

function MoveCommand(curRow, newRow, task) {
    this.curRow = curRow;
    this.newRow = newRow;
    this.task = task;
}

export {TaskStore, AddCommand, MoveCommand};
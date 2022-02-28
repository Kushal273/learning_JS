let input = prompt('What would you like to do?')
const todos = ['collect chcken eggs', 'walk dogs']
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("********")
        for (i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log("********")
    } else if (input === 'new') {
        const newToDo = prompt('Alright, What is the new ToDo?');
        todos.push(newToDo);
        console.log(`${newToDo} addes to the list.`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }


        input = prompt("What would you like to do?")

    }
}
console.log("Ok. You quit the app.")
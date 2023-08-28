const todoList = [
    //{name: 'do laundry',
    //dueDate: '2023-08-20'},

    //{name: 'fix bed',
    //dueDate: '2023-08-21'}
];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    console.log(todoList)

    for(let i = 0; i < todoList.length;i++){
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
        <div>${name} </div>
        <div>${dueDate}</div>
        
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        " class="delete-todo-button">Delete</button>
        
        `
        todoListHTML += html;
}

    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML
}


function addTodo(){
    const inputElement = document.querySelector('.js-name-input');

    const name = inputElement.value;

    const dateInputElement = document.
    querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value;

    

    todoList.push(
        {
            name,
            dueDate
        }
    );
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}
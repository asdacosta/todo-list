const displayTodayHeader = function () {
    const header = document.querySelector('h2');
    header.textContent = 'Today';
};

const createAddTask = function () {
    const taskSection = document.querySelector('main > section');
    const addTaskDiv = document.createElement('div');
    const plusSpan = document.createElement('span');
    const addTaskSpan = document.createElement('span');

    addTaskDiv.style.border = '1px solid white';
    addTaskDiv.style.borderRadius = '20px'
    addTaskDiv.style.height = '50px';
    addTaskDiv.style.display = 'flex';
    addTaskDiv.style.alignItems = 'center';
    addTaskDiv.style.width = '55%';

    plusSpan.textContent = '+';
    plusSpan.style.fontSize = '2rem';
    plusSpan.style.paddingLeft = '10px';
    addTaskSpan.textContent = 'Add a task';
    addTaskSpan.style.paddingLeft = '10px';

    addTaskDiv.appendChild(plusSpan);
    addTaskDiv.appendChild(addTaskSpan);
    taskSection.appendChild(addTaskDiv);
}

export {createAddTask, displayTodayHeader};
const displayHeader = function (textContent) {
    const header = document.querySelector('h2');

    switch(textContent) {
        case 'Today':
            header.textContent = 'Today';
            break;
        case 'Upcoming':
            header.textContent = 'Upcoming';
            break;
        case 'Consolidated Tasks':
            header.textContent = 'Consolidated Tasks';
            break;
        case 'Personal':
            header.textContent = 'Personal';
            break;
        case 'Work':
            header.textContent = 'Work';
            break;
        case 'Family':
            header.textContent = 'Other';
            break;
    }
};

const restartCountForModules = (function () {
    const todayDiv = document.querySelectorAll('.today');
    const upcomingDiv = document.querySelectorAll('.upcoming');

    todayDiv.forEach((item) => {
        item.addEventListener('click', () => {
            todayTasksCount = 0;
        })
    })
    upcomingDiv.forEach((item) => {
        item.addEventListener('click', () => {
            upcomingTasksCount = 0;
        })
    })
})();

let todayTasksCount = 0;
const createTodayAddTask = function () {
    const taskSection = document.querySelector('main > section');
    const addTaskDiv = document.createElement('div');
        addTaskDiv.classList.add('addTaskDiv');
    const plusSpan = document.createElement('span');
    const addTaskSpan = document.createElement('span');

    plusSpan.textContent = '+';
    plusSpan.style.fontSize = '2rem';
    plusSpan.style.paddingLeft = '10px';
    addTaskSpan.textContent = 'Add a task';
    addTaskSpan.style.paddingLeft = '10px';

    addTaskDiv.appendChild(plusSpan);
    addTaskDiv.appendChild(addTaskSpan);
    taskSection.appendChild(addTaskDiv);

    const addNewTask = (function () {
        const isFullSpan = document.querySelector('main > span');

            addTaskDiv.addEventListener('click', () => {
                if ( todayTasksCount !== 5) {
                    generateTask('Today');
                    todayTasksCount += 1;
                } else {
                    isFullSpan.textContent = "📋 Don't set many tasks or procastinate current ones. You can only add 5 daily tasks. Complete a task and delete it to add a new one.";
                    isFullSpan.style.fontSize = '0.8rem';
                }
            })
    })();
}

let upcomingTasksCount = 0;
const createUpcomingAddTask = function () {
    const taskSection = document.querySelector('main > section');
    const addTaskDiv = document.createElement('div');
        addTaskDiv.classList.add('addTaskDiv');
    const plusSpan = document.createElement('span');
    const addTaskSpan = document.createElement('span');

    plusSpan.textContent = '+';
    plusSpan.style.fontSize = '2rem';
    plusSpan.style.paddingLeft = '10px';
    addTaskSpan.textContent = 'Add a task';
    addTaskSpan.style.paddingLeft = '10px';

    addTaskDiv.appendChild(plusSpan);
    addTaskDiv.appendChild(addTaskSpan);
    taskSection.appendChild(addTaskDiv);

    const addNewTask = (function () {
        const isFullSpan = document.querySelector('main > span');

            addTaskDiv.addEventListener('click', () => {
                if ( upcomingTasksCount !== 5) {
                    generateTask('Date');
                    upcomingTasksCount += 1;
                } else {
                    isFullSpan.textContent = "📋 Don't set many tasks or procastinate current ones. You can only add 5 daily tasks. Complete a task and delete it to add a new one.";
                    isFullSpan.style.fontSize = '0.8rem';
                }
            })
    })();
}


function generateTask (date) {
    const taskSection = document.querySelector('main > section');

    const taskDiv = document.createElement('div');
        taskDiv.classList.add('taskDiv');
    const radio = document.createElement('input');
    const textInput = document.createElement('input');
    const dueDate = document.createElement('span');
    const deleteTask = document.createElement('span');
        deleteTask.classList.add('deleteTask');

    const divArray = [radio, textInput, dueDate, deleteTask];

    radio.setAttribute('type', 'checkbox');
    radio.setAttribute('value', 'check');
    radio.style.gridRow = '1 / -1';
    radio.style.width = '1.5rem';
    radio.style.paddingLeft = '20px';

    textInput.setAttribute('type', 'text');
    textInput.setAttribute('name', 'tasks');
    textInput.style.gridRow = '1 / 2';
    textInput.style.gridColumn = '2 / span 2';

    dueDate.textContent = date;
    dueDate.style.fontSize = '0.8rem';
    dueDate.style.background = 'grey';
    dueDate.style.gridRow = '2 / 3';
    dueDate.style.gridColumn = '2 / 3';
    dueDate.style.borderRadius = '20px';
    dueDate.style.textAlign = 'center';

    deleteTask.textContent = 'Delete';
    deleteTask.style.fontSize = '0.8rem';
    deleteTask.style.background = 'red';
    deleteTask.style.gridRow = '1 / -1';
    deleteTask.style.gridColumn = 'span 1';
    deleteTask.style.alignSelf = 'center';
    deleteTask.style.borderRadius = '20px';
    deleteTask.style.textAlign = 'center';
    deleteTask.style.cursor = 'pointer';

    divArray.forEach((element) => {
        taskDiv.appendChild(element);
    })
    taskSection.appendChild(taskDiv);

    const deleteDiv = (function () {
        const isFullSpan = document.querySelector('main > span');
        deleteTask.addEventListener('click', () => {
            taskSection.removeChild(taskDiv);
            if (date === 'Today') {
                todayTasksCount -= 1;
            } else if (date === 'Date') {
                upcomingTasksCount -= 1;
            }
            isFullSpan.textContent = '';
        })
    })()
}

export {displayHeader, createTodayAddTask, createUpcomingAddTask, generateTask};
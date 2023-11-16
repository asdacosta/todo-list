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

const createAddTaskElements = function (sectionClass) {
    const moduleSection = document.querySelector(`${sectionClass}`);
    const addTaskDiv = document.createElement('div');
        addTaskDiv.classList.add('addTaskDiv');
    const plusSpan = document.createElement('span');
    const addTaskSpan = document.createElement('span');

    plusSpan.textContent = '+';
    plusSpan.style.fontSize = '2rem';
    addTaskSpan.textContent = 'Add a task';

    addTaskDiv.appendChild(plusSpan);
    addTaskDiv.appendChild(addTaskSpan);
    moduleSection.appendChild(addTaskDiv);
}

let todayTasksCount = 0;
const createTodayAddTask = function () {
    const callAddTask = (function () {
        createAddTaskElements('.today-module');
        const addTaskDiv = document.querySelector('.today-module .addTaskDiv');

        return {addTaskDiv};
    })();

    const addNewTask = (function () {
        const isFullSpan = document.querySelector('main > span');
        const todayDialog = document.querySelector('.today-dialog');
        const todayButton = document.querySelector('.today-button');

            callAddTask.addTaskDiv.addEventListener('click', () => {
                if (todayTasksCount !== 5) {
                    todayDialog.showModal();
                    todayTasksCount += 1;
                } else {
                    isFullSpan.textContent = "📋 Don't set many tasks or procastinate current ones. You can only add 5 daily tasks. Complete a task and delete it to add a new one.";
                    isFullSpan.style.fontSize = '0.8rem';
                }
            })
            todayButton.addEventListener('click', (event) => {
                event.preventDefault();
                generateTask('.today-module', '.today-dialog');
                todayDialog.close();
            })
    })();
}

let upcomingTasksCount = 0;
const createUpcomingAddTask = function () {
    const callAddTask = (function () {
        createAddTaskElements('.upcoming-module');
        const addTaskDiv = document.querySelector('.upcoming-module .addTaskDiv');

        return {addTaskDiv};
    })();

    const addNewTask = (function () {
        const isFullSpan = document.querySelector('main > span');
        const upcomingDialog = document.querySelector('.upcoming-dialog');
        const upcomingButton = document.querySelector('.upcoming-button');

            callAddTask.addTaskDiv.addEventListener('click', () => {
                if (upcomingTasksCount !== 5) {
                    upcomingDialog.showModal();
                    upcomingTasksCount += 1;
                } else {
                    isFullSpan.textContent = "📋 Don't set many tasks or procastinate current ones. You can only add 5 daily tasks. Complete a task and delete it to add a new one.";
                    isFullSpan.style.fontSize = '0.8rem';
                }
            })
            upcomingButton.addEventListener('click', (event) => {
                event.preventDefault();
                generateTask('.upcoming-module', '.upcoming-dialog');
                upcomingDialog.close();
            })
    })();
}


function generateTask (sectionClass, dialogClass) {

    const createTaskElements = (function () {
        const taskSection = document.querySelector(`${sectionClass}`);
        const taskDiv = document.createElement('div');
        const check = document.createElement('input');
        const textInput = document.createElement('div');
        const dueDate = document.createElement('span');
        const description = document.createElement('span');
        const deleteTask = document.createElement('span');
        const isFullSpan = document.querySelector('main > span');
    
        taskDiv.classList.add('taskDiv');
        textInput.classList.add('textInput');
        dueDate.classList.add('dueDate');
        description.classList.add('description');
        deleteTask.classList.add('deleteTask');
    
        check.setAttribute('type', 'checkbox');
        check.setAttribute('value', 'check');
        description.textContent = 'Description';
        deleteTask.textContent = 'Delete';

        const appendTaskelements = (function () {
        const divArray = [check, textInput, dueDate, description, deleteTask];
            divArray.forEach((element) => {
                taskDiv.appendChild(element);
            })
            taskSection.appendChild(taskDiv);
        })();

        return {textInput, dueDate, deleteTask, taskSection, taskDiv, isFullSpan};
    })();

    const setValues = (function () {
        let dialogTaskValue = document.querySelector(`${dialogClass} #task`).value;
        let dialogSortValue = document.querySelector(`${dialogClass} #sort`).value;
        let dialogDueValue = document.querySelector(`${dialogClass} #due`).value;
            console.log(dialogDueValue);
        let dialogDescriptionValue = document.querySelector(`${dialogClass} #description`).value;

        createTaskElements.textInput.textContent = dialogTaskValue;
        if (sectionClass === '.today-module') {
            createTaskElements.dueDate.textContent = 'Today at ' + dialogDueValue;
        } else {
            createTaskElements.dueDate.textContent = dialogDueValue;
        }
    })();

    const deleteDiv = (function () {
        createTaskElements.deleteTask.addEventListener('click', () => {
            createTaskElements.taskSection.removeChild(createTaskElements.taskDiv);
            if (date === 'Today') {
                todayTasksCount -= 1;
            } else if (date === 'Date') {
                upcomingTasksCount -= 1;
            }
            createTaskElements.isFullSpan.textContent = '';
        })
    })();
}

export {displayHeader, createTodayAddTask, createUpcomingAddTask, generateTask};
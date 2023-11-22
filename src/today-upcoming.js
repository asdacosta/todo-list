import { setColor, chooseColorActive } from "./setting";

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
        case 'Settings':
            header.textContent = 'Settings';
            break;
    }
};

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
};

let consolidatedArray = ['', '']; // 0 index takes today module current content and 1 index takes upcoming module current content. Used empty strings to prevent display of undefined at consolidated tasks module (before clicks of other modules).
const updateConsolidatedWithOnlyTaskDivs = function (sectionClass) {
    const moduleSection = document.querySelector(`${sectionClass}`);
    const moduleCopy = document.createElement('div');
    moduleCopy.innerHTML = moduleSection.innerHTML;

    const divToRemove = moduleCopy.querySelector('.addTaskDiv');
    moduleCopy.removeChild(divToRemove);

    if (sectionClass === '.today-module') {
        consolidatedArray[0] = moduleCopy.innerHTML;
    } else {
        consolidatedArray[1] = moduleCopy.innerHTML;
    }
};

let categories = {personal: '', work: '', family: '', other: ''};
const updateCategories = function () {
    const consolidatedCopy = document.createElement('div');

    consolidatedCopy.innerHTML = consolidatedArray[0] + consolidatedArray[1];

    const consolidatedPersonal = consolidatedCopy.querySelectorAll('.personal');
    const consolidatedWork = consolidatedCopy.querySelectorAll('.work');
    const consolidatedFamily = consolidatedCopy.querySelectorAll('.family');
    const consolidatedOther = consolidatedCopy.querySelectorAll('.other');

    let personalDivs = '';
    let workDivs = '';
    let familyDivs = '';
    let otherDivs = '';

    consolidatedPersonal.forEach((element) => {
        personalDivs += element.outerHTML;
    })
    consolidatedWork.forEach((element) => {
        workDivs += element.outerHTML;
    })
    consolidatedFamily.forEach((element) => {
        familyDivs += element.outerHTML;
    })
    consolidatedOther.forEach((element) => {
        otherDivs += element.outerHTML;
    })

    categories.personal = personalDivs;
    categories.work = workDivs;
    categories.family = familyDivs;
    categories.other = otherDivs;
};

let todayTasksCount = 0;
const createTodayAddTask = function () {

    const callAddTask = (function () {
        createAddTaskElements('.today-module');
        const addTaskDiv = document.querySelector('.today-module .addTaskDiv');
        const moduleSection = document.querySelector('.today-module');

        return {addTaskDiv, moduleSection};
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
                    todayDialog.close();
                    isFullSpan.textContent = "📋 Avoid task overload or procrastination. Limit tasks to 5 daily; finish one and delete it to add a new task.";
                }
            })
            todayButton.addEventListener('click', (event) => {
                event.preventDefault();
                generateTask('.today-module', '.today-dialog');
                updateConsolidatedWithOnlyTaskDivs('.today-module');
                updateCategories();
                todayDialog.close();
            })
    })();
}

let upcomingTasksCount = 0;
const createUpcomingAddTask = function () {

    const callAddTask = (function () {
        createAddTaskElements('.upcoming-module');
        const addTaskDiv = document.querySelector('.upcoming-module .addTaskDiv');
        const moduleSection = document.querySelector('.upcoming-module');

        const colorAddTask = (function () {
            const emptySection = document.querySelector('nav > section:empty')
            const computedStyle = window.getComputedStyle(emptySection);
            let computedColor = computedStyle.backgroundColor;
        
            addTaskDiv.style.backgroundColor = `${computedColor}`;
        })();

        return {addTaskDiv, moduleSection};
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
                    upcomingDialog.close();
                    isFullSpan.textContent = "📋 Avoid task overload or procrastination. Limit tasks to 5 daily; finish one and delete it to add a new task.";
                }
            })
            upcomingButton.addEventListener('click', (event) => {
                event.preventDefault();
                generateTask('.upcoming-module', '.upcoming-dialog');
                updateConsolidatedWithOnlyTaskDivs('.upcoming-module');
                updateCategories();
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

        return {textInput, dueDate, description, deleteTask, taskSection, taskDiv, isFullSpan};
    })();

    colorGeneratedTasks();

    const setValues = (function () {
        let dialogTaskValue = document.querySelector(`${dialogClass} #task`).value;
        let dialogSortValue = document.querySelector(`${dialogClass} #sort`).value;
        let dialogDueValue = document.querySelector(`${dialogClass} #due`).value;
        let dialogDescriptionValue = document.querySelector(`${dialogClass} #description`).value;

        createTaskElements.textInput.textContent = dialogTaskValue;
        if (dialogTaskValue !== '' && dialogSortValue !== '' && dialogDueValue !== '') {
            createTaskElements.taskDiv.classList.add(dialogSortValue);
        }
        if (sectionClass === '.today-module') {
            createTaskElements.dueDate.textContent = 'Today at ' + dialogDueValue;
        } else {
            createTaskElements.dueDate.textContent = dialogDueValue;
        }

        return {dialogTaskValue, dialogSortValue, dialogDueValue, dialogDescriptionValue};
    })();

    const displayDescription = (function () {
        const descriptionBox = document.querySelector('main > div');
        const descriptionContent = document.querySelector('main > div > span');

        createTaskElements.description.addEventListener('mouseover', () => {
            descriptionBox.style.display = 'flex';
            descriptionContent.textContent = setValues.dialogDescriptionValue;
        })
        createTaskElements.description.addEventListener('mouseout', () => {
            descriptionBox.style.display = 'none';
            descriptionContent.textContent = '';
        })
    })();

    const removeTaskAndUpdateCount = function () {
        createTaskElements.taskSection.removeChild(createTaskElements.taskDiv);
        if (sectionClass === '.today-module') {
            todayTasksCount -= 1;
        } else {
            upcomingTasksCount -= 1;
        }
        setTimeout(() => {
            createTaskElements.isFullSpan.textContent = '';
        }, 2500);
    }

    const dontAddTaskWithPastDateOrTime = (function () {
        if (sectionClass === '.upcoming-module') {
            const upcomingDueDate = document.querySelector('input[type="date"]');
            const upcomingDueDateValue = new Date(upcomingDueDate.value).getTime();
            const currentTime = new Date().getTime();
            const currentDate = new Date().toISOString().split('T')[0];

            upcomingDueDate.setAttribute('min', currentDate);
            if (upcomingDueDateValue < currentTime) {
                removeTaskAndUpdateCount();
                createTaskElements.isFullSpan.textContent = 'We are living in the present. Kindly enter a current date.';
            }
        } else {
            const todayDueTime = document.querySelector('input[type="time"]');
            const todayDate = new Date();
            const todayDueTimeString = `${todayDate.toISOString().split('T')[0]}T${todayDueTime.value}`;
            const todayDueTimeValue = new Date(todayDueTimeString);

            if (todayDueTimeValue < todayDate) {
                removeTaskAndUpdateCount();
                createTaskElements.isFullSpan.textContent = 'We are living in the present. Kindly enter a current time.';
            }
        }
    })();

    const dontAddEmptyTask = (function () {
        if (setValues.dialogTaskValue === '' || setValues.dialogSortValue === '' || setValues.dialogDueValue === '') {
            removeTaskAndUpdateCount();
            createTaskElements.isFullSpan.textContent = 'Description is the only optional field.';
        }
    })();

    const deleteDiv = (function () {
        createTaskElements.deleteTask.addEventListener('click', () => {
            createTaskElements.taskSection.removeChild(createTaskElements.taskDiv);
            if (sectionClass === '.today-module') {
                todayTasksCount -= 1;
                updateConsolidatedWithOnlyTaskDivs('.today-module');
            } else if (sectionClass === '.upcoming-module') {
                upcomingTasksCount -= 1;
                updateConsolidatedWithOnlyTaskDivs('.upcoming-module');
            }
            createTaskElements.isFullSpan.textContent = '';

            setDialogNumber.dialogNumberTemplate();
        })
    })();

    const setDefaultColorIfNoneIsChosen = (function () {
        if (chooseColorActive !== true) {
            // setColor();
        }
    })();

    const setDialogNumber = (function () {
        function dialogNumberTemplate () {
            const todayDialogNumber = document.querySelector('.today-dialog  legend');
            const upcomingDialogNumber = document.querySelector('.upcoming-dialog legend');

            switch (todayTasksCount) {
                case 1:
                    todayDialogNumber.textContent = 'Second Task';
                    break;
                case 2:
                    todayDialogNumber.textContent = 'Third Task';
                    break;
                case 3:
                    todayDialogNumber.textContent = 'Fourth Task';
                    break;
                case 4:
                    todayDialogNumber.textContent = 'Final Task';
                    break;
            }

            switch (upcomingTasksCount) {
                case 1:
                    upcomingDialogNumber.textContent = 'Second Task';
                    break;
                case 2:
                    upcomingDialogNumber.textContent = 'Third Task';
                    break;
                case 3:
                    upcomingDialogNumber.textContent = 'Fourth Task';
                    break;
                case 4:
                    upcomingDialogNumber.textContent = 'Last Task';
                    break;
            }
        }
        dialogNumberTemplate();
        
        return {dialogNumberTemplate};
    })();
}

const colorGeneratedTasks = function () {
    const taskDivs = document.querySelectorAll('.taskDiv');
    const emptySection = document.querySelector('nav > section:empty')
    const computedStyle = window.getComputedStyle(emptySection);
    let computedColor = computedStyle.backgroundColor;

    taskDivs.forEach((div) => {
        div.style.border = `2px solid ${computedColor}`;
    })
};

export {displayHeader, createTodayAddTask, createUpcomingAddTask, generateTask, colorGeneratedTasks, consolidatedArray, categories};
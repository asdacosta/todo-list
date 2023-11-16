import './style.css';
import {displaySetting, paintColorCircle, generateColors} from './setting.js';
import * as todayFunctions from './today.js';
import * as todayUpcomingFunctions from './today-upcoming.js';

const importAllImages = (function () {
    function importAll(r) {
        return r.keys().map(r);
    }
    const imgs = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));
})();


const launchToday = (function () {
    const todayDiv = document.querySelectorAll('.today');
    const taskSection = document.querySelector('main > section');
    const isFullSpan = document.querySelector('main > span');

    todayDiv.forEach((item) => {
        item.addEventListener('click', () => {
            taskSection.innerHTML = '';
            isFullSpan.innerHTML = '';
            todayUpcomingFunctions.displayHeader('Today');
            if (taskSection.textContent === '') {
                todayUpcomingFunctions.createTodayAddTask();
            }
        })
    })
})();

const launchUpcoming = (function () {
    const todayDiv = document.querySelectorAll('.upcoming');
    const taskSection = document.querySelector('main > section');
    const isFullSpan = document.querySelector('main > span');

    todayDiv.forEach((item) => {
        item.addEventListener('click', () => {
            taskSection.innerHTML = '';
            isFullSpan.innerHTML = '';
            todayUpcomingFunctions.displayHeader('Upcoming');
            if (taskSection.textContent === '') {
                todayUpcomingFunctions.createUpcomingAddTask();
            }
        })
    })
})();

const launchSettings = (function () {
    const settingsIcon = document.querySelector('.settings');
    settingsIcon.addEventListener('click', () => {
        displaySetting();
        paintColorCircle();
    })
})();

const generateInfo = (function () {
    const infoIcon = document.querySelector('.info');
    const infoContent = document.querySelector('nav > div:last-child > span');

    infoIcon.addEventListener('mouseover', () => {
        infoContent.innerHTML = "Add your tasks in 'Today' or 'Upcoming' section and they will be sorted according to their respective categories."
    })
    infoIcon.addEventListener('mouseout', () => {
        infoContent.textContent = '';
    })
})();